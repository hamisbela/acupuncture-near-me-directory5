/**
 * DIRECTORY CONFIGURATION
 * 
 * This file contains all customizable variables for the directory.
 * Modify this file to change the business type, descriptions, colors, and other content.
 */

// Basic site information
export const siteInfo = {
  // The name of the directory (e.g., "Acupuncture Near Me")
  name: "Acupuncture Near Me",
  
  // A shorter version of the name for mobile displays or tight spaces
  shortName: "Acupuncture",
  
  // The main domain for the site (used in meta tags, sitemap, etc.)
  domain: "acupuncturenearme.directory",
  
  // The website URL with protocol
  url: "https://acupuncturenearme.directory",
  
  // Site author
  author: "AcupunctureNearMe.directory",
  
  // Copyright year
  copyrightYear: new Date().getFullYear(),
  
  // Contact email addresses
  contactEmails: {
    general: "info@acupuncturenearme.directory",
    business: "listings@acupuncturenearme.directory",
  },
  
  // Phone number for customer support
  supportPhone: "(800) 555-1234",
  
  // Support hours
  supportHours: "Monday-Friday: 9am-5pm EST",
  
  // CDN domain for images (without protocol)
  cdnDomain: "img.acupuncturenearme.directory",
  
  // CDN path prefix for custom images
  cdnPathPrefix: "your-r2-bucket-name",
};

// Business-specific information
export const businessInfo = {
  // The type of business this directory focuses on (e.g., "acupuncture", "barber", "dentist")
  type: "acupuncture",
  
  // The plural form of the business type
  typePlural: "acupuncture services",
  
  // The service provided (e.g., "acupuncture treatment", "haircuts", "dental care")
  service: "treatment",
  
  // More specific service description
  serviceDetailed: "acupuncture therapy",
  
  // Unique selling point of this type of business
  uniqueSellingPoint: "a time-tested traditional medicine practice for wellness, pain relief, and holistic healing",
  
  // Common title for businesses in this directory (e.g., "clinic", "shop", "office")
  businessTitle: "clinic",
  
  // Plural form of the business title
  businessTitlePlural: "clinics",
  
  // The profession name (e.g., "acupuncturist", "barber", "dentist")
  profession: "acupuncturist",
  
  // Plural form of the profession name
  professionPlural: "acupuncturists",
  
  // Alternative terms for the business (used for SEO)
  alternativeTerms: ["acupuncture clinic", "traditional Chinese medicine", "TCM", "acupuncture therapy", "holistic medicine"],
  
  // What the business specialist is called
  specialist: "Licensed Acupuncturist",
};

// Directory-specific nomenclature
export const directoryTerms = {
  // What to call a single business listing
  listingTerm: "listing",
  
  // What to call multiple business listings
  listingTermPlural: "listings",
  
  // Term for the "near me" concept (e.g., "near me", "in your area", "nearby")
  proximityTerm: "near me",
  
  // Common search phrase (e.g., "acupuncture near me")
  searchPhrase: "acupuncture near me",
};

// Benefits of the service/business
export const serviceBenefits = [
  {
    title: "Natural Healing",
    description: "Acupuncture uses your body's natural healing mechanisms to address pain, stress, and various health conditions without medication.",
    icon: "CheckCircle",
  },
  {
    title: "Holistic Approach",
    description: "Treats the whole person, not just symptoms, addressing root causes for comprehensive wellness and long-term health benefits.",
    icon: "Users",
  },
  {
    title: "Proven Effective",
    description: "Thousands of years of practice combined with modern research demonstrate acupuncture's effectiveness for many conditions.",
    icon: "Zap",
  },
];

