import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface BeholdPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  mediaType: string;
  caption?: string;
  prunedCaption?: string;
  sizes?: {
    small?: { mediaUrl: string };
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
    full?: { mediaUrl: string };
  };
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Touch swiping state for mobile carousel
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // IMPORTANT: Replace this with the client's actual Behold feed URL
  const BEHOLD_FEED_URL = 'https://feeds.behold.so/WnIw7MKxavuXW5l4FnmS';
  const INSTAGRAM_HANDLE = '@thepicnicprojectnewcastle';
  const INSTAGRAM_URL = 'https://instagram.com/thepicnicprojectnewcastle';

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        const response = await fetch(BEHOLD_FEED_URL);
        if (!response.ok) throw new Error('API fetch failed');
        const data = await response.json();
        
        // Limit to 6 posts for the grid/carousel
        if (data && data.posts && Array.isArray(data.posts)) {
          setPosts(data.posts.slice(0, 6));
        } else {
          throw new Error('Invalid posts structure');
        }
      } catch (err) {
        console.error('Error fetching Instagram feed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  const handlePrev = () => {
    if (posts.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (posts.length === 0) return;
    setActiveIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    else if (isRightSwipe) handlePrev();
  };

  const getImageUrl = (post: BeholdPost): string => {
    if (post.sizes) {
      if (post.sizes.medium?.mediaUrl) return post.sizes.medium.mediaUrl;
      if (post.sizes.small?.mediaUrl) return post.sizes.small.mediaUrl;
      if (post.sizes.large?.mediaUrl) return post.sizes.large.mediaUrl;
    }
    return post.mediaUrl;
  };

  // Helper to format captions nicely
  const formatCaption = (caption: string) => {
    if (!caption) return '';
    // Remove hashtags at the end for a cleaner look, or just truncate
    const clean = caption.replace(/#\w+/g, '').trim();
    return clean.length > 80 ? clean.substring(0, 80) + '...' : clean;
  };

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-handwriting text-zinc-900 mb-4"
          >
            Catch us on the 'gram
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 font-light"
          >
            See what we've been up to lately! Follow along for gorgeous new setups, behind-the-scenes fun, and plenty of picnic inspiration.
          </motion.p>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 p-4 h-[500px] animate-pulse">
                <div className="w-full h-3/4 bg-zinc-100 rounded-2xl mb-4" />
                <div className="w-3/4 h-4 bg-zinc-100 rounded-full mb-2" />
                <div className="w-1/2 h-4 bg-zinc-100 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {/* ERROR STATE */}
        {error && !loading && (
          <div className="text-center py-12 bg-white rounded-[2rem] shadow-sm border border-zinc-100">
            <Instagram className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-zinc-900 mb-2">Feed Temporarily Unavailable</h3>
            <p className="text-zinc-500 mb-6">You can still view all our beautiful setups directly on our profile.</p>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D83D50] hover:bg-[#c23647] text-white rounded-full font-medium transition-colors"
            >
              <Instagram size={18} />
              Visit {INSTAGRAM_HANDLE}
            </a>
          </div>
        )}

        {/* ACTIVE FEED */}
        {!loading && !error && posts.length > 0 && (
          <>
            {/* DESKTOP GRID */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                  
                  {/* Media Container */}
                  <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden">
                    {post.mediaType === 'VIDEO' ? (
                      <video
                        src={post.mediaUrl}
                        poster={getImageUrl(post)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={getImageUrl(post)}
                        alt={post.caption || 'Instagram Post'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    
                    {/* Top Right Icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      {post.mediaType === 'VIDEO' ? <Play size={14} className="ml-0.5" /> : <Instagram size={16} />}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                        <div className="w-full h-full bg-white rounded-full overflow-hidden border border-white">
                          <img src="/images/logo.webp" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <span className="font-medium text-sm text-zinc-900">{INSTAGRAM_HANDLE}</span>
                    </div>
                    
                    <p className="text-zinc-600 text-sm mb-6 flex-grow leading-relaxed">
                      {formatCaption(post.prunedCaption || post.caption || '')}
                    </p>
                    
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-zinc-100 hover:bg-[#D83D50] text-zinc-800 hover:text-white rounded-xl text-center font-medium text-sm transition-colors duration-300"
                    >
                      Watch now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CAROUSEL */}
            <div className="block md:hidden relative -mx-4 px-4">
              <div 
                className="w-full overflow-hidden rounded-[2rem]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {posts.map((post) => (
                    <div key={post.id} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col">
                        
                        {/* Media Container */}
                        <div className="relative aspect-[3/4] bg-zinc-100">
                          {post.mediaType === 'VIDEO' ? (
                            <video
                              src={post.mediaUrl}
                              poster={getImageUrl(post)}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <img
                              src={getImageUrl(post)}
                              alt={post.caption || 'Instagram Post'}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            {post.mediaType === 'VIDEO' ? <Play size={14} className="ml-0.5" /> : <Instagram size={16} />}
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-5 bg-white">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                              <div className="w-full h-full bg-white rounded-full overflow-hidden">
                                <img src="/images/logo.webp" alt="Profile" className="w-full h-full object-cover" />
                              </div>
                            </div>
                            <span className="font-medium text-sm text-zinc-900">{INSTAGRAM_HANDLE}</span>
                          </div>
                          
                          <p className="text-zinc-600 text-sm mb-5 leading-relaxed line-clamp-2">
                            {formatCaption(post.prunedCaption || post.caption || '')}
                          </p>
                          
                          <a
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-3 bg-[#D83D50] text-white rounded-xl text-center font-medium text-sm shadow-sm"
                          >
                            Watch now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 px-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm active:scale-95 transition-transform"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-1.5">
                  {posts.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-[#D83D50]' : 'w-1.5 bg-zinc-300'}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm active:scale-95 transition-transform"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
