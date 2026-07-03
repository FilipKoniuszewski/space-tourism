import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import RouteLoader from './components/RouteLoader';
import { getPageKey, getRouteByPath } from './routes';

const Home = lazy(() => import('./pages/Home'));
const Destination = lazy(() => import('./pages/Destination'));
const Crew = lazy(() => import('./pages/Crew'));
const Technology = lazy(() => import('./pages/Technology'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const { pathname } = useLocation();
  const page = getPageKey(pathname);
  const route = getRouteByPath(pathname);

  useEffect(() => {
    const title = route?.title ?? 'Page not found';
    document.title = `${title} | Space Tourism`;
  }, [route]);

  return (
    <div className={`page page--${page}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
