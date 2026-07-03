import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="page__main home" id="main">
      <div className="home__intro">
        <h1 className="home__title">
          So, you want to travel to <span>Space</span>
        </h1>
        <p className="home__text">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
          a truly out of this world experience!
        </p>
      </div>
      <Link to="/destination" className="home__cta">
        Explore
      </Link>
    </main>
  );
};

export default Home;
