import { pathConfig } from '../../src/config/directory-config.js';

/**
 * Creates a URL-friendly slug from a string
 */
export function createSlug(text: string): string {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Remove consecutive hyphens
    .trim();                   // Trim leading/trailing spaces
}

/**
 * Creates a file path for a salon
 */
export function getSalonPath(slug: string): string {
  return `${pathConfig.base.salon.substring(1)}/${slug}/index.html`;
}

/**
 * Creates a file path for a city
 */
export function getCityPath(slug: string): string {
  return `${pathConfig.base.city.substring(1)}/${slug}/index.html`;
}

/**
 * Creates a file path for a state
 */
export function getStatePath(slug: string): string {
  return `${pathConfig.base.state.substring(1)}/${slug}/index.html`;
}

/**
 * Creates a file path for a category
 */
export function getCategoryPath(slug: string): string {
  return `${pathConfig.base.category.substring(1)}/${slug}/index.html`;
}

/**
 * Creates a file path for all states page
 */
export function getAllStatesPath(): string {
  return `${pathConfig.base.state.substring(1)}/index.html`;
}

/**
 * Creates a file path for all cities page
 */
export function getAllCitiesPath(): string {
  return `${pathConfig.base.city.substring(1)}/index.html`;
}

/**
 * Creates a URL for a salon (for linking)
 */
export function getSalonUrl(slug: string): string {
  return `${pathConfig.base.salon}/${slug}/`;
}

/**
 * Creates a URL for a city (for linking)
 */
export function getCityUrl(slug: string): string {
  if (!slug) {
    console.warn('Warning: Empty city slug detected when generating URL');
    return `${pathConfig.base.city}/`;
  }
  return `${pathConfig.base.city}/${slug}/`;
}

/**
 * Creates a URL for a state (for linking)
 */
export function getStateUrl(slug: string): string {
  if (!slug) {
    console.warn('Warning: Empty state slug detected when generating URL');
    return `${pathConfig.base.state}/`;
  }
  return `${pathConfig.base.state}/${slug}/`;
}

/**
 * Creates a URL for a category (for linking)
 */
export function getCategoryUrl(slug: string): string {
  if (!slug) {
    console.warn('Warning: Empty category slug detected when generating URL');
    return `${pathConfig.base.category}/`;
  }
  return `${pathConfig.base.category}/${slug}/`;
}

/**
 * Creates a URL for all states (for linking)
 */
export function getAllStatesUrl(): string {
  return `${pathConfig.base.state}/`;
}

/**
 * Creates a URL for all cities (for linking)
 */
export function getAllCitiesUrl(): string {
  return `${pathConfig.base.city}/`;
}