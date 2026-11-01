import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Navbar';

const componentStyles = String.raw`.course-card {
position: relative;
  height: 278px;
  overflow: hidden;
  border: 1px solid #f0e2f1;
  border-radius: 17px;
  background: rgb(255 255 255 / 93%);
  box-shadow: 0 9px 18px rgb(64 37 81 / 9%);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.course-card:hover {
transform: translateY(-3px);
  box-shadow: 0 13px 23px rgb(64 37 81 / 13%);
}

.course-card::after {
position: absolute;
  right: -15px;
  bottom: -34px;
  left: -15px;
  height: 53px;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(100deg, #ffe1f5, #fff1fb 60%, #ffd8f1);
  content: '';
  pointer-events: none;
}

.course-card-art {
position: relative;
  display: grid;
  height: 148px;
  place-items: center;
  margin: 0;
  overflow: hidden;
  background:
  radial-gradient(ellipse at 46% 75%, rgb(255 210 238 / 90%), transparent 45%),
  linear-gradient(180deg, #fff, #fffaff);
}

.course-card-art::before {
position: absolute;
  top: 27px;
  left: 9%;
  width: 61%;
  height: 75px;
  border-radius: 48% 52% 43% 46%;
  background: linear-gradient(140deg, #ffe1f3, #fff5fb);
  content: '';
  transform: rotate(-6deg);
}

.course-card-art img {
position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 210px;
  object-fit: contain;
  object-position: center 54%;
  filter: drop-shadow(0 4px 5px rgb(42 35 62 / 12%));
}

.favorite-button {
position: absolute;
  z-index: 2;
  top: 9px;
  right: 9px;
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid #f0e8f4;
  border-radius: 50%;
  background: rgb(255 255 255 / 90%);
  box-shadow: 0 3px 8px rgb(41 29 60 / 7%);
  color: #25304d;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.favorite-button:hover {
transform: scale(1.06);
  color: #ec1682;
}

.favorite-button.is-favorite {
border-color: #ffd5e9;
  background: #fff0f8;
  color: #ec1682;
}

.course-card-body {
position: relative;
  z-index: 2;
  padding: 5px 16px 13px;
}

.course-badge {
display: inline-flex;
  min-height: 18px;
  align-items: center;
  gap: 4px;
  padding: 0 7px;
  border-radius: 999px;
  background: #ffd9ed;
  color: #c90068;
  font-size: 9px;
  font-weight: 500;
  line-height: 1;
}

.course-badge svg {
padding: 2px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff64b1, #ec1682);
  color: #fff;
  fill: currentColor;
}

.course-card-body h3 {
overflow: hidden;
  margin: 5px 0 1px;
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -.3px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.course-card-body > p {
overflow: hidden;
  margin: 2px 0 10px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.course-card-bottom {
display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.course-meta {
display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 9px;
  white-space: nowrap;
}

.course-meta > span:not(.meta-divider) {
display: inline-flex;
  align-items: center;
  gap: 5px;
}

.lesson-dot {
display: grid;
  width: 11px;
  height: 11px;
  place-items: center;
  border-radius: 50%;
  background: #252a58;
  color: #fff;
  font-size: 6px;
}

.clock-icon {
color: #252a58;
  font-size: 16px;
  line-height: 1;
}

.meta-divider {
width: 1px;
  height: 14px;
  background: #ddd4e7;
}

.buy-course-button {
display: inline-flex;
  min-height: 30px;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 11px;
  border-radius: 999px;
  background: linear-gradient(110deg, #ffe1f2, #ffd0e9);
  box-shadow: 0 3px 8px rgb(236 22 130 / 10%);
  color: #d40071;
  font-size: 9px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.buy-course-button:hover {
transform: translateY(-1px);
  background: linear-gradient(110deg, #ff3da1, #e60078);
  color: #fff;
}

.site-shell[data-theme='dark'] .course-card {
border-color: #41354d;
  background: #292439;
}

.site-shell[data-theme='dark'] .course-card-art {
background:
  radial-gradient(ellipse at 46% 75%, rgb(117 47 93 / 34%), transparent 45%),
  linear-gradient(180deg, #2d273b, #30283e);
}

.site-shell[data-theme='dark'] .course-card-art::before {
background: linear-gradient(140deg, #49304a, #3c2b43);
}

.site-shell[data-theme='dark'] .course-card::after {
background: linear-gradient(100deg, #412740, #34273d 60%, #46263f);
}

.site-shell[data-theme='dark'] .favorite-button {
border-color: #50435b;
  background: #342d45;
  color: #f7eafa;
}

.site-shell[data-theme='dark'] .favorite-button.is-favorite {
border-color: #71405f;
  background: #4a2d49;
  color: #ff82c3;
}

.site-shell[data-theme='dark'] .course-badge {
background: #4d3048;
  color: #ff9acf;
}

.site-shell[data-theme='dark'] .lesson-dot {
background: #f4c6e2;
  color: #292439;
}

.site-shell[data-theme='dark'] .clock-icon {
color: #f4c6e2;
}

.site-shell[data-theme='dark'] .meta-divider {
background: #55485f;
}

.site-shell[data-theme='dark'] .buy-course-button {
background: linear-gradient(110deg, #59304d, #4a2946);
  color: #ff9acf;
}

.site-shell[data-theme='dark'] .buy-course-button:hover {
background: linear-gradient(110deg, #ff3da1, #e60078);
  color: #fff;
}

@media (max-width: 860px) {
.course-card {
height: 290px;
}

.course-card-art {
height: 158px;
}

.course-card-art img {
height: 210px;
}
}

@media (max-width: 600px) {
.course-card {
height: 298px;
}

.course-card-art {
height: 166px;
}

.course-card-art img {
height: 210px;
}

.course-card-body {
padding-right: 15px;
    padding-left: 15px;
}
}`;

export function CardsStyles() {
  return <style>{componentStyles}</style>;
}

function Cards({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="course-card">
      <div className="course-card-art">
        <img src={item.image} alt={`${item.name} book illustration`} />
        <button
          className={`favorite-button${isFavorite ? ' is-favorite' : ''}`}
          type="button"
          aria-label={isFavorite ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((favorite) => !favorite)}
        >
          <svg
            aria-hidden="true"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
      </div>

      <div className="course-card-body">
        <span className="course-badge">
          <Icon name="course" size={12} />
          {item.category === 'Free' ? 'Free Course' : item.category}
        </span>
        <h3>{item.name}</h3>
        <p>{item.title}</p>

        <div className="course-card-bottom">
          <div className="course-meta">
            <span><span className="lesson-dot">▶</span> 0 Lessons</span>
            <span className="meta-divider" aria-hidden="true" />
            <span><span className="clock-icon" aria-hidden="true">◷</span> 2 Hours</span>
          </div>
          <a className="buy-course-button" href="#contact">
            Buy Now <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
