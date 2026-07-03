import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';
import { routes } from '../routes';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link${isActive ? ' active' : ''}`;

  return (
    <header className="header">
      <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
        <img src={assetUrl('/assets/shared/logo.svg')} alt="Space tourism logo" />
      </Link>

      <button
        ref={toggleRef}
        className="header__toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Menu</span>
        <img
          src={menuOpen ? assetUrl('/assets/shared/icon-close.svg') : assetUrl('/assets/shared/icon-hamburger.svg')}
          alt=""
        />
      </button>

      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} id="primary-navigation">
        <ul className="nav__list">
          {routes.map(({ path, number, label }) => (
            <li key={path}>
              <NavLink to={path} className={navClass} onClick={() => setMenuOpen(false)} end>
                <span className="nav__number" aria-hidden="true">
                  {number}
                </span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
