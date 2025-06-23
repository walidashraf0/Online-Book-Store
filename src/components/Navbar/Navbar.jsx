import React from "react";
import MyLogo from "../../assets/mylogo.jpg";
import { ArrowDown, ShoppingCart } from "lucide-react";
import DarkMode from "../DarkMode/DarkMode";

const Menu = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Products",
    url: "#",
  },
];

const QuickLinks = [
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Support",
    url: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a className="flex items-center gap-2 p-2" href="#">
                <img className="w-14 rounded-full" src={MyLogo} alt="logo" />
                <span className="text-lg text-gray-500 font-bold dark:text-white">Books</span>
              </a>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div>
                <DarkMode />
              </div>
              <ul className="items-center hidden sm:flex gap-4">
                {Menu.map((item, key) => (
                  <a href={item.url} key={key}>
                    <li className="p-2 transition-all duration-200 hover:bg-white dark:hover:text-gray-600 font-semibold cursor-pointer rounded-md">
                      {item.title}
                    </li>
                  </a>
                ))}
                <li className="p-2 transition-all duration-200 hover:bg-white dark:hover:text-gray-600 font-semibold cursor-pointer rounded-md group relative flex items-center gap-1">
                  Quick Links
                  <span className="group-hover:rotate-180 transition-transform duration-300">
                    <ArrowDown size={20} />
                  </span>
                  <ul className="absolute z-10 top-[58px] hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-[150px]">
                    {QuickLinks.map((link, key) => (
                      <a href={link.url} key={key}>
                        <li className="p-1 transition-all duration-200 hover:bg-blue-200 rounded-sm w-full">
                          {link.title}
                        </li>
                      </a>
                    ))}
                  </ul>
                </li>
              </ul>
              <button className="font-semibold flex items-center gap-1 bg-gradient-to-r from-primary to-secondary hover:scale-105 cursor-pointer text-white px-4 py-1 rounded-full">
                Order
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
