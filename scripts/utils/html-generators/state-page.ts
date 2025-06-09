import { State, BeautySalon } from '../models.js';
import { pageWrapper, generateBreadcrumbs, getCityUrl } from './layout.js';
import { 
  businessInfo, 
  defaultImages, 
  seoInfo, 
  icons,
  siteInfo
} from '../../../src/config/directory-config.js';

// Function to generate detailed salon card with contact info
function generateDetailedSalonCard(salon: BeautySalon, _index: number): string {
  const image = salon.images && salon.images.length > 0
    ? `https://${siteInfo.cdnDomain}/${siteInfo.cdnPathPrefix}${salon.images[0].path}`
    : defaultImages.defaultListing;
  
  const categories = salon.categories
    ? salon.categories.map((c) => c.category).join(', ')
    : '';

  const amenities = salon.amenities && salon.amenities.length > 0
    ? salon.amenities.slice(0, 5).map((a) => `<span class="inline-block bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full mr-1 mb-1">${a.amenity}</span>`).join('')
    : '';

  // Basic info to show initially
  const basicInfo = `
    <div class="mb-3">
      <p class="text-gray-700">${salon.description ? salon.description.substring(0, 100) + (salon.description.length > 100 ? '...' : '') : `Professional ${businessInfo.type} services available at this location.`}</p>
    </div>
    
    <div class="mb-2">
      ${amenities}
    </div>
  `;

  // Format opening hours into a clean readable format
  const formatOpeningHours = (hoursText?: string): string => {
    if (!hoursText) return '';
    
    return `
      <div class="mt-2 text-sm">
        <p class="font-medium text-indigo-600 mb-1">Hours:</p>
        <p class="text-gray-600">${hoursText.replace(/"/g, '').split(/,|\n/).filter((h) => h.trim()).join('<br>')}</p>
      </div>
    `;
  };

  // Extra details that will be shown when "View Details" is clicked
  const extraDetails = `
    <div id="details-${salon.id}" class="hidden mt-4 border-t pt-4">
      ${salon.service_product ? `
        <div class="mt-3">
          <p class="font-medium text-indigo-600 mb-1">Services:</p>
          <p class="text-sm text-gray-600">${salon.service_product}</p>
        </div>
      ` : ''}
      
      ${formatOpeningHours(salon.opening_hours)}
      
      ${salon.payments && salon.payments.length > 0 ? `
        <div class="mt-2 text-sm">
          <p class="font-medium text-indigo-600 mb-1">Payment Accepted:</p>
          <p class="text-gray-600">${salon.payments.map((p) => p.payment).join(', ')}</p>
        </div>
      ` : ''}
      
      ${salon.reviews_data && salon.reviews_data.length > 0 ? `
        <div class="mt-3 p-3 bg-gray-50 rounded-lg">
          <div class="flex justify-between items-center mb-1">
            <span class="font-medium text-gray-700">${salon.reviews_data[0].author || 'Patient'}</span>
            <span class="text-yellow-500">${salon.reviews_data[0].rating_stars ? '★'.repeat(parseInt(salon.reviews_data[0].rating_stars)) : ''}</span>
          </div>
          <p class="text-sm text-gray-600 italic">"${salon.reviews_data[0].review.substring(0, 120)}${salon.reviews_data[0].review.length > 120 ? '...' : ''}"</p>
        </div>
      ` : ''}
    </div>
  `;

  return `
  <div class="bg-white rounded-lg shadow-md overflow-hidden md:col-span-1 transition-transform hover:-translate-y-1 hover:shadow-lg">
    <div class="md:flex">
      <div class="md:w-2/5">
        <img src="${image}" alt="${salon.title}" class="w-full h-full object-cover min-h-[200px]">
      </div>
      <div class="p-6 md:w-3/5">
        <h3 class="text-xl font-bold text-indigo-800 mb-2">${salon.title}</h3>
        
        <div class="flex flex-wrap items-center mb-3">
          <div class="mr-3 flex items-center text-gray-600">
            <i class="${icons.ui.location} text-indigo-500 mr-1"></i>
            ${salon.address || `${salon.city?.city || ''}, ${salon.state?.state || ''}`}
          </div>
          
          ${salon.telephone ? `
          <div class="mr-3 flex items-center text-gray-600">
            <i class="${icons.ui.phone} text-indigo-500 mr-1"></i>
            <a href="tel:${salon.telephone}" class="hover:text-indigo-600">${salon.telephone}</a>
          </div>
          ` : ''}
          
          ${salon.website ? `
          <div class="flex items-center text-gray-600">
            <i class="${icons.ui.website} text-indigo-500 mr-1"></i>
            <a href="${salon.website.startsWith('http') ? salon.website : 'https://' + salon.website}" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600">Website</a>
          </div>
          ` : ''}
        </div>
        
        ${categories ? `<p class="text-gray-600 mb-3"><i class="${icons.features.category} text-indigo-500 mr-2"></i>${categories}</p>` : ''}
        
        ${basicInfo}
        
        <div class="mt-4 flex justify-between">
          <button 
            onclick="document.getElementById('details-${salon.id}').classList.toggle('hidden')" 
            class="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <i id="icon-${salon.id}" class="fas fa-chevron-down mr-1"></i> 
            <span id="text-${salon.id}">View Details</span>
            <script>
              document.querySelector('[onclick="document.getElementById(\\'details-${salon.id}\\').classList.toggle(\\'hidden\\')"]').addEventListener('click', function() {
                const isHidden = document.getElementById('details-${salon.id}').classList.contains('hidden');
                document.getElementById('icon-${salon.id}').className = isHidden ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1';
                document.getElementById('text-${salon.id}').textContent = isHidden ? 'Hide Details' : 'View Details';
              });
            </script>
          </button>
          
          <div class="flex space-x-2">
            ${salon.telephone ? `
            <a href="tel:${salon.telephone}" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <i class="${icons.ui.phone} mr-1"></i> Call
            </a>
            ` : ''}
            
            ${salon.website ? `
            <a href="${salon.website.startsWith('http') ? salon.website : 'https://' + salon.website}" target="_blank" rel="noopener noreferrer" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <i class="${icons.ui.website} mr-1"></i> Website
            </a>
            ` : ''}
          </div>
        </div>
        
        ${extraDetails}
      </div>
    </div>
  </div>
  `;
}

