import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="page__main not-found" id="main">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">This page is lost in space.</p>
      <Link to="/" className="home__cta">
        Return home
      </Link>
    </main>
  );
};

export default NotFound;
