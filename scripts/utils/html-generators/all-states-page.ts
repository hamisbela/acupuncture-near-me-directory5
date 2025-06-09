import { State } from '../models.js';
import { pageWrapper, getStateUrl } from './layout.js';
import { 
  businessInfo,
  seoInfo 
} from '../../../src/config/directory-config.js';

export function generateAllStatesPage(states: State[]): string {
  // Sort states alphabetically
  const sortedStates = [...states].sort((a, b) => a.state.localeCompare(b.state));
  
  // Build meta description
  const metaDescription = seoInfo.descriptionTemplates.allStates || 
    `Browse ${businessInfo.type} ${businessInfo.service} services by state. Find ${businessInfo.serviceDetailed} professionals across the United States.`;

  // Format the main content
  const content = `
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        Browse ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.serviceDetailed} Services by State
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional ${businessInfo.type} ${businessInfo.service} providers across the United States. Browse by state to discover services in your area.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          Services available across ${states.length} states
        </span>
      </div>
    </header>

    <div class="bg-white p-8 rounded-lg shadow-md mb-12">
      <h2 class="text-2xl font-bold text-indigo-800 mb-6">All States</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${sortedStates.map(state => {
          const stateSlug = state.slug || '';
          const citiesCount = state.cities?.length || 0;
          
          return `
          <a href="${getStateUrl(stateSlug)}" class="block bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <h3 class="font-bold text-lg text-indigo-700">${state.state}</h3>
            <p class="text-sm text-gray-600 mt-1">${state.salonCount || 0} ${businessInfo.type} Service${(state.salonCount || 0) !== 1 ? 's' : ''}</p>
            <p class="text-xs text-gray-500 mt-1">${citiesCount} cit${citiesCount !== 1 ? 'ies' : 'y'}</p>
          </a>
        `}).join('')}
      </div>
    </div>

    <div class="bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">About Our ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Directory</h2>
      <p class="text-gray-700 mb-4">
        Our nationwide directory of ${businessInfo.type} services helps you find professionals who provide ${businessInfo.uniqueSellingPoint} in your state. ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} is effective for all hair types and colors, making it a universal solution.
      </p>
      <p class="text-gray-700 mb-4">
        Unlike laser hair removal, which reduces hair growth temporarily, ${businessInfo.type} offers a permanent solution by destroying the hair growth cell. It's the only method for permanent hair removal recognized by the FDA.
      </p>
      <p class="text-gray-700">
        Browse our listings by state to find qualified practitioners in your area. Most ${businessInfo.professionPlural} offer free consultations to discuss your specific needs and develop a personalized treatment plan.
      </p>
    </div>
  </main>`;

  return pageWrapper(`Browse ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} ${businessInfo.service} by State - National Directory`, metaDescription, content);
}