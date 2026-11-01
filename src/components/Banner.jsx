import { useState } from 'react';
import { Icon } from './Navbar';
import bookIllustration from '../assets/colorful_img.png';

const componentStyles = String.raw`.hero-section {
position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
  radial-gradient(ellipse at 82% 55%, rgb(255 221 243 / 76%), transparent 48%),
  radial-gradient(ellipse at 39% 18%, rgb(255 244 251 / 68%), transparent 44%),
  linear-gradient(105deg, #fff 5%, #fffaff 55%, #fff0f9 100%);
}

.hero-content {
position: relative;
  z-index: 2;
  display: grid;
  width: min(100%, 1490px);
  min-height: 474px;
  grid-template-columns: minmax(0, .93fr) minmax(0, 1.07fr);
  align-items: center;
  gap: clamp(8px, 1.5vw, 22px);
  margin: 0 auto;
  padding: 31px clamp(36px, 4.7vw, 70px) 55px;
}

.hero-copy {
position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
}

.hero-eyebrow {
display: inline-flex;
  min-height: 29px;
  align-items: center;
  gap: 8px;
  padding: 0 13px;
  border: 1px solid rgb(236 22 130 / 7%);
  border-radius: 999px;
  background: linear-gradient(100deg, #ffd2e9, #ffe9f5);
  box-shadow: 0 4px 12px rgb(236 22 130 / 8%);
  color: #d70b71;
  font-size: 12px;
  font-weight: 600;
}

.hero-eyebrow svg {
fill: currentColor;
  stroke-width: 1.3;
}

.hero-copy h1 {
margin: 13px 0 6px;
  color: var(--ink);
  font-size: clamp(37px, 4.3vw, 55px);
  font-weight: 700;
  letter-spacing: -2.35px;
  line-height: 1.06;
}

.hero-copy h1 span {
color: var(--pink);
}

.hero-copy h2 {
margin: 8px 0 0;
  color: var(--ink);
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 700;
  letter-spacing: -.75px;
  line-height: 1.35;
}

.hero-copy h2 span {
color: #b90067;
}

.title-underline {
display: block;
  width: 75px;
  height: 4px;
  margin-top: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, #ec1682 0 55%, #ffbadd 100%);
  transform: rotate(-2deg);
}

.hero-description {
max-width: 465px;
  margin: 12px 0 17px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.47;
}

.signup-form {
display: flex;
  max-width: 501px;
  align-items: center;
  gap: 12px;
}

.email-field {
display: flex;
  height: 46px;
  min-width: 0;
  flex: 1;
  align-items: center;
  gap: 11px;
  padding: 0 15px;
  border: 1px solid #e9e3f2;
  border-radius: 15px;
  background: var(--glass);
  box-shadow: 0 3px 8px rgb(36 24 60 / 6%);
  color: var(--ink);
}

.email-field svg {
flex: none;
  fill: var(--ink);
  stroke: #fff;
  stroke-width: 1.25;
}

.email-field input {
width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--ink);
  font-size: 12px;
}

.email-field input::placeholder {
color: var(--muted);
  opacity: .9;
}

.get-started-button {
display: inline-flex;
  height: 46px;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  border: 0;
  border-radius: 15px;
  background: linear-gradient(120deg, #ff339c, #e60078);
  box-shadow: 0 5px 12px rgb(230 0 120 / 23%);
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.get-started-button:hover {
transform: translateY(-2px);
  box-shadow: 0 8px 16px rgb(230 0 120 / 28%);
}

.feature-list {
display: flex;
  align-items: center;
  gap: 0;
  margin-top: 23px;
}

.feature-item {
display: flex;
  min-width: 0;
  align-items: center;
  gap: 9px;
  padding: 0 16px;
  border-right: 1px solid #ded9e9;
}

.feature-item:first-child {
padding-left: 0;
}

.feature-item:last-child {
padding-right: 0;
  border-right: 0;
}

.feature-icon {
display: grid;
  width: 30px;
  height: 30px;
  flex: none;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff78bf, #ed1683);
  color: #fff;
}

.feature-icon svg {
stroke-width: 2.2;
}

.feature-copy {
display: grid;
  gap: 1px;
  white-space: nowrap;
}

.feature-copy strong {
color: var(--ink);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.35;
}

.feature-copy small {
color: var(--muted);
  font-size: 9px;
  line-height: 1.35;
}

.hero-art {
display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
}

.hero-art img {
display: block;
  width: min(100%, 650px);
  height: auto;
  filter: drop-shadow(0 13px 14px rgb(193 78 146 / 9%));
}

.hero-wave {
position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  left: 0;
  height: 44px;
  background: #ffe0f2;
  clip-path: polygon(0 3%, 8% 67%, 20% 91%, 34% 78%, 44% 34%, 54% 68%, 64% 52%, 76% 75%, 88% 83%, 100% 24%, 100% 100%, 0 100%);
}

.hero-wave::after {
position: absolute;
  inset: 14px 0 0;
  background: #ffc6e7;
  clip-path: polygon(0 0, 12% 66%, 25% 82%, 40% 41%, 52% 70%, 63% 53%, 78% 79%, 89% 72%, 100% 17%, 100% 100%, 0 100%);
  content: '';
}

.site-shell[data-theme='dark'] .hero-section {
background:
  radial-gradient(ellipse at 82% 55%, rgb(131 38 94 / 36%), transparent 48%),
  radial-gradient(ellipse at 39% 18%, rgb(70 43 75 / 36%), transparent 44%),
  linear-gradient(105deg, #211d31 5%, #282034 55%, #332039 100%);
}

.site-shell[data-theme='dark'] .hero-eyebrow {
border-color: rgb(255 116 190 / 15%);
  background: linear-gradient(100deg, #4a2443, #3b263e);
  color: #ff91c9;
}

.site-shell[data-theme='dark'] .hero-copy h2 span {
color: #ff78bd;
}

.site-shell[data-theme='dark'] .title-underline {
background: linear-gradient(90deg, #ff3c9f 0 55%, #6f3459 100%);
}

.site-shell[data-theme='dark'] .email-field {
border-color: #494057;
}

.site-shell[data-theme='dark'] .email-field svg {
stroke: #29243a;
}

.site-shell[data-theme='dark'] .feature-item {
border-color: #494057;
}

.site-shell[data-theme='dark'] .hero-wave {
background: #39243a;
}

.site-shell[data-theme='dark'] .hero-wave::after {
background: #44233c;
}

@media (min-width: 1500px) {
.hero-content {
min-height: 520px;
}
}

@media (max-width: 1100px) {
.hero-content {
min-height: 450px;
    padding-right: 38px;
    padding-left: 38px;
}

.hero-copy h1 {
font-size: clamp(36px, 4.8vw, 49px);
    letter-spacing: -1.8px;
}

.feature-item {
gap: 6px;
    padding: 0 9px;
}
}

@media (max-width: 860px) {
.hero-content {
min-height: 440px;
    grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);
    gap: 0;
    padding: 35px 30px 52px;
}

.hero-copy h1 {
font-size: clamp(34px, 5.3vw, 46px);
    letter-spacing: -1.6px;
}

.hero-description {
font-size: 12px;
}

.signup-form {
flex-wrap: wrap;
}

.email-field {
flex-basis: 100%;
}

.feature-list {
flex-wrap: wrap;
    row-gap: 12px;
}

.feature-item {
padding: 0 9px;
}

.feature-item:nth-child(3) {
padding-left: 0;
    border: 0;
}
}

@media (max-width: 600px) {
.hero-content {
min-height: 0;
    grid-template-columns: 1fr;
    gap: 1px;
    padding: 28px 22px 50px;
}

.hero-copy {
max-width: 460px;
    margin: 0 auto;
}

.hero-copy h1 {
margin-top: 14px;
    font-size: clamp(36px, 10vw, 49px);
    letter-spacing: -1.7px;
}

.hero-copy h2 {
font-size: 20px;
}

.hero-description {
max-width: 420px;
    margin-bottom: 15px;
    font-size: 12px;
}

.signup-form {
flex-wrap: nowrap;
    gap: 8px;
}

.email-field {
height: 43px;
    flex-basis: 0;
    padding: 0 10px;
    border-radius: 13px;
}

.email-field input {
font-size: 11px;
}

.get-started-button {
height: 43px;
    gap: 5px;
    padding: 0 10px;
    border-radius: 13px;
    font-size: 11px;
}

.feature-list {
justify-content: space-between;
    margin-top: 20px;
}

.feature-item,
  .feature-item:first-child,
  .feature-item:nth-child(3),
  .feature-item:last-child {
gap: 6px;
    padding: 0 7px;
    border-right: 0;
}

.feature-item:first-child {
padding-left: 0;
}

.feature-item:last-child {
padding-right: 0;
}

.feature-icon {
width: 27px;
    height: 27px;
}

.feature-copy strong {
font-size: 9px;
}

.feature-copy small {
font-size: 8px;
}

.hero-art {
max-width: 500px;
    margin: 0 auto;
}

.hero-art img {
width: 100%;
}

.hero-wave {
height: 31px;
}
}`;

