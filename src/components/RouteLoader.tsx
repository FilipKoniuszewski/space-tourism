import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSyncExternalStore } from 'react';
import { assetUrl } from '../utils/assetUrl';

const subscribeReducedMotion = (onStoreChange: () => void) => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', onStoreChange);
  return () => media.removeEventListener('change', onStoreChange);
};

const getReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const RouteLoader = () => {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );

  return (
    <div className="route-loader" role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading page</span>
      <DotLottieReact
        className="route-loader__animation"
        src={assetUrl('/assets/shared/loader.lottie')}
        backgroundColor="#00000000"
        loop={!reducedMotion}
        autoplay
        speed={reducedMotion ? 0.35 : 1}
      />
    </div>
  );
};

export default RouteLoader;
