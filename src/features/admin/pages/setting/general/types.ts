// src/pages/settings/general/types.ts
export interface OrganizationSettings {
  schoolName: string;
  unionName: string;
  slogan: string;
  logoUrl?: string;
  faviconUrl?: string;
  primaryColor: string;
  language: 'vi' | 'en';
}
