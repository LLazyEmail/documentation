/**
 * Shared data types for future catalog / glossary / metrics JSON.
 * Aligned with awesome-email-marketing and awesome-newsletters website data modules.
 */

export type CatalogItem = {
  id: string;
  title: string;
  url?: string;
  section: string;
  tags?: string[];
  description?: string;
};

export type CatalogPayload = {
  generatedAt?: string;
  items: CatalogItem[];
  tags: string[];
};

export type GlossaryTerm = {
  term: string;
  definition: string;
  aliases?: string[];
};
