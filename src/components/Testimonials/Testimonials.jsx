import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pb-10">
        <div className="container">
          <div className="dark:text-white text-center mx-auto max-w-[400px] mb-20">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              What our customer says
            </p>
            <h1 className="text-3xl font-bold sm:text-4xl">Testimonials</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          <div>
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <div>
                      <img
                        className="rounded-full w-20 h-20 object-cover"
                        src={data.img}
                        alt={data.name}
                      />
                    </div>
                    <div>
                      <div>
                        <p className="text-gray-500 text-sm">{data.text}</p>
                        <h1 className="font-bold text-black/80 dark:text-white text-xl">
                          {data.name}
                        </h1>
                      </div>
                      <p className="absolute top-0 right-0 font-serif text-9xl z-10 text-black/20">
                        ,,
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
