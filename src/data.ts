import rawData from './data.json';
import type { CrewMember, Destination, ImagePair, OrientationImages, SiteData, Technology } from './types';
import { assetUrl } from './utils/assetUrl';

const data = rawData as SiteData;

const mapImagePair = (images: ImagePair): ImagePair => ({
  png: assetUrl(images.png),
  webp: assetUrl(images.webp),
});

const mapOrientationImages = (images: OrientationImages): OrientationImages => ({
  portrait: assetUrl(images.portrait),
  landscape: assetUrl(images.landscape),
});

export const destinations: Destination[] = data.destinations.map((item) => ({
  ...item,
  images: mapImagePair(item.images),
}));

export const crew: CrewMember[] = data.crew.map((item) => ({
  ...item,
  images: mapImagePair(item.images),
}));

export const technology: Technology[] = data.technology.map((item) => ({
  ...item,
  images: mapOrientationImages(item.images),
}));
