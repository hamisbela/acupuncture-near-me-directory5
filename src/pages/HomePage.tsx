import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Search, Users, Clock, CreditCard, Sparkles, Zap, CheckCircle, Navigation } from 'lucide-react';
import {
  siteInfo,
  businessInfo,
  directoryTerms,
  serviceBenefits,
  defaultImages,
  seoInfo,
  popularLocations,
  socialMedia
} from '../config/directory-config';

// Note: In production, these values would be dynamically generated from the data processing step
// during build time, not hardcoded. The counts should reflect the actual number of listings
// from the database/CSV processing step.
const allCities = popularLocations.cities.concat([
  { name: "San Antonio", state: "Texas", slug: "san-antonio" },
  { name: "San Diego", state: "California", slug: "san-diego" },
  { name: "Dallas", state: "Texas", slug: "dallas" },
  { name: "San Jose", state: "California", slug: "san-jose" },
  { name: "Austin", state: "Texas", slug: "austin" },
  { name: "Jacksonville", state: "Florida", slug: "jacksonville" },
  { name: "Fort Worth", state: "Texas", slug: "fort-worth" },
  { name: "Columbus", state: "Ohio", slug: "columbus" },
  { name: "Charlotte", state: "North Carolina", slug: "charlotte" },
  { name: "Indianapolis", state: "Indiana", slug: "indianapolis" },
  { name: "Seattle", state: "Washington", slug: "seattle" },
  { name: "Denver", state: "Colorado", slug: "denver" },
  { name: "Washington", state: "District of Columbia", slug: "washington" },
  { name: "Boston", state: "Massachusetts", slug: "boston" }
]);

