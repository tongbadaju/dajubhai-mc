// Club Data for Daju Bhai Motorcycle Club

export const clubInfo = {
  name: "Daju Bhai MC",
  fullName: "Daju Bhai Motorcycle Club",
  tagline: "Brotherhood on Two Wheels",
  established: 2025,
  logo: "/logo.svg",
  description: "\"Daju Bhai\" means \"Brothers\" in Nepali — a bond that goes beyond blood. We are a brotherhood of passionate riders united by our love for motorcycles and the open road. From scenic mountain passes to challenging terrains, we ride together as family.",
  mission: "To foster a community of responsible riders who share the thrill of adventure, promote road safety, and create lasting bonds through the spirit of motorcycling.",
  galleryUrl: "https://photos.app.goo.gl/g3p7MBuGSsYaj9Fe9/"
};

export const socialLinks = {
  instagram: "https://instagram.com/dajubhaimc",
  facebook: "https://www.facebook.com/people/Daju-Bhai-Motorcycle-Club/61587407092870/",
};

export const rides = [
  {
    id: 1,
    title: "Oxygen Is Optional",
    date: "April 2025",
    location: "North Sikkim",
    distance: "696 km",
    duration: "3 Days",
    description: "The ultimate Himalayan circuit. From Namchi to Lachen and the sacred high-altitude Gurudongmar Lake. We looped back to Lachung, exploring the floral paradise of Yumthang Valley and pushing to the very end of the road at Zero Point.",
    image: "/gallery/1.avif",
    featured: true
  },
  {
    id: 2,
    title: "The Zig-Zag",
    date: "October 2024",
    location: "East Sikkim",
    distance: "268 km",
    duration: "2 Days",
    description: "A breathtaking ascent from Namchi to the mystical Tsongmo Lake, climbing higher to Kupup and the rugged Gnathang Valley. We carved our way through the legendary Dzuluk loops—a ride that chased the clouds along the Old Silk Route.",
    image: "/gallery/8.avif",
    featured: true
  },
  {
    "id": 3,
    "title": "The Go Sadam Community Run",
    "date": "November 2025",
    "location": "Sadam, South Sikkim",
    "distance": "Short Ride",
    "duration": "1 Day",
    "description": "A purpose-driven expedition to promote the 'Go Sadam' initiative. Flagged off by the Area MLA, our club was honored to interact with the Zilla Adhakshya and the OSD to the Hon'ble CM, receiving recognition for our commitment to social causes and local advocacy.",
    "image": "/gallery/13.avif",
    "featured": false
  },
  {
    "id": 4,
    "title": "The First Capital Run",
    "date": "April 2026",
    "location": "West Sikkim",
    "distance": "230 km",
    "duration": "2 Days",
    "description": "A deep dive into the heart of the West. Exploring the historic trails, this journey was a tribute to the ancient capital and the towering peaks that watch over it.",
    "image": "/gallery/14.avif",
    "featured": true
  }
];

export const upcomingRide = null;
// export const upcomingRide = {
//   title: "West Sikkim Expedition",
//   date: "14-15 April 2026",
//   location: "West Sikkim",
//   description: "Our next planned brotherhood ride capturing the beauty of West Sikkim. Dates are tentative and will be finalized soon.",
//   image: "/gallery/west-sk.jpg"
// };

