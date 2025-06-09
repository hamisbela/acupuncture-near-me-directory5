import { BeautySalon, State, Category } from '../models.js';
import { pageWrapper, getStateUrl } from './layout.js';
import { 
  siteInfo, 
  businessInfo, 
  seoInfo,
  icons
} from '../../../src/config/directory-config.js';

export function generateIndexPage(states: State[], _categories: Category[], featuredSalons: BeautySalon[]): string {
  // Sort states alphabetically
  const sortedStates = [...states]
    .filter(state => state.salonCount && state.salonCount > 0)
    .sort((a, b) => (b.salonCount || 0) - (a.salonCount || 0));

  // Build meta description
  const metaDescription = seoInfo.defaultDescription;

  // Format the main content
  const content = `
  <main>
    <!-- Hero Section -->
    <section class="bg-indigo-900 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Find ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.service.charAt(0).toUpperCase() + businessInfo.service.slice(1)} Professionals</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Discover licensed ${businessInfo.professionPlural} and traditional Chinese medicine specialists in your area with our comprehensive directory.</p>
        
        <!-- Search Form -->
        <div class="max-w-2xl mx-auto bg-white rounded-lg p-1 flex flex-col md:flex-row">
          <div class="flex-grow flex">
            <input type="text" placeholder="Search by location..." class="flex-grow p-3 rounded-l-lg border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-600">
            <button class="bg-indigo-600 text-white p-3 rounded-r-lg hover:bg-indigo-700 transition-colors">
              <i class="${icons.ui.search} mr-2"></i> Search
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Listings Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-indigo-900">Featured ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Professionals</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuredSalons.slice(0, 6).map(salon => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              ${salon.images && salon.images.length > 0 
                ? `<img src="https://${siteInfo.cdnDomain}/${siteInfo.cdnPathPrefix}${salon.images[0].path}" alt="${salon.title}" class="w-full h-56 object-cover">`
                : `<div class="w-full h-56 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-4xl">
                    <i class="${icons.features.business}"></i>
                  </div>`
              }
              <div class="p-6">
                <h3 class="text-xl font-bold text-indigo-800 mb-2">${salon.title}</h3>
                <p class="text-gray-600 mb-3">
                  <i class="${icons.ui.location} text-indigo-500 mr-2"></i>
                  ${salon.city?.city || ''}, ${salon.state?.state || ''}
                </p>
                ${salon.categories && salon.categories.length > 0 
                  ? `<p class="text-gray-600 mb-3">
                      <i class="${icons.features.category} text-indigo-500 mr-2"></i>
                      ${salon.categories.map(cat => cat.category).join(', ')}
                    </p>`
                  : ''
                }
                <div class="flex justify-between items-center">
                  ${salon.telephone ? `
                  <a href="tel:${salon.telephone}" class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    <i class="${icons.ui.phone} mr-1"></i> Call Now
                  </a>
                  ` : '<div></div>'}
                  ${salon.website ? `
                  <a href="${salon.website.startsWith('http') ? salon.website : 'https://' + salon.website}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800">
                    <i class="${icons.ui.website} mr-1"></i> Website
                  </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="text-center mt-10">
          <a href="/states/" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Browse All Listings
          </a>
        </div>
      </div>
    </section>

    <!-- Browse by State Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-indigo-900">Browse by State</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${sortedStates.slice(0, 16).map(state => `
            <a href="${getStateUrl(state.slug || '')}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="font-semibold text-indigo-700 hover:text-indigo-500">${state.state}</h3>
              <p class="text-sm text-gray-500 mt-1">${state.salonCount || 0} ${businessInfo.type} Service${(state.salonCount || 0) !== 1 ? 's' : ''}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Acupuncture Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8 text-indigo-900">About ${siteInfo.name}</h2>
          
          <div class="bg-white p-8 rounded-lg shadow-md">
            <p class="text-gray-700 mb-4">
              ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is ${businessInfo.uniqueSellingPoint}. This ancient healing art uses thin, sterile needles inserted at specific points on the body to stimulate energy flow and restore balance, promoting natural healing and wellness.
            </p>
            
            <p class="text-gray-700 mb-4">
              During an ${businessInfo.type} session, a licensed practitioner will assess your health concerns and insert fine needles at specific acupoints along energy pathways called meridians. This process helps regulate qi (life energy) flow, reduce inflammation, and activate the body's natural healing mechanisms.
            </p>
            
            <p class="text-gray-700 mb-6">
              ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is effective for treating a wide range of conditions, including chronic pain, stress, anxiety, digestive issues, fertility concerns, and sleep disorders. It's a safe, natural approach that complements conventional medicine and supports overall wellness.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-indigo-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-indigo-800">Benefits of ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)}</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="${icons.features.check} text-green-500 mt-1 mr-2"></i>
                    <span>Natural pain relief without medication</span>
                  </li>
                  <li class="flex items-start">
                    <i class="${icons.features.check} text-green-500 mt-1 mr-2"></i>
                    <span>Reduces stress and promotes relaxation</span>
                  </li>
                  <li class="flex items-start">
                    <i class="${icons.features.check} text-green-500 mt-1 mr-2"></i>
                    <span>Improves sleep quality and energy levels</span>
                  </li>
                  <li class="flex items-start">
                    <i class="${icons.features.check} text-green-500 mt-1 mr-2"></i>
                    <span>Supports overall wellness and balance</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-indigo-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-indigo-800">What to Expect</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="${icons.features.info} text-indigo-500 mt-1 mr-2"></i>
                    <span>Initial consultation with a licensed ${businessInfo.profession}</span>
                  </li>
                  <li class="flex items-start">
                    <i class="${icons.features.info} text-indigo-500 mt-1 mr-2"></i>
                    <span>Personalized treatment plan for your needs</span>
                  </li>
                  <li class="flex items-start">
                    <i class="${icons.features.info} text-indigo-500 mt-1 mr-2"></i>
                    <span>Gentle, minimally invasive treatment</span>
                  </li>
                  <li class="flex items-start">
                    <i class="${icons.features.info} text-indigo-500 mt-1 mr-2"></i>
                    <span>Relaxing experience with lasting benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Are You a Licensed ${businessInfo.profession.charAt(0).toUpperCase() + businessInfo.profession.slice(1)}?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">Add your practice to our directory and reach potential patients searching for ${businessInfo.type} ${businessInfo.service} services in your area.</p>
        <a href="/add-a-listing/" class="inline-block bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
          Add Your Listing
        </a>
      </div>
    </section>
  </main>`;

  return pageWrapper(`${siteInfo.name} - Find Professional Services Near You`, metaDescription, content);
}