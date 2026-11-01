import { Icon } from './Navbar';

const footerLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Our courses', href: '#courses' },
  { label: 'Contact', href: '#contact' },
  { label: 'Home', href: '#home' },
];

const componentStyles = String.raw`.site-footer {
position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 32px clamp(24px, 5vw, 68px) 0;
  border-top: 1px solid #f4e3f0;
  background:
  radial-gradient(ellipse at 85% 22%, rgb(255 223 243 / 71%), transparent 38%),
  linear-gradient(110deg, #fff, #fff7fc 70%, #fff1f9);
  color: var(--ink);
}

.footer-content {
position: relative;
  z-index: 2;
  display: grid;
  width: min(100%, 1160px);
  grid-template-columns: 1fr .62fr 1.08fr;
  align-items: center;
  gap: clamp(24px, 5vw, 64px);
  margin: 0 auto;
  padding: 6px 0 28px;
}

.footer-brand {
display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ink);
  text-decoration: none;
}

.footer-brand .brand-mark {
width: 41px;
}

.footer-brand .brand-name {
font-size: 21px;
}

.footer-brand-column > p,
.footer-community p {
max-width: 285px;
  margin: 11px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.footer-links-column h2,
.footer-community h2 {
margin: 0;
  color: var(--ink);
  font-size: 13px;
  font-weight: 700;
}

.footer-links-column nav {
display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 18px;
  margin-top: 13px;
}

.footer-links-column nav a {
width: fit-content;
  color: var(--muted);
  font-size: 10px;
  text-decoration: none;
  transition: color 160ms ease;
}

.footer-links-column nav a:hover {
color: var(--pink-dark);
}

.footer-community {
display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid #f2ddec;
  border-radius: 16px;
  background: rgb(255 255 255 / 73%);
  box-shadow: 0 6px 18px rgb(67 38 86 / 6%);
}

.footer-community-icon {
display: grid;
  width: 39px;
  height: 39px;
  flex: none;
  place-items: center;
  border-radius: 13px;
  background: linear-gradient(140deg, #ffb8de, #f147a3);
  color: #fff;
}

.footer-community-icon svg {
fill: currentColor;
}

.footer-community > div {
min-width: 0;
  flex: 1;
}

.footer-community h2 {
font-size: 11px;
}

.footer-community p {
margin-top: 4px;
  font-size: 9px;
}

.footer-community > a {
display: grid;
  width: 31px;
  height: 31px;
  flex: none;
  place-items: center;
  border-radius: 50%;
  background: #ffe2f2;
  color: #d40071;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease;
}

.footer-community > a:hover {
background: #ec1682;
  color: #fff;
}

.footer-bottom {
position: relative;
  z-index: 2;
  display: flex;
  width: min(100%, 1160px);
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 auto;
  border-top: 1px solid #f0e0ed;
  color: var(--muted);
  font-size: 9px;
}

.footer-bottom-note span {
color: #ec1682;
}

.footer-decoration {
position: absolute;
  right: -24px;
  bottom: -68px;
  left: -24px;
  height: 86px;
  background: linear-gradient(90deg, #ffd4ed, #fff0fa 52%, #ffc7e6);
  clip-path: polygon(0 34%, 12% 15%, 24% 40%, 39% 10%, 54% 36%, 68% 18%, 83% 44%, 100% 9%, 100% 100%, 0 100%);
  pointer-events: none;
}

.site-shell[data-theme='dark'] .site-footer {
border-color: #3b3046;
  background:
  radial-gradient(ellipse at 85% 22%, rgb(126 44 95 / 29%), transparent 38%),
  linear-gradient(110deg, #211d31, #292135 70%, #302039);
}

.site-shell[data-theme='dark'] .footer-community {
border-color: #493849;
  background: rgb(46 38 59 / 86%);
}

.site-shell[data-theme='dark'] .footer-community > a {
background: #4d3048;
  color: #ff9acf;
}

.site-shell[data-theme='dark'] .footer-community > a:hover {
background: #ec1682;
  color: #fff;
}

.site-shell[data-theme='dark'] .footer-bottom {
border-color: #493849;
}

.site-shell[data-theme='dark'] .footer-decoration {
background: linear-gradient(90deg, #39243a, #34283d 52%, #44233c);
}

@media (max-width: 860px) {
.footer-content {
grid-template-columns: 1fr 1fr;
}

.footer-community {
grid-column: 1 / -1;
}
}

@media (max-width: 600px) {
.site-footer {
padding: 27px 20px 0;
}

.footer-content {
grid-template-columns: 1fr 1fr;
    gap: 24px 18px;
    padding-bottom: 22px;
}

.footer-brand-column {
grid-column: 1 / -1;
}

.footer-brand-column > p {
max-width: 300px;
}

.footer-community {
grid-column: 1 / -1;
    gap: 9px;
    padding: 12px;
}

.footer-community-icon {
width: 35px;
    height: 35px;
}

.footer-bottom {
min-height: 48px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 3px;
    padding: 8px 0;
    font-size: 8px;
}
}`;

function Footer() {
  return (
    <>
      <style>{componentStyles}</style>
      <footer className="site-footer" id="contact">
      <div className="footer-decoration" aria-hidden="true" />
      <div className="footer-content">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#home">
            <svg className="brand-mark" viewBox="0 0 48 40" aria-hidden="true">
              <path d="M3 8c8-3 15-1 21 5v23C17 30 10 28 3 31V8Z" fill="#ec1682" />
              <path d="M45 8c-8-3-15-1-21 5v23c7-6 14-8 21-5V8Z" fill="#fa4eae" />
              <path d="M7 12c5-1 10 0 14 3M7 17c5-1 10 0 14 3m20-8c-5-1-10 0-14 3m14 2c-5-1-10 0-14 3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M2 34c8-3 15-1 22 5 7-6 14-8 22-5" fill="none" stroke="#b50870" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="brand-name"><span>book</span><strong>Store</strong></span>
          </a>
          <p>Learn a little. Read a lot. Find your next favorite book with us.</p>
        </div>

        <div className="footer-links-column">
          <h2 id="about">Explore</h2>
          <nav aria-label="Footer navigation">
            {footerLinks.map(({ label, href }) => (
              <a href={href} key={label}>{label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-community">
          <span className="footer-community-icon"><Icon name="book" size={20} /></span>
          <div>
            <h2>Keep learning, keep growing</h2>
            <p>Discover stories and courses made for curious minds.</p>
          </div>
          <a href="#courses" aria-label="Explore courses"><Icon name="arrow" size={18} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BookStore. All rights reserved.</span>
        <span className="footer-bottom-note">Made for every curious mind <span aria-hidden="true">♥</span></span>
      </div>
      </footer>
    </>
  );
}

export default Footer;
