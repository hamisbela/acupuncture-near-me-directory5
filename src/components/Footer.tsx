import React from 'react';
import { Link } from 'react-router-dom';
import { 
  siteInfo, 
  socialMedia, 
  popularLocations 
} from '../config/directory-config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="block">Acupuncture</span>
              <span className="block">NearMe.directory</span>
            </h3>
            <p className="text-indigo-200">Find the best acupuncture practitioners and traditional Chinese medicine specialists in your area.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-indigo-200 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-indigo-200 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-indigo-200 hover:text-white">Contact</Link></li>
              <li><Link to="/add-a-listing" className="text-indigo-200 hover:text-white">Add Listing</Link></li>
              <li><a href="/sitemap.html" className="text-indigo-200 hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Popular States</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                {popularLocations.states.slice(0, Math.ceil(popularLocations.states.length / 2)).map(state => (
                  <li key={state.slug}>
                    <a 
                      href={`/states/${state.slug}/`} 
                      className="text-indigo-200 hover:text-white"
                    >
                      {state.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {popularLocations.states.slice(Math.ceil(popularLocations.states.length / 2)).map(state => (
                  <li key={state.slug}>
                    <a 
                      href={`/states/${state.slug}/`} 
                      className="text-indigo-200 hover:text-white"
                    >
                      {state.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Cities</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                {popularLocations.cities.slice(0, Math.ceil(popularLocations.cities.length / 2)).map(city => (
                  <li key={city.slug}>
                    <a 
                      href={`/cities/${city.slug}/`} 
                      className="text-indigo-200 hover:text-white"
                    >
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {popularLocations.cities.slice(Math.ceil(popularLocations.cities.length / 2)).map(city => (
                  <li key={city.slug}>
                    <a 
                      href={`/cities/${city.slug}/`} 
                      className="text-indigo-200 hover:text-white"
                    >
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-indigo-800 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex space-x-6 text-2xl justify-center md:justify-start">
            <a href={socialMedia.facebook} className="text-indigo-200 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href={socialMedia.twitter} className="text-indigo-200 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href={socialMedia.instagram} className="text-indigo-200 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href={socialMedia.linkedin} className="text-indigo-200 hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="text-center md:text-right text-indigo-200">
            <p>&copy; {siteInfo.copyrightYear} {siteInfo.name}. All rights reserved.</p>
            <p className="mt-1 text-sm">
              <a href="/sitemap.html" className="hover:text-white">Sitemap</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;