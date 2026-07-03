import rawData from './data.json';
import type { SiteData } from './types';

const data = rawData as SiteData;

export const { destinations, crew, technology } = data;
