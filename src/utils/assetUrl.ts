/** Prefix public asset paths with the Vite base URL (e.g. /space-tourism/). */
export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
