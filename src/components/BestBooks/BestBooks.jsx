import React from "react";
import Img1 from "../../assets/books/book1.jpg";
import Img2 from "../../assets/books/book2.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { Star } from "lucide-react";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "His Life",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const BestBooks = () => {
  return (
    <>
      <div className=" bg-white dark:bg-gray-900 py-10">
        <div className="container">
          <div className="dark:text-white text-center mx-auto max-w-[400px] mb-20">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
              Trending Books
            </p>
            <h1 className="font-bold text-3xl">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {ServicesData.map((item) => (
              <div
              data-aos="zoom-in"
                key={item.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-700 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex justify-center items-center">
                    <Star size={20} className="text-yellow-500" />
                    <Star size={20} className="text-yellow-500" />
                    <Star size={20} className="text-yellow-500" />
                    <Star size={20} className="text-yellow-500" />
                    <Star size={20} className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-200 text-sm line-clamp-2">
                    {item.description}
                  </p>
                  <button className="px-4 py-2 rounded-full bg-primary to-secondary cursor-pointer hover:scale-105 duration-200 group-hover:bg-white text-white group-hover:text-primary mt-4">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