// Function to organize cities by region or alphabetically
function groupCitiesByRegion(cities: any[]): Record<string, any[]> {
  // This simplified version just groups alphabetically
  // In a real implementation, you might group by county or region
  
  // Sort cities by name
  const sortedCities = [...cities].sort((a, b) => a.city.localeCompare(b.city));
  
  // Create groups A-Z
  const groups: Record<string, any[]> = {};
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  alphabet.forEach(letter => {
    const citiesStartingWith = sortedCities.filter(city => 
      city.city.toUpperCase().startsWith(letter) && city.salonCount && city.salonCount > 0
    );
    
    if (citiesStartingWith.length > 0) {
      groups[letter] = citiesStartingWith;
    }
  });
  
  return groups;
}

// Function to highlight top cities based on salon count
function getTopCities(cities: any[], count = 6): any[] {
  return [...cities]
    .filter(city => city.salonCount && city.salonCount > 0)
    .sort((a, b) => (b.salonCount || 0) - (a.salonCount || 0))
    .slice(0, count);
}

export function generateStatePage(state: State): string {
  const cities = state.cities || [];
  const salons = state.salons || [];
  
  // Get top cities by salon count
  const topCities = getTopCities(cities);
  
  // Group all cities alphabetically
  const cityGroups = groupCitiesByRegion(cities);
  
  // Build meta description
  const metaDescription = seoInfo.descriptionTemplates.state.replace('{state}', state.state);

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: state.state }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.serviceDetailed} in ${state.state}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional ${businessInfo.type} ${businessInfo.service} services across ${state.state}. Browse by city or view all listings.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salons.length} ${businessInfo.type} service${salons.length !== 1 ? 's' : ''} available
        </span>
      </div>
    </header>

    <!-- Featured City Cards -->
    ${topCities.length > 0 ? `
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">Top Cities for ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} in ${state.state}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${topCities.map(city => {
          // Use acupuncture/wellness images instead of city images
          const wellnessImage = defaultImages.beautyImages[Math.floor(Math.random() * defaultImages.beautyImages.length)];
          
          return `
          <a href="${getCityUrl(city.slug)}" class="group block relative overflow-hidden rounded-lg shadow-md">
            <div class="aspect-w-16 aspect-h-9">
              <img src="${wellnessImage}" alt="${businessInfo.type} in ${city.city}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 class="text-xl font-bold">${city.city}</h3>
              <p class="flex items-center text-white/90 mt-1 text-sm">
                <i class="${icons.features.business} mr-2"></i>
                ${city.salonCount || 0} ${businessInfo.type} Service${(city.salonCount || 0) !== 1 ? 's' : ''}
              </p>
            </div>
          </a>
        `}).join('')}
      </div>
    </section>
    ` : ''}

    <!-- All Cities Grouped Alphabetically -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">All Cities with ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} in ${state.state}</h2>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex flex-wrap gap-2 mb-4 border-b pb-4">
          ${Object.keys(cityGroups).map(letter => 
            `<a href="#letter-${letter}" class="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 transition-colors">${letter}</a>`
          ).join('')}
        </div>

        <div class="space-y-6">
          ${Object.entries(cityGroups).map(([letter, cities]) => `
            <div id="letter-${letter}" class="scroll-mt-24">
              <h3 class="text-xl font-bold text-indigo-700 mb-4 border-b border-gray-200 pb-2">${letter}</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                ${cities.map(city => {
                  const citySlug = city.slug || '';
                  
                  return `
                  <a href="${getCityUrl(citySlug)}" class="block bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
                    <h4 class="font-semibold text-indigo-700">${city.city}</h4>
                    <p class="text-xs text-gray-500 mt-1">${city.salonCount || 0} ${businessInfo.type} Service${(city.salonCount || 0) !== 1 ? 's' : ''}</p>
                  </a>
                `}).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Listings Across the State -->
    ${salons.length > 0 ? `
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">Featured ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Services in ${state.state}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${salons.slice(0, 8).map((salon, index) => generateDetailedSalonCard(salon, index)).join('')}
      </div>
      
      ${salons.length > 8 ? `
      <div class="text-center mt-8">
        <button class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors" 
                onclick="document.querySelectorAll('.load-more-salon').forEach(salon => salon.style.display = 'block'); this.style.display = 'none';">
          Load More Listings
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        ${salons.slice(8, 16).map((salon, index) => 
          `<div class="load-more-salon" style="display: none">${generateDetailedSalonCard(salon, index + 8)}</div>`
        ).join('')}
      </div>
      ` : ''}
    </section>
    ` : ''}

    <!-- About Acupuncture in This State -->
    <section class="bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">About ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} in ${state.state}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-gray-700 mb-4">
            ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is ${businessInfo.uniqueSellingPoint}. In ${state.state}, licensed professionals provide this ancient healing art at various locations throughout the state.
          </p>
          <p class="text-gray-700 mb-4">
            Unlike conventional medicine that often focuses on symptom management, ${businessInfo.type} addresses the root cause of health issues by restoring balance to the body's energy systems. This holistic approach can be particularly effective for chronic pain, stress, and various health conditions.
          </p>
          <p class="text-gray-700">
            Browse our directory to find ${businessInfo.type} services near you in ${state.state}. Many practitioners offer free consultations to discuss your specific health concerns and develop a customized treatment plan.
          </p>
        </div>
        
        <div class="bg-white p-5 rounded-lg">
          <h3 class="text-xl font-bold text-indigo-800 mb-4">${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Regulations in ${state.state}</h3>
          <p class="text-gray-700 mb-4">
            In ${state.state}, ${businessInfo.professionPlural} are typically required to complete specialized training and obtain proper licensing or certification. Always verify your practitioner's credentials before beginning treatment.
          </p>
          <div class="mt-4">
            <h4 class="font-semibold text-indigo-700 mb-2">What to Look For:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Professional license or certification</li>
              <li>Clean, sanitary facilities</li>
              <li>Sterile, single-use needles</li>
              <li>Positive patient reviews</li>
              <li>Experience with your specific condition</li>
              <li>Clear pricing and treatment plans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>`;

  return pageWrapper(`${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.service} in ${state.state} - Directory of Services Across Cities`, metaDescription, content);
}