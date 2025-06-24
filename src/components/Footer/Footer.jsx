import {
  ArrowBigUp,
  ArrowRight,
  Facebook,
  Linkedin,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3 max-w-[450px]">
              <h2 className="text-2xl font-bold">Book Store</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                cumque fuga distinctio quas!
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <ArrowBigUp size={20} />
                  <span>Noida, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={20} />
                  <span>+91 123456789</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Facebook className="hover:text-primary transition-colors duration-200 cursor-pointer" size={30} />
                <Linkedin className="hover:text-primary transition-colors duration-200 cursor-pointer" size={30} />
                <Twitter className="hover:text-primary transition-colors duration-200 cursor-pointer" size={30} />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <h1 className="font-bold text-xl">Important Links</h1>
                <ul className="flex flex-col gap-3 mt-5">
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Home</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">About</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Contact</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-xl">Important Links</h1>
                <ul className="flex flex-col gap-3 mt-5">
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Home</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">About</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Contact</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-xl">Important Links</h1>
                <ul className="flex flex-col gap-3 mt-5">
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Home</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">About</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Contact</a>
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 hover:scale-105 transition-transform duration-200">
                    <ArrowRight size={20} />
                    <a href="#home">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-gray-400 my-6" />
          <div className="py-4 text-center text-gray-600 dark:text-gray-400">
            <span>Copyright © 2025. All rights reserved || Made with Walid Ashraf 🖤</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