const features = [
  { icon: 'book', title: 'Wide Collection', detail: 'Books for everyone' },
  { icon: 'bolt', title: 'Fast Learning', detail: 'Grow your skills' },
  { icon: 'shield', title: 'Trusted Platform', detail: 'Learn with confidence' },
];

function Banner() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    window.location.hash = 'courses';
  }

  return (
    <>
      <style>{componentStyles}</style>
      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <Icon name="book" size={15} />
                <span>Learn · Read · Grow</span>
              </div>

              <h1>
                Hello! Welcome to
                <br />
                my <span>book store</span>
              </h1>

              <h2>Learn <span>about something!!</span></h2>
              <span className="title-underline" aria-hidden="true" />

              <p className="hero-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                voluptatum! Vel excepturi mollitia voluptatem exercitationem,
                id voluptates laborum! Quisquam, deserunt.
              </p>

              <form className="signup-form" onSubmit={handleSubmit}>
                <label className="email-field">
                  <Icon name="mail" size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Enter your email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>
                <button type="submit" className="get-started-button">
                  Get Started
                  <Icon name="arrow" size={18} />
                </button>
              </form>

              <div className="feature-list">
                {features.map(({ icon, title, detail }) => (
                  <div className="feature-item" key={title}>
                    <span className="feature-icon"><Icon name={icon} size={16} /></span>
                    <span className="feature-copy">
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-art">
              <img src={bookIllustration} alt="A colorful stack of books with an open book, a plant, and a cup" />
            </div>
          </div>
          <div className="hero-wave" aria-hidden="true" />
        </section>
      </main>
    </>
  );
}

export default Banner;