export const members = [
  // Leadership
  {
    id: 1,
    slug: "premanand-rai",
    name: "Premanand Rai",
    role: "Chief",
    bike: "Royal Enfield Himalayan 450",
    bikeNumber: "SK 05 P 6103",
    photo: "/members/premanand-rai/dp.avif",
    coverPhoto: "/members/premanand-rai/cover.avif",
    bikePhoto: "/members/premanand-rai/bike.avif",
    socialLinks: {
      instagram: "https://instagram.com/__anan.14",
    },
    quote: "The road is my teacher, the bike is my companion.",
    featured: true
  },
  {
    id: 2,
    slug: "samir-bhujel",
    name: "Samir Bhujel",
    role: "Secretary",
    bike: "Hero Xpulse 200 4V",
    bikeNumber: "SK 04 PA 3133",
    photo: "/members/samir-bhujel/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/xpulse.avif",
    socialLinks: {
      instagram: "https://instagram.com/samir_bhujel09",
    },
    quote: "Every ride is a new story waiting to be told.",
    featured: true
  },
  {
    id: 3,
    slug: "sahil-rai",
    name: "Sahil Rai",
    role: "Treasurer",
    bike: "Yamaha MT-15",
    bikeNumber: null,
    photo: "/members/sahil-rai/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/mt15.avif",
    socialLinks: {
      instagram: "https://instagram.com/r__sahil",
    },
    quote: "I don't need GPS, I follow my instincts.",
    featured: true
  },
  {
    id: 4,
    slug: "niten-rai",
    name: "Niten Rai",
    role: "Media Head",
    bike: "Royal Enfield Hunter 350",
    bikeNumber: "SK 05 P 4830",
    photo: "/members/niten-rai/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/hunter-gray.avif",
    socialLinks: {
      instagram: "https://instagram.com/sekwabubu",
    },
    quote: "Riding is an investment in happiness.",
    featured: true
  },
  {
    id: 5,
    slug: "tushar-rai",
    name: "Tushar Rai",
    role: "Media Head",
    bike: "Royal Enfield Himalayan 411",
    bikeNumber: "SK 05 P 4263",
    photo: "/members/tushar-rai/dp.avif",
    coverPhoto: "/members/tushar-rai/cover.avif",
    bikePhoto: "/members/tushar-rai/bike.avif",
    socialLinks: {
      instagram: "https://instagram.com/tongbadaju"
    },
    quote: "Bujhyo ni?",
    featured: true
  },
  {
    id: 6,
    slug: "anmol-rai",
    name: "Anmol Rai",
    role: "Media Head",
    bike: "Royal Enfield Hunter 350",
    bikeNumber: "SK 05 PD 0888",
    photo: "/members/anmol-rai/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/hunter-blue.avif",
    socialLinks: {
      instagram: "https://instagram.com/wachipa_",
    },
    quote: "Small displacement, massive torque.",
    featured: true
  },
  {
    id: 7,
    slug: "uttam-sharma",
    name: "Uttam Sharma",
    role: "Community Manager",
    bike: "Yezdi Adventure",
    bikeNumber: null,
    photo: "/members/uttam-sharma/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/yezdiadv.avif",
    socialLinks: {
      instagram: "https://instagram.com/uttaamsharmadhakal",
    },
    quote: "No rider left behind.",
    featured: true
  },
  {
    id: 8,
    slug: "swadhin-rai",
    name: "Swadhin Rai",
    role: "Community Manager",
    bike: null,
    bikeNumber: null,
    photo: "/members/swadhin-rai/dp.avif",
    coverPhoto: null,
    socialLinks: {
      instagram: "https://instagram.com/scerworn_15",
    },
    quote: "Safety first, adventure always.",
    featured: true
  },
  {
    id: 9,
    slug: "abhijeet-yonzon",
    name: "Abhijeet Yonzon",
    role: "Tech Lead",
    bike: "Royal Enfield Himalayan 411",
    bikeNumber: "SK 02 PC 0777",
    photo: "/members/abhijeet-yonzon/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/himalayan-green.avif",
    socialLinks: {
      instagram: "https://instagram.com/ig_yonzon_07",
    },
    quote: "Mountains call, and I must ride.",
    featured: false
  },
  {
    id: 10,
    slug: "dewan-chettri",
    name: "Dewan Chettri",
    role: "Tech Lead",
    bike: "Bajaj Dominar 400",
    bikeNumber: "WB 74 BJ 0972",
    photo: "/members/dewan-chettri/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/dominar.avif",
    socialLinks: {
      instagram: "https://instagram.com/dewanchettri",
    },
    quote: "Brotherhood first, everything else follows.",
    featured: false
  },
  // Members
  {
    id: 11,
    slug: "dishant-pradhan",
    name: "Dishant Pradhan",
    role: "Member",
    bike: "Husqvarna Svartpilen 250",
    bikeNumber: "SK 05 P 2563",
    photo: "/members/dishant-pradhan/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/svartpilen.avif",
    socialLinks: {
      instagram: "https://instagram.com/dishantzy",
    },
    quote: "The road less traveled is where legends are made.",
    featured: false
  },
  {
    id: 12,
    slug: "jeevesh-rai",
    name: "Jeevesh Rai",
    role: "Member",
    bike: "Royal Enfield Hunter 350",
    bikeNumber: "SK 05 P 5213",
    photo: "/members/jeevesh-rai/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/hunter-black.avif",
    socialLinks: {
      instagram: "https://instagram.com/jee_p_esh07",
    },
    quote: "Every ride is a chance to find yourself.",
    featured: false
  },
  {
    id: 13,
    slug: "welson-gurung",
    name: "Welson Gurung",
    role: "Member",
    bike: "Royal Enfield Himalayan 411",
    bikeNumber: "SK 05 P 2301",
    photo: "/members/welson-gurung/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/himalayan-blue.avif",
    socialLinks: {
      instagram: "https://instagram.com/w.e.l.s.o.n.97",
    },
    quote: "Life begins where the road curves.",
    featured: false
  },
  {
    id: 14,
    slug: "wangdi-lepcha",
    name: "Wangdi Lepcha",
    role: "Member",
    bike: "Yamaha R15M",
    bikeNumber: "SK 05 P 3645",
    photo: "/members/wangdi-lepcha/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/r15m.avif",
    socialLinks: {
      instagram: "https://instagram.com/wanns.l_",
    },
    quote: "Speed is temporary, the thrill is forever.",
    featured: false
  },
  {
    id: 15,
    slug: "tashi-bhutia",
    name: "Tashi Bhutia",
    role: "Member",
    bike: "Royal Enfield Hunter 350",
    bikeNumber: null,
    photo: "/members/tashi-bhutia/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/hunter-black.avif",
    socialLinks: {
      instagram: "https://instagram.com/waraioni_13",
    },
    quote: "Ride together, stay together.",
    featured: false
  },
  {
    id: 16,
    slug: "jason-lepcha",
    name: "Jason Lepcha",
    role: "Member",
    bike: "TVS Apache RR 310",
    bikeNumber: null,
    photo: "/members/jason-lepcha/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/rr310.avif",
    socialLinks: {
      instagram: "https://instagram.com/ja9o.n",
    },
    quote: "Adventure awaits around every bend.",
    featured: false
  },
  {
    id: 17,
    slug: "sumiran-pradhan",
    name: "Sumiran Pradhan",
    role: "Member",
    bike: "Royal Enfield Guerrilla 450",
    bikeNumber: "SK 06 P 3109",
    photo: "/members/sumiran-pradhan/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/guerrilla.avif",
    socialLinks: {
      instagram: "https://instagram.com/hoo.oman_",
    },
    quote: "Jum ride!",
    featured: false
  },
  {
    id: 18,
    slug: "adarsh-rai",
    name: "Adarsh Rai",
    role: "Member",
    bike: null,
    bikeNumber: null,
    photo: "/members/adarsh-rai/dp.avif",
    coverPhoto: null,
    socialLinks: {
      instagram: "https://instagram.com/adarsh_as_always",
    },
    quote: "The journey matters more than the destination.",
    featured: false
  },
  {
    id: 19,
    slug: "anuj-rai",
    name: "Anuj Rai",
    role: "Member",
    bike: "Yezdi Adventure",
    bikeNumber: null,
    photo: "/members/anuj-rai/dp.avif",
    coverPhoto: null,
    bikePhoto: "/bikes/yezdiadv.avif",
    socialLinks: {
      instagram: "https://instagram.com/anujj_raiii",
    },
    quote: "Riding with brothers, chasing horizons.",
    featured: false
  },
  {
    id: 23,
    slug: "puran-rai",
    name: "Puran Rai",
    role: "Member",
    bike: null,
    bikeNumber: "SK 05 P 4337",
    photo: null,
    coverPhoto: null,
    bikePhoto: null,
    socialLinks: {},
    quote: "Riding is life.",
    featured: false
  },

  // Advisors
  {
    id: 20,
    slug: "sudhir-chettri",
    name: "Sudhir Chettri",
    role: "Advisor",
    bike: null,
    bikeNumber: null,
    photo: null,
    coverPhoto: null,
    bikePhoto: null,
    socialLinks: {},
    featured: false
  },
  {
    id: 21,
    slug: "andrew-lepcha",
    name: "Andrew Lepcha",
    role: "Advisor",
    bike: null,
    bikeNumber: null,
    photo: null,
    coverPhoto: null,
    bikePhoto: null,
    socialLinks: {},
    featured: false
  },
  {
    id: 22,
    slug: "mahesh-pradhan",
    name: "Mahesh Pradhan",
    role: "Advisor",
    bike: null,
    bikeNumber: null,
    photo: null,
    coverPhoto: null,
    bikePhoto: null,
    socialLinks: {},
    featured: false
  }
];