// All 50 states for display on homepage
// Note: In production, these values would be dynamically generated during build time
const allStates = [
  { name: "Alabama", slug: "alabama" },
  { name: "Alaska", slug: "alaska" },
  { name: "Arizona", slug: "arizona" },
  { name: "Arkansas", slug: "arkansas" },
  { name: "California", slug: "california" },
  { name: "Colorado", slug: "colorado" },
  { name: "Connecticut", slug: "connecticut" },
  { name: "Delaware", slug: "delaware" },
  { name: "Florida", slug: "florida" },
  { name: "Georgia", slug: "georgia" },
  { name: "Hawaii", slug: "hawaii" },
  { name: "Idaho", slug: "idaho" },
  { name: "Illinois", slug: "illinois" },
  { name: "Indiana", slug: "indiana" },
  { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" },
  { name: "Kentucky", slug: "kentucky" },
  { name: "Louisiana", slug: "louisiana" },
  { name: "Maine", slug: "maine" },
  { name: "Maryland", slug: "maryland" },
  { name: "Massachusetts", slug: "massachusetts" },
  { name: "Michigan", slug: "michigan" },
  { name: "Minnesota", slug: "minnesota" },
  { name: "Mississippi", slug: "mississippi" },
  { name: "Missouri", slug: "missouri" },
  { name: "Montana", slug: "montana" },
  { name: "Nebraska", slug: "nebraska" },
  { name: "Nevada", slug: "nevada" },
  { name: "New Hampshire", slug: "new-hampshire" },
  { name: "New Jersey", slug: "new-jersey" },
  { name: "New Mexico", slug: "new-mexico" },
  { name: "New York", slug: "new-york" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "North Dakota", slug: "north-dakota" },
  { name: "Ohio", slug: "ohio" },
  { name: "Oklahoma", slug: "oklahoma" },
  { name: "Oregon", slug: "oregon" },
  { name: "Pennsylvania", slug: "pennsylvania" },
  { name: "Rhode Island", slug: "rhode-island" },
  { name: "South Carolina", slug: "south-carolina" },
  { name: "South Dakota", slug: "south-dakota" },
  { name: "Tennessee", slug: "tennessee" },
  { name: "Texas", slug: "texas" },
  { name: "Utah", slug: "utah" },
  { name: "Vermont", slug: "vermont" },
  { name: "Virginia", slug: "virginia" },
  { name: "Washington", slug: "washington" },
  { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" }
];

const HomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchLocation.trim()) {
      // First try to match a city
      const cityMatch = allCities.find(city => 
        city.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      // Then try to match a state
      const stateMatch = allStates.find(state => 
        state.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      // Navigate based on matches
      if (cityMatch) {
        window.location.href = `/cities/${cityMatch.slug}/`;
        return;
      }
      
      if (stateMatch) {
        window.location.href = `/states/${stateMatch.slug}/`;
        return;
      }
      
      // Check if it could be a ZIP code (5 digits)
      const zipCodePattern = /^\d{5}$/;
      if (zipCodePattern.test(searchLocation)) {
        // For ZIP codes, we would ideally have an API to convert ZIP to city/state
        // For now, just redirect to a general search page
        window.location.href = `/search?zip=${searchLocation}`;
        return;
      }
      
      // Default fallback - general states browse page
      window.location.href = `/states/`;
    }
  };

  // Create a dynamic list of popular search examples
  const popularSearches = popularLocations.cities.slice(0, 5).map(city => city.name).join(', ');

  return (
    <>
      <Helmet>
        <title>{siteInfo.name} | Find Local Licensed Acupuncturists & Traditional Chinese Medicine</title>
        <meta name="description" content={seoInfo.defaultDescription} />
        {/* Schema.org markup for local business directory */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${siteInfo.name}",
            "description": "Directory of ${businessInfo.type} ${businessInfo.service} services.",
            "url": "${siteInfo.url}/",
            "sameAs": [
              "${socialMedia.facebook}",
              "${socialMedia.instagram}"
            ]
          }
        `}
        </script>
      </Helmet>

      {/* Hero Section with improved search */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} {businessInfo.service} {directoryTerms.proximityTerm}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Discover licensed {businessInfo.professionPlural} and traditional Chinese medicine specialists in your local area.
          </p>
          
          {/* Improved Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-lg">
              <div className="flex-grow flex items-stretch">
                <div className="bg-gray-50 rounded-l-lg px-4 flex items-center border-l border-t border-b border-gray-200">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter city, state, or ZIP code..." 
                  className="flex-grow p-3 border-t border-b border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white px-4 py-3 rounded-r-lg hover:bg-indigo-700 transition-colors flex items-center whitespace-nowrap"
                >
                  <Search className="mr-2" size={20} />
                  <span>Search</span>
                </button>
              </div>
            </div>
            <p className="text-sm mt-3 text-indigo-200">Popular searches: {popularSearches}</p>
          </form>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#f9fafb">
            <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Why Choose This Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
            Why Choose {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)}?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceBenefits.map((benefit, index) => {
              // We'll use the icon name from the config to determine which icon to display
              let IconComponent: React.ElementType;
              switch (benefit.icon) {
                case 'CheckCircle':
                  IconComponent = CheckCircle;
                  break;
                case 'Users':
                  IconComponent = Users;
                  break;
                case 'Zap':
                  IconComponent = Zap;
                  break;
                default:
                  IconComponent = CheckCircle;
              }
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-center text-indigo-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Cities Section - with city listing counts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Popular Cities</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Find {businessInfo.type} services in these top cities across the United States
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allCities.map((city, index) => (
              <a 
                key={city.slug} 
                href={`/cities/${city.slug}/`} 
                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-indigo-700 hover:text-indigo-500">{city.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {/* This would ideally come from real data */}
                  {Math.max(3, (20 - index))} {businessInfo.type} Services
                </p>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/cities/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              View All Cities <Navigation className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Browse by State Section - showing all 50 states */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">
            Find {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} {businessInfo.service} by State
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Browse our comprehensive directory of licensed {businessInfo.professionPlural} across the United States
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allStates.map((state, index) => (
              <a 
                key={state.slug} 
                href={`/states/${state.slug}/`} 
                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-indigo-700 hover:text-indigo-500">{state.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {/* This would ideally come from real data */}
                  {Math.max(5, (50 - index))} {businessInfo.serviceDetailed}
                </p>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/states/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              View All States <Navigation className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-900">
              About {siteInfo.name}
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Looking for <strong>{directoryTerms.searchPhrase}</strong>? {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is {businessInfo.uniqueSellingPoint}. This ancient practice uses thin needles inserted at specific points on the body to stimulate energy flow and promote natural healing.
              </p>
              
              <p className="text-gray-700 mb-4">
                Our directory helps you find qualified {businessInfo.professionPlural} in your local area who provide professional {businessInfo.type} {businessInfo.service} services. Whether you need treatment for pain management, stress relief, digestive issues, or overall wellness, we connect you with licensed specialists who can help.
              </p>
              
              <p className="text-gray-700 mb-6">
                <strong>{directoryTerms.searchPhrase}</strong> searches are the first step to finding natural, holistic healthcare solutions. Our comprehensive directory features detailed listings with practitioner information, specialties, contact details, and patient reviews to help you make an informed decision about your healthcare.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-indigo-800">Benefits of {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Sparkles className="text-green-500 mt-1 mr-2" size={18} />
                      <span>Natural pain relief without medication</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-green-500 mt-1 mr-2" size={18} />
                      <span>Stress reduction and relaxation</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-green-500 mt-1 mr-2" size={18} />
                      <span>Improved sleep and energy levels</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-green-500 mt-1 mr-2" size={18} />
                      <span>Holistic wellness approach</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-indigo-800">What to Expect</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Users className="text-indigo-500 mt-1 mr-2" size={18} />
                      <span>Consultation with a licensed {businessInfo.profession}</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="text-indigo-500 mt-1 mr-2" size={18} />
                      <span>Personalized treatment plans</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="text-indigo-500 mt-1 mr-2" size={18} />
                      <span>Gentle, minimally invasive treatment</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="text-indigo-500 mt-1 mr-2" size={18} />
                      <span>Various payment options available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Are You a Licensed {businessInfo.profession.charAt(0).toUpperCase() + businessInfo.profession.slice(1)}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Add your practice to our directory and reach potential patients searching for {businessInfo.type} {businessInfo.service} services in your area.
          </p>
          <a href="/add-a-listing/" className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Add Your Listing
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;