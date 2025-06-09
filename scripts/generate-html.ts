import path from 'path';
import { parseAllCsvData } from './utils/csv-parser.js';
import { processData } from './utils/data-processor.js';
import { generateCityPage } from './utils/html-generators/city-page.js';
import { generateStatePage } from './utils/html-generators/state-page.js';
import { generateIndexPage } from './utils/html-generators/index-page.js';
import { generateAllStatesPage } from './utils/html-generators/all-states-page.js';
import { generateAllCitiesPage } from './utils/html-generators/all-cities-page.js';
import { 
  getCityPath, 
  getStatePath, 
  getAllStatesPath,
  getAllCitiesPath
} from './utils/path-utils.js';
import { 
  writeToFile, 
  generateCssFile, 
  cleanPublicDirectory 
} from './utils/file-utils.js';
import {
  generateSitemaps,
  generateHtmlSitemap,
  generateRobotsTxt
} from './utils/sitemap-generator.js';

// Check if we're in development mode, and if so, prevent running this script
if (process.env.NODE_ENV !== 'production' && process.env.FORCE_GENERATE !== 'true') {
  console.warn('HTML generation is skipped in development mode. Use NODE_ENV=production or FORCE_GENERATE=true to override.');
  process.exit(0);
}

async function generateHTML() {
  try {
    console.log('Starting HTML generation...');
    console.log('Environment:', process.env.NODE_ENV);
    
    // Step 1: Clean the public directory
    console.log('Cleaning public directory...');
    cleanPublicDirectory();
    
    // Step 2: Parse all CSV data
    console.log('Parsing CSV data...');
    const rawData = await parseAllCsvData();
    
    // Step 3: Process and enrich the data
    console.log('Processing data...');
    const { 
      beautySalons, 
      cities, 
      states
    } = processData(rawData);
    
    console.log(`Total salons after processing: ${beautySalons.length}`);
    console.log(`Total cities: ${cities.length}`);
    console.log(`Total states: ${states.length}`);
    
    // Step 4: Generate CSS file
    console.log('Generating CSS...');
    generateCssFile();
    
    // Step 5: Skip salon page generation
    console.log('Skipping generation of individual salon pages as requested...');
    
    // Step 6: Generate city pages with enhanced salon information
    console.log('Generating enhanced city pages...');
    let cityCount = 0;
    for (const city of cities) {
      if (city.salons && city.salons.length > 0) {
        try {
          const filePath = path.join('public', getCityPath(city.slug));
          const html = generateCityPage(city);
          writeToFile(filePath, html);
          cityCount++;
        } catch (error) {
          console.error(`Error generating page for city ${city.id} - ${city.city}:`, error);
        }
      }
    }
    console.log(`Generated ${cityCount} city pages`);
    
    // Step 7: Generate state pages with enhanced salon information
    console.log('Generating enhanced state pages...');
    let stateCount = 0;
    for (const state of states) {
      if (state.cities && state.cities.length > 0) {
        try {
          const filePath = path.join('public', getStatePath(state.slug || ''));
          const html = generateStatePage(state);
          writeToFile(filePath, html);
          stateCount++;
        } catch (error) {
          console.error(`Error generating page for state ${state.id} - ${state.state}:`, error);
        }
      }
    }
    console.log(`Generated ${stateCount} state pages`);
    
    // Step 8: Skip category pages generation
    console.log('Skipping generation of category pages as requested...');
    
    // Step 9: Generate all-states browse page
    console.log('Generating all states browse page...');
    const allStatesHtml = generateAllStatesPage(states);
    writeToFile(path.join('public', getAllStatesPath()), allStatesHtml);
    
    // Step 10: Generate all-cities browse page
    console.log('Generating all cities browse page...');
    const allCitiesHtml = generateAllCitiesPage(cities);
    writeToFile(path.join('public', getAllCitiesPath()), allCitiesHtml);
    
    // Home page will be handled by React
    console.log('Home page will be handled by React...');
    
    // Generate search-index.html for SEO purposes
    const indexHtml = generateIndexPage(states, [], beautySalons.slice(0, 6));
    writeToFile(path.join('public', 'search-index.html'), indexHtml);
    
    // Step 11: Generate XML sitemaps - excluding individual salon pages and category pages
    console.log('Generating sitemaps (excluding individual salon pages and category pages)...');
    const needMultipleSitemaps = false; // Fewer pages now that we don't have individual salon pages
    await generateSitemaps([], cities, states, []);
    
    // Step 12: Generate HTML sitemap
    console.log('Generating HTML sitemap...');
    await generateHtmlSitemap([], cities, states, []);
    
    // Step 13: Generate robots.txt
    console.log('Generating robots.txt...');
    await generateRobotsTxt(needMultipleSitemaps);
    
    console.log('HTML generation completed successfully!');
  } catch (error) {
    console.error('Error generating HTML:', error);
    process.exit(1);
  }
}

// Run the generator
generateHTML();