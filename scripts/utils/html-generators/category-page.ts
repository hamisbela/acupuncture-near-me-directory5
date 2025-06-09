import { Category } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid } from './layout.js';
import { 
  businessInfo, 
  directoryTerms,
  seoInfo 
} from '../../../src/config/directory-config.js';

export function generateCategoryPage(category: Category): string {
  const salons = category.salons || [];
  const salonCount = category.salonCount || salons.length;
  
  // Build meta description
  const metaDescription = seoInfo.descriptionTemplates.category
    ? seoInfo.descriptionTemplates.category.replace('{category}', category.category.toLowerCase())
    : `Find ${category.category.toLowerCase()} services specializing in ${businessInfo.type} ${businessInfo.service}. Browse our directory of professional ${businessInfo.professionPlural}.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: 'Categories', url: '/categories/' },
    { label: category.category }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-indigo-900">
        ${category.category}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Browse our directory of ${category.category.toLowerCase()} services specializing in ${businessInfo.type} and ${businessInfo.serviceDetailed}.
      </p>
      <div class="mt-2 text-indigo-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} ${directoryTerms.listingTerm}${salonCount !== 1 ? 's' : ''} found
        </span>
      </div>
    </header>

    ${salons.length > 0 
      ? generateListingsGrid(salons, `${category.category} Listings`)
      : `
        <div class="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-bold text-indigo-800 mb-4">No Listings Found</h2>
          <p class="text-gray-600 mb-6">We couldn't find any ${category.category.toLowerCase()} listings at this time.</p>
          <a href="/add-a-listing/" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Add Your Business
          </a>
        </div>
      `
    }

    <div class="mt-16 bg-indigo-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-indigo-800 mb-4">About ${category.category}</h2>
      <p class="text-gray-700 mb-4">
        ${category.category} services often include ${businessInfo.type}, which is ${businessInfo.uniqueSellingPoint}. Professional ${businessInfo.professionPlural} use specialized equipment to target and treat individual hair follicles.
      </p>
      <p class="text-gray-700 mb-4">
        When choosing a ${category.category.toLowerCase()} service for ${businessInfo.type}, look for certified practitioners with experience in treating your specific hair and skin type. Many professionals offer free consultations to discuss your needs.
      </p>
      <p class="text-gray-700">
        Browse our listings to find qualified ${category.category.toLowerCase()} services specializing in ${businessInfo.type}. Contact them directly to learn more about their services, pricing, and to schedule your appointment.
      </p>
    </div>
  </main>`;

  return pageWrapper(`${category.category} - ${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)} Directory`, metaDescription, content);
}