export const rules = [
  {
    id: 1,
    title: "Safety First",
    description: "All members must wear proper riding gear including helmet, gloves, jacket, and boots during every ride. No exceptions.",
    icon: "🛡️",
    category: "Safety"
  },
  {
    id: 2,
    title: "Respect the Road",
    description: "Follow all traffic rules and regulations. No reckless riding, stunts, or speeding in public areas. We represent our club.",
    icon: "🚦",
    category: "Conduct"
  },
  {
    id: 3,
    title: "Brotherhood Code",
    description: "Support fellow riders at all times. Never leave a member stranded. What happens in the club, stays in the club.",
    icon: "🤝",
    category: "Brotherhood"
  },
  {
    id: 4,
    title: "Ride Ready",
    description: "Ensure your motorcycle is properly maintained and serviced before every group ride. Carry essential tools and documents.",
    icon: "🔧",
    category: "Preparation"
  },
  {
    id: 5,
    title: "Communication",
    description: "Stay connected on group rides. Hand signals are mandatory. Maintain proper formation and distance between bikes.",
    icon: "📡",
    category: "Safety"
  },
  {
    id: 6,
    title: "Zero Tolerance",
    description: "Absolutely no riding under the influence of alcohol or drugs. Violators will face immediate suspension from the club.",
    icon: "🚫",
    category: "Conduct"
  },
  {
    id: 7,
    title: "Environmental Responsibility",
    description: "Leave no trace. Dispose of waste properly. Respect nature and local communities during our rides.",
    icon: "🌿",
    category: "Ethics"
  },
  {
    id: 8,
    title: "Club Dues",
    description: "Monthly membership fee of minimum ₹100 is mandatory to support club activities and events. Contributions to ride funds are separate.",
    icon: "💰",
    category: "Membership"
  },
  {
    id: 9,
    title: "Punctuality",
    description: "Be at the meeting point at least 15 minutes before scheduled departure. Consistent late arrivals may result in exclusion from rides.",
    icon: "⏰",
    category: "Conduct"
  },
  {
    id: 10,
    title: "Fuel Policy",
    description: "Always start with a full tank. Know the fuel stops on the route. Inform the Road Captain if you need a fuel stop.",
    icon: "⛽",
    category: "Preparation"
  },
  {
    id: 11,
    title: "Guest Policy",
    description: "Guests may join rides with prior approval from the President. They must follow all club rules and sign a liability waiver.",
    icon: "👥",
    category: "Membership"
  },
  {
    id: 12,
    title: "Photography & Media",
    description: "Respect members' privacy. Obtain consent before posting photos or videos on social media. Tag the official club account.",
    icon: "📸",
    category: "Ethics"
  },
  {
    id: 13,
    title: "Formation Riding",
    description: "Maintain staggered formation on highways. Single file on winding roads. Never break formation without signaling.",
    icon: "🏁",
    category: "Safety"
  },
  {
    id: 14,
    title: "Emergency Protocol",
    description: "In case of accident or breakdown, other riders must stop. Contact emergency services if needed. Carry emergency contact info.",
    icon: "🚨",
    category: "Safety"
  },
  {
    id: 15,
    title: "Conflict Resolution",
    description: "Disputes between members should be resolved privately or brought to the leadership. No public arguments or social media drama.",
    icon: "⚖️",
    category: "Conduct"
  }
];

