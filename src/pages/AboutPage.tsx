import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Star, Zap, Info, MapPin, Phone } from 'lucide-react';
import { 
  siteInfo, 
  businessInfo, 
  seoInfo 
} from '../config/directory-config';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{seoInfo.titleTemplates.about.replace('{businessType}', businessInfo.type)}</title>
        <meta name="description" content={seoInfo.descriptionTemplates.about} />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900">About {siteInfo.name}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding professional {businessInfo.type} {businessInfo.service} services in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At {siteInfo.name}, our mission is to connect individuals seeking {businessInfo.serviceDetailed} solutions with qualified, licensed {businessInfo.professionPlural} in their local area. We believe everyone deserves access to safe, effective {businessInfo.service} services from practitioners who understand traditional Chinese medicine and holistic healing approaches.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of {businessInfo.type} services, making it easy to find the right practitioner near you. Our platform allows you to browse listings by location, read detailed practice profiles, and make informed decisions about your {businessInfo.service} journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-indigo-800 mb-4">For Patients</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Find qualified {businessInfo.professionPlural} in your local area</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Access detailed practice profiles with services, specialties, and contact information</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient options near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with licensed practitioners</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-indigo-800 mb-4">For Practitioners</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential patients</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Showcase your services, specialties, and practice details</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Grow your patient base with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-indigo-600 mt-1 mr-3" size={20} />
                  <span>Stand out in a specialized, niche directory</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">What Makes {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Different</h2>
            <p className="text-gray-700 mb-4">
              {businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is {businessInfo.uniqueSellingPoint}. Unlike conventional medicine that often focuses on treating symptoms, acupuncture addresses the root cause of health issues by restoring balance to the body's energy systems.
            </p>
            <p className="text-gray-700 mb-4">
              The process works by inserting thin, sterile needles at specific points on the body to stimulate the flow of qi (energy) and promote natural healing. This ancient practice has been refined over thousands of years and is now recognized by modern healthcare systems worldwide for its effectiveness.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">{businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Zap className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Treats root causes, not just symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-green-500 mt-1 mr-2" size={16} />
                    <span>No side effects or drug interactions</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Holistic approach to wellness</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Thousands of years of proven results</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Conventional Medicine</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Zap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Often focuses on symptom management</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>May have side effects</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Targets specific conditions</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Relatively recent development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              {siteInfo.name} was founded by a team of digital marketing professionals who recognized the need for a specialized platform connecting {businessInfo.type} practitioners with patients seeking holistic healthcare solutions in their local communities.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both practitioners and patients, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on {businessInfo.type} services. Many qualified {businessInfo.professionPlural} were difficult to find online, and patients struggled to locate licensed practitioners in their areas.
            </p>
            <p className="text-gray-700">
              Today, {siteInfo.name} is the premier online resource for {businessInfo.type} services across the United States. We continue to expand our listings and improve our platform to better serve both {businessInfo.type} practitioners and their patients.
            </p>
          </div>
          
          <div className="bg-indigo-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you a licensed {businessInfo.profession}? Add your practice to our directory and connect with potential patients in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;