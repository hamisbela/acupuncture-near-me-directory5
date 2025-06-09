import { BeautySalon } from '../models.js';
import { 
  siteInfo, 
  businessInfo, 
  defaultImages,
  icons,
  pathConfig
} from '../../../src/config/directory-config.js';

export function generateHead(title: string, description: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link rel="icon" type="image/png" href="${defaultImages.favicon}" />
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Leaflet CSS for maps -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
</head>
<body class="bg-gray-50 text-gray-800">`;
}

export function generateNavbar(): string {
  return `
  <header class="bg-indigo-900 text-white sticky top-0 z-50 shadow-md">
    <div class="container mx-auto px-4 py-3">
      <nav class="flex justify-between items-center">
        <div>
          <a href="/" class="text-2xl font-bold flex items-center">
            <i class="${icons.logo} mr-2"></i>
            <span class="hidden md:inline">${siteInfo.name}</span>
            <span class="md:hidden">${siteInfo.shortName}</span>
          </a>
        </div>
        <div class="hidden md:flex space-x-8 text-lg">
          <a href="/" class="hover:text-indigo-200">Home</a>
          <a href="/about/" class="hover:text-indigo-200">About</a>
          <a href="/contact/" class="hover:text-indigo-200">Contact</a>
          <a href="/add-a-listing/" class="bg-white text-indigo-900 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors font-medium">
            Add Listing
          </a>
        </div>
        <div class="md:hidden">
          <button class="text-xl p-2" id="mobile-menu-button">
            <i class="${icons.ui.menu}"></i>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" class="hidden md:hidden py-4 space-y-4 overflow-hidden">
        <a href="/" class="block hover:text-indigo-200 py-1">Home</a>
        <a href="/about/" class="block hover:text-indigo-200 py-1">About</a>
        <a href="/contact/" class="block hover:text-indigo-200 py-1">Contact</a>
        <a href="/add-a-listing/" class="bg-white text-indigo-900 py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors text-center font-medium mt-2 block">
          Add Listing
        </a>
      </div>
    </div>
  </header>`;
}

export function generateFooter(): string {
  const currentYear = new Date().getFullYear();
  
  return `
  <footer class="bg-indigo-900 text-white mt-12 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">
            <span class="block">${businessInfo.type.charAt(0).toUpperCase() + businessInfo.type.slice(1)}</span>
            <span class="block">${siteInfo.shortName}</span>
          </h3>
          <p class="text-indigo-200">Find the best {businessInfo.type} {businessInfo.service} professionals in your area.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/" class="text-indigo-200 hover:text-white">Home</a></li>
            <li><a href="/about/" class="text-indigo-200 hover:text-white">About</a></li>
            <li><a href="/contact/" class="text-indigo-200 hover:text-white">Contact</a></li>
            <li><a href="/add-a-listing/" class="text-indigo-200 hover:text-white">Add Listing</a></li>
            <li><a href="${pathConfig.special.sitemap}" class="text-indigo-200 hover:text-white">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Popular States</h3>
          <div class="grid grid-cols-2 gap-2">
            <ul class="space-y-2">
              <li><a href="${pathConfig.base.state}/california/" class="text-indigo-200 hover:text-white">California</a></li>
              <li><a href="${pathConfig.base.state}/new-york/" class="text-indigo-200 hover:text-white">New York</a></li>
              <li><a href="${pathConfig.base.state}/florida/" class="text-indigo-200 hover:text-white">Florida</a></li>
              <li><a href="${pathConfig.base.state}/texas/" class="text-indigo-200 hover:text-white">Texas</a></li>
              <li><a href="${pathConfig.base.state}/illinois/" class="text-indigo-200 hover:text-white">Illinois</a></li>
              <li><a href="${pathConfig.base.state}/pennsylvania/" class="text-indigo-200 hover:text-white">Pennsylvania</a></li>
            </ul>
            <ul class="space-y-2">
              <li><a href="${pathConfig.base.state}/ohio/" class="text-indigo-200 hover:text-white">Ohio</a></li>
              <li><a href="${pathConfig.base.state}/georgia/" class="text-indigo-200 hover:text-white">Georgia</a></li>
              <li><a href="${pathConfig.base.state}/michigan/" class="text-indigo-200 hover:text-white">Michigan</a></li>
              <li><a href="${pathConfig.base.state}/north-carolina/" class="text-indigo-200 hover:text-white">North Carolina</a></li>
              <li><a href="${pathConfig.base.state}/new-jersey/" class="text-indigo-200 hover:text-white">New Jersey</a></li>
              <li><a href="${pathConfig.base.state}/arizona/" class="text-indigo-200 hover:text-white">Arizona</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Popular Cities</h3>
          <div class="grid grid-cols-2 gap-2">
            <ul class="space-y-2">
              <li><a href="${pathConfig.base.city}/new-york/" class="text-indigo-200 hover:text-white">New York</a></li>
              <li><a href="${pathConfig.base.city}/los-angeles/" class="text-indigo-200 hover:text-white">Los Angeles</a></li>
              <li><a href="${pathConfig.base.city}/chicago/" class="text-indigo-200 hover:text-white">Chicago</a></li>
              <li><a href="${pathConfig.base.city}/houston/" class="text-indigo-200 hover:text-white">Houston</a></li>
              <li><a href="${pathConfig.base.city}/phoenix/" class="text-indigo-200 hover:text-white">Phoenix</a></li>
              <li><a href="${pathConfig.base.city}/philadelphia/" class="text-indigo-200 hover:text-white">Philadelphia</a></li>
            </ul>
            <ul class="space-y-2">
              <li><a href="${pathConfig.base.city}/san-antonio/" class="text-indigo-200 hover:text-white">San Antonio</a></li>
              <li><a href="${pathConfig.base.city}/san-diego/" class="text-indigo-200 hover:text-white">San Diego</a></li>
              <li><a href="${pathConfig.base.city}/dallas/" class="text-indigo-200 hover:text-white">Dallas</a></li>
              <li><a href="${pathConfig.base.city}/san-jose/" class="text-indigo-200 hover:text-white">San Jose</a></li>
              <li><a href="${pathConfig.base.city}/austin/" class="text-indigo-200 hover:text-white">Austin</a></li>
              <li><a href="${pathConfig.base.city}/jacksonville/" class="text-indigo-200 hover:text-white">Jacksonville</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-indigo-800 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex space-x-6 text-2xl justify-center md:justify-start">
          <a href="#" class="text-indigo-200 hover:text-white"><i class="${icons.social.facebook}"></i></a>
          <a href="#" class="text-indigo-200 hover:text-white"><i class="${icons.social.twitter}"></i></a>
          <a href="#" class="text-indigo-200 hover:text-white"><i class="${icons.social.instagram}"></i></a>
          <a href="#" class="text-indigo-200 hover:text-white"><i class="${icons.social.linkedin}"></i></a>
        </div>
        <div class="text-center md:text-right text-indigo-200">
          <p>&copy; ${currentYear} ${siteInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  
  <script>
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });
  </script>
