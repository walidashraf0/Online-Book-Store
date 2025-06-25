import { Lock } from "lucide-react";
import React from "react";
import Library from "../../assets/website/library.jpg";

const Banner = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <img
            data-aos="zoom-in"
              className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              src={Library}
              alt=""
            />
          </div>
          <div data-aos="slide-up" className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="font-bold text-3xl sm:text-4xl">
              Library at your fingertips
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              odio minus enim sint quia architecto distinctio quisquam autem
              suscipit praesentium?
            </p>
            <div className="flex flex-col sm:gap-6">
              <div className="flex items-center gap-4 w-full">
                <Lock
                  size={20}
                  className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-violet-100 dark:bg-violet-400"
                />
                <span className="">Quality Books</span>
              </div>
              <div className="flex items-center gap-4 w-full">
                <Lock
                  size={20}
                  className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-orange-100 dark:bg-orange-400"
                />
                <span className="">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-4 w-full">
                <Lock
                  size={20}
                  className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-green-100 dark:bg-green-400"
                />
                <span className="">Easy Payment method</span>
              </div>
              <div className="flex items-center gap-4 w-full">
                <Lock
                  size={20}
                  className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-yellow-100 dark:bg-yellow-400"
                />
                <span className="">Get offers on books</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