// SEO and meta tag information
export const seoInfo = {
  // Default meta description for the home page
  defaultDescription: "Find professional acupuncture services near you. Our comprehensive directory features licensed acupuncturists in your local area specializing in traditional Chinese medicine and holistic healing.",
  
  // Keywords for meta tags
  keywords: "acupuncture, acupuncturist, traditional Chinese medicine, TCM, acupuncture near me, holistic healing, pain relief, wellness, natural medicine",
  
  // Meta description templates for different page types
  descriptionTemplates: {
    city: "Find acupuncture treatment clinics in {city}, {state}. Browse our comprehensive directory of licensed acupuncturists and traditional Chinese medicine practitioners.",
    state: "Find acupuncture services in {state}. Browse our comprehensive directory of licensed acupuncturists across cities.",
    category: "Find {category} services specializing in acupuncture and traditional Chinese medicine. Browse our directory of professional acupuncturists.",
    about: "Learn about AcupunctureNearMe.directory, the premier resource for finding professional acupuncture services in your local area.",
    contact: "Contact AcupunctureNearMe.directory for questions, support, or information about our acupuncture business listings.",
    addListing: "Add your {businessType} practice to our directory. Reach new patients looking for acupuncture services in your area.",
    allStates: "Browse acupuncture services by state. Find licensed acupuncturists and traditional Chinese medicine practitioners across the United States.",
    allCities: "Browse acupuncture services by city. Find licensed acupuncturists in cities across the United States.",
    sitemap: "Complete index of all pages on our acupuncture directory"
  },
  
  // Title templates for different page types
  titleTemplates: {
    city: "Acupuncture in {city}, {state} - Directory of Licensed Practitioners",
    state: "Acupuncture in {state} - Directory of Services Across Cities",
    category: "{category} - Acupuncture Directory",
    about: "About {businessType} Near Me | Our Mission & Services",
    contact: "Contact Acupuncture Near Me | Get Support & Information",
    addListing: "Add Your {businessType} Practice | List Your Services in Our Directory",
    sitemap: "Sitemap - Acupuncture Near Me"
  },
};

// Icons used throughout the site
export const icons = {
  // Main site logo icon (Font Awesome class)
  logo: "fas fa-yin-yang",
  
  // Navigation and UI icons
  ui: {
    menu: "fas fa-bars",
    close: "fas fa-times",
    search: "fas fa-search",
    location: "fas fa-map-marker-alt",
    phone: "fas fa-phone",
    email: "fas fa-envelope",
    website: "fas fa-globe",
    hours: "fas fa-clock",
    directions: "fas fa-directions",
    payment: "fas fa-credit-card"
  },
  
  // Social media icons
  social: {
    facebook: "fab fa-facebook",
    twitter: "fab fa-twitter",
    instagram: "fab fa-instagram",
    linkedin: "fab fa-linkedin"
  },
  
  // Business feature icons
  features: {
    amenity: "fas fa-star",
    service: "fas fa-list-check",
    info: "fas fa-info-circle",
    about: "fas fa-info-circle",
    reviews: "fas fa-comments",
    gallery: "fas fa-images",
    category: "fas fa-tag",
    check: "fas fa-check-circle",
    business: "fas fa-clinic-medical"
  }
};

// Colors and styling
export const colors = {
  // Main brand colors
  primary: {
    light: "#c7d2fe", // indigo-200
    main: "#4338ca",  // indigo-700
    dark: "#312e81",  // indigo-900
  },
  
  secondary: {
    light: "#ddd6fe", // purple-200
    main: "#8b5cf6",  // purple-500
    dark: "#6d28d9",  // purple-700
  },
  
  // Text colors
  text: {
    primary: "#1f2937", // gray-800
    secondary: "#6b7280", // gray-500
    light: "#f9fafb", // gray-50 (for dark backgrounds)
  },
  
  // Background colors
  background: {
    light: "#f9fafb", // gray-50
    white: "#ffffff",
    dark: "#1f2937", // gray-800
  },
  
  // Utility colors
  utility: {
    success: "#10b981", // emerald-500
    warning: "#f59e0b", // amber-500
    error: "#ef4444",   // red-500
    info: "#3b82f6",    // blue-500
  },
};

