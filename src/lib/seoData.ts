export const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Picnic Project Newcastle",
    "image": "https://thepicnicproject.au/images/style-pic-1.jpg",
    "description": "Luxury picnic setups for birthdays, hens parties, baby showers, gender reveals, anniversaries, proposals, engagements, group events, and social gatherings in Newcastle, NSW.",
    "url": "https://thepicnicproject.au",
    "telephone": "+61 400 000 000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Newcastle",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -32.9283,
      "longitude": 151.7817
    },
    "areaServed": [
      "Newcastle City", "Ocean Baths", "Bar Beach", "Dixon Park", 
      "Merewether Beach", "King Edward Park", "Nobbys Beach & Foreshore", "Hunter Valley"
    ],
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide food with your picnic packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialise in luxury setups and styling. While we don't provide catering directly, we work with amazing local grazing partners and are happy to coordinate food for your event."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you service in Newcastle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We service all of Newcastle City including Ocean Baths, Bar Beach, Dixon Park, Merewether Beach, King Edward Park, and Nobbys Beach. We also travel to the Hunter Valley on request."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a content creator to my package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer a content creator add-on to perfectly capture your proposal, hens party, or baby shower so you can stay in the moment."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if it rains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We closely monitor the weather. If rain is forecast, we work with you to move the picnic to an indoor location, your home, or a covered venue, or reschedule based on availability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you cater for large groups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Whether it's an intimate anniversary for two or a large hens party or corporate event, we can scale our setups to accommodate groups of all sizes."
        }
      },
      {
        "@type": "Question",
        "name": "What styles are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three signature aesthetics: The 'Blue' (bold blue florals and statement glassware), The 'Neutral' (timeless and elegant), and The 'Red & Pink' (playful and vibrant)."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Picnic Setup",
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Picnic Project Newcastle"
    },
    "areaServed": "Newcastle, NSW"
  }
];

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://thepicnicproject.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Book Your Picnic",
      "item": "https://thepicnicproject.au/book"
    }
  ]
};
