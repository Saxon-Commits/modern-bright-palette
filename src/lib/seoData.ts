export const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Picnic Project Newcastle",
    "image": "https://thepicnicproject.au/images/style-pic-1.webp",
    "description": "Luxury picnic setups for birthdays, hens parties, baby showers, gender reveals, anniversaries, proposals, engagements, group events, and social gatherings in Newcastle, NSW.",
    "url": "https://thepicnicproject.au",
    "telephone": "+61422666211",
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
          "text": "We specialise in luxury picnic setup and styling. While we don't provide food or catering directly, we're more than happy to share a curated list of amazing local caterers in Newcastle along with plenty of ideas to help everything come together seamlessly, so there's minimal stress or planning on your end. Many of our clients choose to BYO a beautiful grazing or charcuterie board to share on the day!"
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you service in Newcastle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We service the entire Newcastle area and within a 20-kilometre radius. If you have a dream location for your picnic outside of this area, we're still more than happy to make it work. In these cases, we'll just have a quick chat with you about a small travel fee, but we absolutely love bringing your vision to life in special locations wherever possible."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a content creator to my package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We also work closely with a local content creator and photographer to capture your perfect moment, so you can look back on it and relive it forever."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if it rains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can provide you with a list of backup indoor venue options to arrange in the case of rain. Our picnic setups are not suitable to get wet, however we are more than happy to adapt and bring your setup indoors to your preferred location — whether that's at home or another venue of your choice. There are also great free undercover spaces in Newcastle, such as the Train Sheds, which offer protection from the rain, as well as a range of paid indoor venue options that we can recommend. If rain is forecast and no suitable backup location has been organised, we can either reschedule your booking or offer a refund (excluding the deposit)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you cater for large groups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we recommend our picnics are best suited for up to 16 people. For larger groups of 17 to 20, you're welcome to enquire directly with us and we can discuss options to accommodate your event."
        }
      },
      {
        "@type": "Question",
        "name": "What styles are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three signature aesthetics: The 'Blue' (bold blue florals and statement glassware), The 'Neutral' (timeless and elegant), and The 'Red & Pink' (playful and vibrant)."
        }
      },
      {
        "@type": "Question",
        "name": "Are kids or pets allowed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we don't want your two-legged or four-legged friends to miss out on your luxury picnic experience! We just ask that all guests are mindful and supervised, especially little ones, to help keep everything looking its best. If you're bringing children, we recommend bringing along some activities or entertainment to keep them happily occupied, particularly to avoid food or spills on our beautiful white rugs and styling pieces. Pets are also very welcome, as long as they're kept clean and supervised to ensure they're not walking dirty paws across the rugs or setup items."
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
