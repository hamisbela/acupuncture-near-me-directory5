import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { 
  siteInfo, 
  businessInfo, 
  seoInfo,
  faqItems,
  socialMedia
} from '../config/directory-config';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{seoInfo.titleTemplates.contact}</title>
        <meta name="description" content={seoInfo.descriptionTemplates.contact} />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with the {siteInfo.name} team
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">Send Us a Message</h2>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600 mt-1">For general inquiries:</p>
                    <a href={`mailto:${siteInfo.contactEmails.general}`} className="text-indigo-600 hover:text-indigo-800">
                      {siteInfo.contactEmails.general}
                    </a>
                    <p className="text-gray-600 mt-2">For business listings:</p>
                    <a href={`mailto:${siteInfo.contactEmails.business}`} className="text-indigo-600 hover:text-indigo-800">
                      {siteInfo.contactEmails.business}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600 mt-1">Customer Support:</p>
                    <a href={`tel:${siteInfo.supportPhone}`} className="text-indigo-600 hover:text-indigo-800">
                      {siteInfo.supportPhone}
                    </a>
                    <p className="text-gray-600 mt-1">{siteInfo.supportHours}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600 mt-1">{siteInfo.supportHours}</p>
                    <p className="text-gray-600">Saturday-Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-lg">
              <h2 className="text-xl font-bold text-indigo-800 mb-4">Follow Us</h2>
              <p className="text-gray-700 mb-4">
                Stay connected with us on social media for the latest updates, tips, and news about {businessInfo.type}.
              </p>
              <div className="flex space-x-4 text-2xl">
                <a href={socialMedia.facebook} className="text-indigo-600 hover:text-indigo-800">
                  <Facebook size={28} />
                </a>
                <a href={socialMedia.twitter} className="text-indigo-600 hover:text-indigo-800">
                  <Twitter size={28} />
                </a>
                <a href={socialMedia.instagram} className="text-indigo-600 hover:text-indigo-800">
                  <Instagram size={28} />
                </a>
                <a href={socialMedia.linkedin} className="text-indigo-600 hover:text-indigo-800">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold text-lg text-gray-800">{item.question}</h3>
                  <p className="text-gray-700 mt-2">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;