export const gallery = [
  "/gallery/1.avif",
  "/gallery/2.avif",
  "/gallery/3.avif",
  "/gallery/4.avif",
  "/gallery/5.avif",
  "/gallery/6.avif",
  "/gallery/7.avif",
  "/gallery/8.avif",
  "/gallery/9.avif",
  "/gallery/10.avif"
];

export const stats = [
  { number: "20+", label: "Members" },
  { number: "3", label: "Epic Rides" },
  { number: "1000+", label: "KM Covered" },
  { number: "1", label: "Year of Brotherhood" }
];

export const contactInfo = {
  email: "dajubhaimotorcycleclub@gmail.com",
  phone: "+91 6295 728 532",
  location: "Sikkim, India"
};

export const heroSlides = [
  {
    id: 1,
    image: "/gallery/1.avif",
    caption: "Born To Ride — Live To Explore"
  },
  {
    id: 2,
    image: "/gallery/4.avif",
    caption: "Chasing Horizons — Finding Freedom"
  },
  {
    id: 3,
    image: "/gallery/5.avif",
    caption: "Brotherhood — United We Ride"
  },
  {
    id: 4,
    image: "/gallery/6.avif",
    caption: "The Journey Continues"
  },
  {
    id: 5,
    image: "/gallery/8.avif",
    caption: "Ride With Pride"
  }
];
