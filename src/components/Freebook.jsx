import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  const settings = {
    dots: true,
    infinite: filterData.length > 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: filterData.length > 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-6">
      <div>
        <h2 className="font-semibold text-xl pb-2">Free offered Courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          voluptatum! Vel excepturi mollitia voluptatem exercitationem,
          id voluptates laborum! Quisquam, deserunt.
        </p>
      </div>
      <div className="mt-4">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
export default Freebook;
