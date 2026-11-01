import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const iconPaths = {
  home: 'M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-9ZM9 21v-7h6v7',
  course: 'M2 9.5 12 4l10 5.5-10 5.5L2 9.5ZM6 12v5c3.5 2.8 8.5 2.8 12 0v-5M21 10v6',
  contact: 'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13ZM4 6l8 6 8-6',
  about: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 9v5m0-9h.01',
  search: 'm21 21-4.3-4.3M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z',
  sun: 'M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42m-9.88 9.88-1.42 1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  moon: 'M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z',
  user: 'M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M18 6 6 18',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  mail: 'M3 5h18v14H3V5Zm0 1 9 7 9-7',
  book: 'M3 6.5A2.5 2.5 0 0 1 5.5 4H12v16H5.5A2.5 2.5 0 0 0 3 22V6.5Zm18 0A2.5 2.5 0 0 0 18.5 4H12v16h6.5a2.5 2.5 0 0 1 2.5 2V6.5Z',
  bolt: 'm13 2-9 12h7l-1 8 10-13h-7l1-7Z',
  shield: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4',
};

export function Icon({ name, size = 18, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

const componentStyles = String.raw`.site-header {
position: sticky;
  z-index: 20;
  top: 0;
  display: grid;
  grid-template-columns: minmax(230px, 1fr) auto minmax(330px, 1fr);
  align-items: center;
  min-height: 63px;
  padding: 0 clamp(22px, 4vw, 52px);
  border-bottom: 1px solid #f1e9f4;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 3px 14px rgb(43 24 66 / 5%);
  backdrop-filter: blur(14px);
}

.brand {
display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  color: var(--ink);
  text-decoration: none;
}

.brand-mark {
width: 48px;
  flex: none;
}

.brand-name {
font-size: 24px;
  font-weight: 700;
  letter-spacing: -1.3px;
  line-height: 1;
}

.brand-name strong {
color: var(--pink);
  font-weight: 700;
}

.main-nav {
display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border: 1px solid #f3ebf5;
  border-radius: 999px;
  background: #fffafd;
  box-shadow: 0 3px 12px rgb(55 32 74 / 8%);
}

.nav-link {
display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 12px;
  border-radius: 999px;
  color: var(--ink);
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease;
}

.nav-link:hover {
color: var(--pink-dark);
}

.nav-link.is-active {
background: linear-gradient(135deg, #ff4ba4, #ec1682 75%);
  box-shadow: 0 4px 10px rgb(236 22 130 / 24%);
  color: #fff;
}

.nav-link.is-active:hover {
color: #fff;
}

.header-actions {
display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(9px, 1.15vw, 16px);
}

.search-box {
display: flex;
  width: clamp(170px, 18.5vw, 236px);
  height: 36px;
  align-items: center;
  gap: 8px;
  padding: 0 11px 0 14px;
  border: 1px solid #f0e4f0;
  border-radius: 999px;
  background: linear-gradient(110deg, #fff5fb, #fff);
  color: var(--ink);
}

.search-box input {
width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--ink);
  font-size: 11px;
}

.search-box input::placeholder {
color: var(--ink);
  opacity: 1;
}

.search-box input::-webkit-search-cancel-button {
cursor: pointer;
}

.search-box svg {
flex: none;
}

.header-divider {
width: 1px;
  height: 24px;
  background: #e8e3ee;
}

.theme-toggle,
.mobile-menu-button {
display: inline-grid;
  width: 36px;
  height: 36px;
  flex: none;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}

.theme-toggle:hover,
.mobile-menu-button:hover {
background: #fff0f8;
  color: var(--pink-dark);
}

.login-button {
display: inline-flex;
  min-width: 74px;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: #17152d;
  box-shadow: 0 4px 10px rgb(23 21 45 / 17%);
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.login-button:hover {
transform: translateY(-1px);
  box-shadow: 0 6px 14px rgb(23 21 45 / 21%);
}

.mobile-menu-button {
display: none;
}

.site-shell[data-theme='dark'] .site-header {
border-color: #363047;
  background: rgb(29 26 44 / 95%);
}

.site-shell[data-theme='dark'] .brand,
.site-shell[data-theme='dark'] .nav-link,
.site-shell[data-theme='dark'] .theme-toggle,
.site-shell[data-theme='dark'] .mobile-menu-button {
color: var(--ink);
}

.site-shell[data-theme='dark'] .main-nav,
.site-shell[data-theme='dark'] .search-box {
border-color: #413950;
  background: #29243a;
}

.site-shell[data-theme='dark'] .search-box input::placeholder {
color: #e9e1ef;
}

.site-shell[data-theme='dark'] .nav-link.is-active {
color: #fff;
}

@media (max-width: 1100px) {
.site-header {
grid-template-columns: minmax(180px, 1fr) auto minmax(270px, 1fr);
    padding-right: 24px;
    padding-left: 24px;
}

.brand-name {
font-size: 21px;
}

.brand-mark {
width: 43px;
}

.nav-link {
gap: 5px;
    padding: 0 9px;
    font-size: 11px;
}
}

@media (max-width: 860px) {
.site-header {
grid-template-columns: 1fr auto 1fr;
    min-height: 60px;
    padding: 0 20px;
}

.mobile-menu-button {
display: inline-grid;
    grid-column: 2;
    grid-row: 1;
}

.brand {
grid-column: 1;
    grid-row: 1;
}

.main-nav {
position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    display: none;
    width: min(360px, calc(100vw - 48px));
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    padding: 10px;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 12px 30px rgb(30 20 52 / 15%);
    transform: translateX(-50%);
}

.main-nav.is-open {
display: flex;
}

.nav-link {
justify-content: flex-start;
    padding: 0 14px;
}

.header-actions {
grid-column: 3;
    grid-row: 1;
    gap: 8px;
}

.search-box {
width: clamp(150px, 26vw, 220px);
}
}

@media (max-width: 600px) {
.site-header {
grid-template-columns: 1fr auto 1fr;
    min-height: 58px;
    padding: 0 12px;
}

.brand {
gap: 5px;
}

.brand-mark {
width: 35px;
}

.brand-name {
font-size: 19px;
}

.mobile-menu-button {
width: 32px;
    height: 32px;
}

.header-actions {
gap: 4px;
}

.search-box,
  .header-divider {
display: none;
}

.theme-toggle {
width: 32px;
    height: 32px;
}

.login-button {
min-width: 62px;
    height: 33px;
    gap: 5px;
    padding: 0 10px;
    font-size: 11px;
}
}`;

const navItems = [
  { label: 'Home', icon: 'home', href: '#home' },
  { label: 'Course', icon: 'course', href: '#courses' },
  { label: 'Contact', icon: 'contact', href: '#contact' },
  { label: 'About', icon: 'about', href: '#about' },
];

function Navbar({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(() => (
    navItems.some(({ href }) => href === window.location.hash) ? window.location.hash : '#home'
  ));

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const syncActiveLink = () => {
      const currentHash = window.location.hash;
      setActiveHref(navItems.some(({ href }) => href === currentHash) ? currentHash : '#home');
    };

    window.addEventListener('hashchange', syncActiveLink);
    return () => window.removeEventListener('hashchange', syncActiveLink);
  }, []);

  return (
    <>
      <style>{componentStyles}</style>
      <header className="site-header">
      <a className="brand" href="#home" aria-label="BookStore home">
        <svg className="brand-mark" viewBox="0 0 48 40" aria-hidden="true">
          <path d="M3 8c8-3 15-1 21 5v23C17 30 10 28 3 31V8Z" fill="#ec1682" />
          <path d="M45 8c-8-3-15-1-21 5v23c7-6 14-8 21-5V8Z" fill="#fa4eae" />
          <path d="M7 12c5-1 10 0 14 3M7 17c5-1 10 0 14 3m20-8c-5-1-10 0-14 3m14 2c-5-1-10 0-14 3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M2 34c8-3 15-1 22 5 7-6 14-8 22-5" fill="none" stroke="#b50870" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="brand-name"><span>book</span><strong>Store</strong></span>
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
      </button>

      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {navItems.map(({ label, icon, href }) => {
          const isActive = activeHref === href;

          return (
            <a
              className={`nav-link${isActive ? ' is-active' : ''}`}
              href={href}
              key={label}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => {
                setActiveHref(href);
                closeMenu();
              }}
            >
              <Icon name={icon} size={16} />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>

      <div className="header-actions">
        <label className="search-box">
          <input type="search" placeholder="Search books, courses..." aria-label="Search books and courses" />
          <Icon name="search" size={19} />
        </label>
        <span className="header-divider" aria-hidden="true" />
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
        >
          <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={21} />
        </button>
        <button className="login-button" type="button">
          <Icon name="user" size={16} />
          <span>Login</span>
        </button>
      </div>
      </header>
    </>
  );
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

export default Navbar;
