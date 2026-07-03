export interface ImagePair {
  png: string;
  webp: string;
}

export interface OrientationImages {
  portrait: string;
  landscape: string;
}

export interface Destination {
  name: string;
  images: ImagePair;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  images: ImagePair;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: OrientationImages;
  description: string;
}

export interface SiteData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}
