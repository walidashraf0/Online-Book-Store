import React from "react";
import Board from "../../assets/website/board.png";
import AppStore from "../../assets/app_store.png";
import PlayStore from "../../assets/play_store.png";

const AppStoreBanner = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={{
          backgroundImage: `url(${Board})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="slide-up"
              className="text-2xl font-semibold sm:text-4xl text-center"
            >
              Read Books at your fingertips
            </h1>
            <div
              data-aos="slide-up"
              className="flex items-center justify-center flex-wrap gap-4"
            >
              <a href="#">
                <img
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  src={PlayStore}
                  alt="play_store"
                />
              </a>
              <a href="#">
                <img
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  src={AppStore}
                  alt="app_store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStoreBanner;