// Default images for the site
export const defaultImages = {
  // Favicon URL
  favicon: "https://img.icons8.com/color/48/yin-yang.png",
  
  // Default image for listings without photos
  defaultListing: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  
  // Open Graph image (for social sharing)
  ogImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  
  // Collection of acupuncture/wellness images for city/state pages
  beautyImages: [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Acupuncture treatment
    "https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Wellness center
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Traditional medicine
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Holistic healing
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Medical treatment
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Health and wellness
  ],
  
  // Hero section background image
  heroBackground: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  
  // City background images
  cityImages: [
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ]
};

// Social media links
export const socialMedia = {
  facebook: "https://www.facebook.com/acupuncturenearme",
  twitter: "https://twitter.com/acupuncturenm",
  instagram: "https://www.instagram.com/acupuncturenearme",
  linkedin: "https://www.linkedin.com/company/acupuncturenearme",
};

// Popular locations - hardcoded for demo, but ideally would be dynamically generated
export const popularLocations = {
  // Top cities (would normally be determined by listing count)
  cities: [
    { name: "New York", state: "New York", slug: "new-york" },
    { name: "Los Angeles", state: "California", slug: "los-angeles" },
    { name: "Chicago", state: "Illinois", slug: "chicago" },
    { name: "Houston", state: "Texas", slug: "houston" },
    { name: "Phoenix", state: "Arizona", slug: "phoenix" },
    { name: "Philadelphia", state: "Pennsylvania", slug: "philadelphia" },
  ],
  
  // Top states (would normally be determined by listing count)
  states: [
    { name: "California", slug: "california" },
    { name: "New York", slug: "new-york" },
    { name: "Texas", slug: "texas" },
    { name: "Florida", slug: "florida" },
    { name: "Illinois", slug: "illinois" },
    { name: "Pennsylvania", slug: "pennsylvania" },
    { name: "Massachusetts", slug: "massachusetts" },
    { name: "Washington", slug: "washington" },
    { name: "Ohio", slug: "ohio" },
    { name: "Georgia", slug: "georgia" },
    { name: "Michigan", slug: "michigan" },
    { name: "North Carolina", slug: "north-carolina" },
    { name: "New Jersey", slug: "new-jersey" },
    { name: "Arizona", slug: "arizona" },
    { name: "Colorado", slug: "colorado" },
    { name: "Maryland", slug: "maryland" },
  ],
};

// FAQ questions and answers for the contact page
export const faqItems = [
  {
    question: "How do I find acupuncture services near me?",
    answer: "You can find local acupuncture practitioners by using our search function on the homepage. Simply enter your city or zip code to discover licensed acupuncturists in your area."
  },
  {
    question: "How do I add my acupuncture practice to the directory?",
    answer: "You can add your acupuncture practice by visiting our Add a Listing page and completing the submission form with your clinic details."
  },
  {
    question: "Is there a fee to list my practice?",
    answer: "We offer both free and premium listing options. Free listings include basic practice information, while premium listings offer enhanced visibility and additional features."
  },
  {
    question: "How can I update my practice information?",
    answer: "To update your practice information, please contact us at listings@acupuncturenearme.directory with your practice name and the changes you'd like to make."
  },
  {
    question: "Do you verify the credentials of listed practitioners?",
    answer: "We make reasonable efforts to verify basic practice information, but we recommend that patients always confirm credentials, licensing, and experience directly with the acupuncturist."
  },
];

// Path configurations for routing
export const pathConfig = {
  // Base paths for different entity types
  base: {
    salon: "/clinic",
    city: "/cities",
    state: "/states",
    category: "/categories",
  },
  
  // React routes that should be caught by the router
  reactRoutes: [
    "/",
    "/about",
    "/contact",
    "/add-a-listing",
  ],
  
  // Special pages
  special: {
    sitemap: "/sitemap.html",
    search: "/search",
  }
};

// Export a default object for importing the entire config at once
export default {
  siteInfo,
  businessInfo,
  directoryTerms,
  serviceBenefits,
  seoInfo,
  colors,
  defaultImages,
  socialMedia,
  popularLocations,
  faqItems,
  icons,
  pathConfig
};