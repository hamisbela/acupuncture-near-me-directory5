import { City, BeautySalon, Category, Amenity, Payment } from '../models.js';
import { pageWrapper, generateBreadcrumbs, getStateUrl } from './layout.js';
import { 
  siteInfo, 
  businessInfo, 
  seoInfo, 
  defaultImages,
  icons,
  directoryTerms
} from '../../../src/config/directory-config.js';

// Function to generate detailed salon card with contact info
function generateDetailedSalonCard(salon: BeautySalon, _index: number): string {
  const image = salon.images && salon.images.length > 0
    ? `https://${siteInfo.cdnDomain}/${siteInfo.cdnPathPrefix}${salon.images[0].path}`
    : defaultImages.defaultListing;
  
  const categories = salon.categories
    ? salon.categories.map((c: Category) => c.category).join(', ')
    : '';

  const amenities = salon.amenities && salon.amenities.length > 0
    ? salon.amenities.slice(0, 5).map((a: Amenity) => `<span class="inline-block bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full mr-1 mb-1">${a.amenity}</span>`).join('')
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
  function formatOpeningHours(hoursText?: string): string {
    if (!hoursText) return '';
    
    return `
      <div class="mt-2 text-sm">
        <p class="font-medium text-indigo-600 mb-1">Hours:</p>
        <p class="text-gray-600">${hoursText.replace(/"/g, '').split(/,|\n/).filter((h: string) => h.trim()).join('<br>')}</p>
      </div>
    `;
  }

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
          <p class="text-gray-600">${salon.payments.map((p: Payment) => p.payment).join(', ')}</p>
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

export function generateCityPage(city: City): string {
  const stateName = city.state?.state || 'Unknown State';
  const stateSlug = city.state?.slug || '';
  const salons = city.salons || [];
  const salonCount = city.salonCount || salons.length;
  
  // Build meta description
  const metaDescription = seoInfo.descriptionTemplates.city
    .replace('{city}', city.city)
    .replace('{state}', stateName);

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: stateName, url: getStateUrl(stateSlug) },
    { label: city.city }
  ]);

  // Create a featured salons section for any salon with reviews or images
  const featuredSalons = salons.filter(salon => 
    (salon.reviews_data && salon.reviews_data.length > 0) || 
    (salon.images && salon.images.length > 0)
  ).slice(0, 4);

  const regularSalons = salons.filter(salon => 
    !featuredSalons.includes(salon)
  );

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.serviceDetailed} in ${city.city}, ${stateName}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional {businessInfo.type} {businessInfo.service} services in ${city.city}. Compare practices, services, and contact details for local practitioners.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} ${directoryTerms.listingTerm}${salonCount !== 1 ? 's' : ''} found
        </span>
      </div>
    </header>

    ${salons.length > 0 ? `
      <!-- Quick Filters -->
      <div class="mb-8 bg-white p-4 rounded-lg shadow-md">
        <div class="flex flex-wrap items-center justify-between">
          <h2 class="text-lg font-semibold text-indigo-800 mb-2 md:mb-0">Quick Filters:</h2>
          <div class="flex flex-wrap gap-2">
            <button id="filter-all" class="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm transition-colors filter-btn active" data-filter="all">All Listings</button>
            <button id="filter-reviews" class="bg-gray-100 hover:bg-indigo-100 text-gray-800 hover:text-indigo-800 px-3 py-1 rounded-full text-sm transition-colors filter-btn" data-filter="reviews">Has Reviews</button>
            <button id="filter-website" class="bg-gray-100 hover:bg-indigo-100 text-gray-800 hover:text-indigo-800 px-3 py-1 rounded-full text-sm transition-colors filter-btn" data-filter="website">Has Website</button>
            <button id="filter-photos" class="bg-gray-100 hover:bg-indigo-100 text-gray-800 hover:text-indigo-800 px-3 py-1 rounded-full text-sm transition-colors filter-btn" data-filter="photos">Has Photos</button>
          </div>
        </div>
      </div>

      ${featuredSalons.length > 0 ? `
        <!-- Featured Listings -->
        <section class="mb-12 salon-section" id="featured-listings">
          <h2 class="text-2xl font-bold text-indigo-800 mb-6">Featured ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Services in ${city.city}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${featuredSalons.map((salon, index) => generateDetailedSalonCard(salon, index)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- All Listings -->
      <section class="mb-12 salon-section" id="all-listings">
        <h2 class="text-2xl font-bold text-indigo-800 mb-6">All ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Services in ${city.city}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${regularSalons.map((salon, index) => generateDetailedSalonCard(salon, index + featuredSalons.length)).join('')}
        </div>
      </section>

      <!-- Filter Script -->
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const filterButtons = document.querySelectorAll('.filter-btn');
          const allSalons = document.querySelectorAll('.salon-section > div > div');
          
          filterButtons.forEach(button => {
            button.addEventListener('click', function() {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-100', 'text-indigo-800'));
              filterButtons.forEach(btn => {
                btn.classList.add('bg-gray-100', 'text-gray-800');
                btn.classList.remove('bg-indigo-100', 'text-indigo-800');
              });
              
              // Add active class to clicked button
              this.classList.add('active', 'bg-indigo-100', 'text-indigo-800');
              this.classList.remove('bg-gray-100', 'text-gray-800');
              
              const filter = this.getAttribute('data-filter');
              
              // Show all salons if filter is "all"
              if (filter === 'all') {
                allSalons.forEach(salon => {
                  salon.style.display = 'block';
                });
                return;
              }
              
              // Apply filter
              allSalons.forEach(salon => {
                if (filter === 'reviews' && salon.innerHTML.includes('text-yellow-500')) {
                  salon.style.display = 'block';
                } else if (filter === 'website' && salon.innerHTML.includes('fa-globe')) {
                  salon.style.display = 'block';
                } else if (filter === 'photos' && !salon.innerHTML.includes('unsplash.com')) {
                  salon.style.display = 'block';
                } else {
                  salon.style.display = 'none';
                }
              });
            });
          });
        });
      </script>
    ` : `
      <div class="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 class="text-2xl font-bold text-indigo-800 mb-4">No Listings Found</h2>
        <p class="text-gray-600 mb-6">We couldn't find any {businessInfo.type} services in ${city.city} at this time.</p>
        <a href="/add-a-listing/" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Add Your Practice
        </a>
      </div>
    `}

    <!-- About Section -->
    <section class="mt-16 bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">Finding ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} in ${city.city}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-gray-700 mb-4">
            ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is {businessInfo.uniqueSellingPoint}. In ${city.city}, ${stateName}, you'll find qualified, licensed practitioners who can provide this ancient healing art safely and effectively.
          </p>
          <p class="text-gray-700 mb-4">
            When choosing an ${businessInfo.profession} in ${city.city}, consider their licensing, experience, and patient reviews. Many practitioners offer free consultations to discuss your specific health concerns and develop a personalized treatment plan.
          </p>
          <p class="text-gray-700">
            Compare the listings above to find the right ${businessInfo.type} professional for you in ${city.city}. Look for practitioners who specialize in your areas of concern and offer convenient hours and payment options.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-indigo-800 mb-3">Common Questions</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-indigo-700">How much does ${businessInfo.type} cost in ${city.city}?</h4>
              <p class="text-gray-700 text-sm">Prices vary depending on the practitioner and treatment complexity. Most ${businessInfo.professionPlural} in ${city.city} charge between $75-$150 per session, with initial consultations sometimes costing more.</p>
            </div>
            <div>
              <h4 class="font-semibold text-indigo-700">How many sessions will I need?</h4>
              <p class="text-gray-700 text-sm">The number of sessions varies based on your condition and response to treatment. Many patients see improvement within 3-6 sessions, while chronic conditions may require ongoing treatment.</p>
            </div>
            <div>
              <h4 class="font-semibold text-indigo-700">Are ${businessInfo.professionPlural} in ${city.city} licensed?</h4>
              <p class="text-gray-700 text-sm">${businessInfo.professionPlural} in ${stateName} must typically be licensed by the state board. Always verify your practitioner's credentials and ensure they are properly licensed before beginning treatment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${city.state && city.state.cities && city.state.cities.length > 1 ? `
      <!-- Nearby Cities -->
      <section class="mt-12">
        <h2 class="text-2xl font-bold text-indigo-800 mb-6">Find ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} in Other ${stateName} Cities</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          ${city.state.cities.filter(c => c.id !== city.id && c.salonCount && c.salonCount > 0).slice(0, 12).map(c => `
            <a href="/cities/${c.slug}/" class="block bg-white text-center p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <span class="font-medium text-indigo-700 hover:text-indigo-600">${c.city}</span>
            </a>
          `).join('')}
        </div>
      </section>
    ` : ''}
  </main>`;

  return pageWrapper(`${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.service} in ${city.city}, ${stateName} - Directory of Professionals`, metaDescription, content);
}