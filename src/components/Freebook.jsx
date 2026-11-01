import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards, { CardsStyles } from "./Cards";
import { Icon } from "./Navbar";

const componentStyles = String.raw`.courses-section {
position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 29px clamp(28px, 4.7vw, 64px) 34px;
  background:
  radial-gradient(ellipse at 86% 9%, rgb(255 227 246 / 76%), transparent 29%),
  radial-gradient(ellipse at 21% 56%, rgb(255 255 255 / 96%), transparent 48%),
  linear-gradient(115deg, #fffafe, #fff4fb 74%, #ffedf8);
}

.courses-inner {
position: relative;
  z-index: 2;
  width: min(100%, 1220px);
  margin: 0 auto;
}

.courses-heading {
display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
}

.courses-heading-copy {
min-width: 0;
}

.courses-eyebrow {
display: inline-flex;
  min-height: 24px;
  align-items: center;
  gap: 7px;
  padding: 0 11px;
  border-radius: 999px;
  background: linear-gradient(105deg, #ffd1ed, #f4d0ff);
  color: #d60c77;
  font-size: 10px;
  font-weight: 600;
}

.courses-eyebrow svg {
fill: currentColor;
  stroke-width: 1.4;
}

.courses-heading h2 {
position: relative;
  width: fit-content;
  margin: 5px 0 2px;
  color: var(--ink);
  font-size: clamp(26px, 3.2vw, 35px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.2;
}

.courses-heading h2 span {
color: var(--pink);
}

.courses-heading p {
margin: 4px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.55;
}

.courses-heading-copy {
position: relative;
}

.courses-spark {
position: absolute;
  z-index: 1;
  top: 24px;
  left: min(42%, 420px);
  color: #ed1683;
  font-size: 49px;
  font-weight: 700;
  letter-spacing: -10px;
  line-height: 1;
  transform: rotate(22deg);
  pointer-events: none;
}

.all-courses-button {
display: inline-flex;
  min-width: 126px;
  min-height: 34px;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-bottom: 4px;
  padding: 0 14px;
  border-radius: 999px;
  background: linear-gradient(110deg, #ff3da1, #e60078);
  box-shadow: 0 5px 12px rgb(230 0 120 / 23%);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.all-courses-button:hover {
transform: translateY(-2px);
  box-shadow: 0 7px 16px rgb(230 0 120 / 28%);
}

.courses-carousel {
position: relative;
  z-index: 2;
  margin: 0 -7px;
}

.course-slide {
height: 100%;
  padding: 4px 7px 10px;
}

.course-dots {
position: static;
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 7px 0 0 !important;
  padding: 0 !important;
  list-style: none;
}

.course-dots li {
display: inline-grid !important;
  width: 9px;
  height: 9px;
  margin: 0 !important;
  place-items: center;
}

.course-dots li button {
display: block;
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #d9d4e5;
  color: transparent;
  cursor: pointer;
  font-size: 0;
  transition: background-color 160ms ease, transform 160ms ease;
}

.course-dots li button::before {
display: none;
}

.course-dots li.slick-active button {
background: #ed1683;
  transform: scale(1.12);
}

.courses-dots-decoration {
position: absolute;
  z-index: 1;
  width: 44px;
  height: 95px;
  opacity: .8;
  background-image: radial-gradient(#ff9bd0 1.5px, transparent 1.5px);
  background-size: 13px 13px;
  pointer-events: none;
}

.courses-dots-left {
top: 68px;
  left: 4px;
}

.courses-dots-right {
right: 4px;
  bottom: 42px;
  height: 72px;
}

.courses-wave {
position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  left: 0;
  height: 55px;
  background: #ffd8f0;
  clip-path: polygon(0 0, 10% 62%, 22% 95%, 34% 81%, 46% 47%, 57% 86%, 70% 91%, 82% 55%, 92% 70%, 100% 34%, 100% 100%, 0 100%);
}

.courses-wave::after {
position: absolute;
  inset: 20px 0 0;
  background: linear-gradient(90deg, #ffbce3, #fff3fb 52%, #ffbce3);
  clip-path: polygon(0 0, 13% 75%, 25% 90%, 39% 30%, 52% 85%, 68% 96%, 79% 42%, 91% 65%, 100% 14%, 100% 100%, 0 100%);
  content: '';
}

.site-shell[data-theme='dark'] .courses-section {
background:
  radial-gradient(ellipse at 86% 9%, rgb(126 44 95 / 29%), transparent 29%),
  radial-gradient(ellipse at 21% 56%, rgb(57 43 71 / 45%), transparent 48%),
  linear-gradient(115deg, #211d31, #292135 74%, #302039);
}

.site-shell[data-theme='dark'] .courses-eyebrow {
background: linear-gradient(105deg, #512b4c, #45294a);
  color: #ff91c9;
}

.site-shell[data-theme='dark'] .course-dots li button {
background: #584c64;
}

.site-shell[data-theme='dark'] .course-dots li.slick-active button {
background: #ed1683;
}

.site-shell[data-theme='dark'] .courses-wave {
background: #39243a;
}

.site-shell[data-theme='dark'] .courses-wave::after {
background: #44233c;
}

@media (max-width: 860px) {
.courses-section {
padding-right: 28px;
    padding-left: 28px;
}

.courses-heading h2 {
font-size: 29px;
}
}

@media (max-width: 600px) {
.courses-section {
padding: 25px 16px 32px;
}

.courses-heading {
align-items: flex-start;
    gap: 8px;
}

.courses-heading h2 {
font-size: clamp(24px, 7vw, 30px);
    letter-spacing: -1px;
}

.courses-heading p {
max-width: 100%;
    font-size: 10px;
}

.desktop-break {
display: none;
}

.all-courses-button {
min-width: 0;
    min-height: 30px;
    gap: 5px;
    margin-top: 42px;
    padding: 0 9px;
    font-size: 9px;
}

.courses-spark {
top: 17px;
    left: auto;
    right: 19px;
    font-size: 38px;
}

.courses-carousel {
margin: 0 -3px;
}

.course-slide {
padding-right: 3px;
    padding-left: 3px;
}

.courses-wave {
height: 40px;
}

.courses-wave::after {
top: 14px;
}
}`;

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  const settings = {
    className: "course-slider",
    dots: filterData.length > 3,
    arrows: false,
    infinite: filterData.length > 3,
    speed: 500,
    slidesToShow: Math.min(filterData.length, 3),
    slidesToScroll: 1,
    autoplay: filterData.length > 3,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: (dots) => <ul className="course-dots">{dots}</ul>,
    customPaging: (index) => <button type="button" aria-label={`Go to course page ${index + 1}`} />,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: Math.min(filterData.length, 2),
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <style>{componentStyles}</style>
      <CardsStyles />
      <section className="courses-section" id="courses" aria-labelledby="courses-title">
      <span className="courses-spark" aria-hidden="true">〃</span>
      <span className="courses-dots-decoration courses-dots-left" aria-hidden="true" />
      <span className="courses-dots-decoration courses-dots-right" aria-hidden="true" />

      <div className="courses-inner">
        <div className="courses-heading">
          <div className="courses-heading-copy">
            <span className="courses-eyebrow"><Icon name="course" size={15} /> Our Courses</span>
            <h2 id="courses-title">Free offered <span>Courses</span></h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptatum! Vel excepturi mollitia
              <br className="desktop-break" /> voluptatem exercitationem, id voluptates laborum! Quisquam, deserunt.
            </p>
          </div>
          <a className="all-courses-button" href="#courses">
            View All Courses <Icon name="arrow" size={16} />
          </a>
        </div>

        <div className="courses-carousel">
          <Slider {...settings}>
            {filterData.map((item) => (
              <div key={item.id} className="course-slide">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="courses-wave" aria-hidden="true" />
      </section>
    </>
  );
}

export default Freebook;
