export const routes = [
  { path: '/', pageKey: 'home', number: '00', label: 'Home', title: 'Home' },
  { path: '/destination', pageKey: 'destination', number: '01', label: 'Destination', title: 'Destination' },
  { path: '/crew', pageKey: 'crew', number: '02', label: 'Crew', title: 'Crew' },
  { path: '/technology', pageKey: 'technology', number: '03', label: 'Technology', title: 'Technology' },
] as const;

export type PageKey = (typeof routes)[number]['pageKey'];

export const getRouteByPath = (pathname: string) =>
  routes.find((route) => route.path === pathname);

export const getPageKey = (pathname: string): PageKey | 'not-found' =>
  getRouteByPath(pathname)?.pageKey ?? 'not-found';
