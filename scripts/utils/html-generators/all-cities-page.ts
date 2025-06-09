import { City } from '../models.js';
import { pageWrapper, getCityUrl } from './layout.js';
import { 
  businessInfo, 
  seoInfo 
} from '../../../src/config/directory-config.js';

export function generateAllCitiesPage(cities: City[]): string {
  // Sort cities alphabetically
  const sortedCities = [...cities]
    .filter(city => city.salonCount && city.salonCount > 0)
    .sort((a, b) => {
      // First sort by state
      const stateA = a.state?.state || '';
      const stateB = b.state?.state || '';
      const stateCompare = stateA.localeCompare(stateB);
      
      // If states are the same, sort by city name
      if (stateCompare === 0) {
        return a.city.localeCompare(b.city);
      }
      
      return stateCompare;
    });
  
  // Group cities by state
  const citiesByState = sortedCities.reduce((acc, city) => {
    const stateName = city.state?.state || 'Unknown';
    if (!acc[stateName]) {
      acc[stateName] = [];
    }
    acc[stateName].push(city);
    return acc;
  }, {} as Record<string, City[]>);
  
  // Get list of states with cities
  const statesWithCities = Object.keys(citiesByState).sort();
  
  // Build meta description
  const metaDescription = seoInfo.descriptionTemplates.allCities || 
    `Browse ${businessInfo.type} ${businessInfo.service} services by city. Find ${businessInfo.serviceDetailed} professionals in cities across the United States.`;

  // Calculate total cities
  const totalCities = sortedCities.length;

  // Format the main content
  const content = `
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        Browse ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.serviceDetailed} Services by City
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional ${businessInfo.type} ${businessInfo.service} providers in cities across the United States. Browse by city to discover services in your area.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} services across ${totalCities} cities
        </span>
      </div>
    </header>

    <div class="bg-white p-8 rounded-lg shadow-md mb-12">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">All Cities with ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Services</h2>
      
      <div class="space-y-8">
        ${statesWithCities.map(stateName => {
          const stateCities = citiesByState[stateName];
          
          return `
          <div>
            <h3 class="text-xl font-bold text-indigo-700 mb-4 border-b border-gray-200 pb-2">${stateName}</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              ${stateCities.map(city => {
                const citySlug = city.slug || '';
                
                return `
                <a href="${getCityUrl(citySlug)}" class="block bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
                  <h4 class="font-semibold text-indigo-700">${city.city}</h4>
                  <p class="text-xs text-gray-500 mt-1">${city.salonCount || 0} ${businessInfo.type} Service${(city.salonCount || 0) !== 1 ? 's' : ''}</p>
                </a>
              `}).join('')}
            </div>
          </div>
        `}).join('')}
      </div>
    </div>

    <div class="bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">Choosing an ${businessInfo.profession} in Your City</h2>
      <p class="text-gray-700 mb-4">
        When selecting an ${businessInfo.type} provider in your city, consider their certification, experience, and client reviews. Professional ${businessInfo.professionPlural} should be licensed and use sterilized equipment for safe, effective treatments.
      </p>
      <p class="text-gray-700 mb-4">
        Many practitioners offer free consultations where you can discuss your specific needs, ask questions about the process, and learn about pricing. This is an excellent opportunity to ensure you're comfortable with the ${businessInfo.profession} and their facility.
      </p>
      <p class="text-gray-700">
        Browse our city listings to find qualified ${businessInfo.type} professionals near you. Contact them directly to schedule a consultation and start your journey to ${businessInfo.serviceDetailed}.
      </p>
    </div>
  </main>`;

  return pageWrapper(`Browse ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.service} by City - National Directory`, metaDescription, content);
}