</body>
</html>`;
}

export function pageWrapper(
  title: string, 
  description: string, 
  content: string
): string {
  return `${generateHead(title, description)}
${generateNavbar()}
${content}
${generateFooter()}`;
}

export function generateBreadcrumbs(
  items: Array<{ label: string; url?: string }>
): string {
  const breadcrumbItems = items
    .map((item, index, arr) => {
      if (index === arr.length - 1) {
        return `<li class="text-indigo-700">${item.label}</li>`;
      }
      return `<li><a href="${item.url}" class="text-indigo-500 hover:text-indigo-800">${item.label}</a></li>`;
    })
    .join(`<li class="mx-2 text-gray-400">/</li>`);

  return `
  <nav class="container mx-auto px-4 py-4">
    <ol class="flex items-center text-sm">
      ${breadcrumbItems}
    </ol>
  </nav>`;
}

export function generateListingCard(salon: BeautySalon): string {
  // Use the hosted image path for salon images
  const image = salon.images && salon.images.length > 0
    ? `https://${siteInfo.cdnDomain}/${siteInfo.cdnPathPrefix}${salon.images[0].path}`
    : defaultImages.defaultListing;
  
  const cityState = [
    salon.city?.city,
    salon.state?.state
  ].filter(Boolean).join(', ');
  
  const categories = salon.categories
    ? salon.categories.map(c => c.category).join(', ')
    : '';

  return `
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
    <img src="${image}" alt="${salon.title}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-bold text-indigo-800 mb-2">${salon.title}</h3>
      <p class="text-gray-600 mb-2">
        <i class="${icons.ui.location} text-indigo-500 mr-2"></i>${cityState || 'Location unavailable'}
      </p>
      ${categories ? `<p class="text-gray-600 mb-3"><i class="${icons.features.category} text-indigo-500 mr-2"></i>${categories}</p>` : ''}
      <div class="mt-4 flex justify-between items-center">
        <div class="flex space-x-2">
          ${salon.telephone ? `
          <a href="tel:${salon.telephone}" class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm">
            <i class="${icons.ui.phone} mr-1"></i> Call
          </a>
          ` : ''}
          ${salon.website ? `
          <a href="${salon.website.startsWith('http') ? salon.website : 'https://' + salon.website}" target="_blank" rel="noopener noreferrer" class="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors text-sm">
            <i class="${icons.ui.website} mr-1"></i> Website
          </a>
          ` : ''}
        </div>
      </div>
    </div>
  </div>`;
}

export function generateListingsGrid(salons: BeautySalon[], title?: string): string {
  const titleHtml = title ? `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>` : '';
  
  return `
  <div class="container mx-auto px-4 py-8">
    ${titleHtml}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${salons.map(salon => generateListingCard(salon)).join('')}
    </div>
  </div>`;
}

export function getSalonUrl(slug: string): string {
  return `${pathConfig.base.salon}/${slug}/`;
}

export function getCityUrl(slug: string): string {
  if (!slug) {
    console.warn('Warning: Empty city slug detected when generating URL');
    return `${pathConfig.base.city}/`;
  }
  return `${pathConfig.base.city}/${slug}/`;
}

export function getStateUrl(slug: string): string {
  if (!slug) {
    console.warn('Warning: Empty state slug detected when generating URL');
    return `${pathConfig.base.state}/`;
  }
  return `${pathConfig.base.state}/${slug}/`;
}

export function getCategoryUrl(slug: string): string {
  if (!slug) {
    console.warn('Warning: Empty category slug detected when generating URL');
    return `${pathConfig.base.category}/`;
  }
  return `${pathConfig.base.category}/${slug}/`;
}

export function getAllStatesUrl(): string {
  return `${pathConfig.base.state}/`;
}

export function getAllCitiesUrl(): string {
  return `${pathConfig.base.city}/`;
}