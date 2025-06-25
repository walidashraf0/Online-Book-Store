import { X } from "lucide-react";
import React from "react";

const Popup = ({ popupOrder, handlePopupOrder }) => {
  return (
    <>
      {popupOrder && (
        <div className="fixed w-screen h-screen top-0 left-0 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[400px] h-[300px] bg-white dark:bg-gray-800 rounded-2xl relative">
            <div className="flex flex-col items-center py-[30px]">
              <h1 className="bg-clip-text font-bold text-3xl text-transparent bg-gradient-to-r from-primary to-secondary">
                Order Now
              </h1>
              <div className="mt-4">
                <form className="flex flex-col items-center gap-4 w-full text-black">
                  <div className="flex items-center gap-2 w-full">
                    <label className="font-bold dark:text-white" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 dark:bg-white rounded-md w-full py-1 px-2 focus:border-primary focus:outline-none"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <label className="font-bold dark:text-white" htmlFor="name">
                      Email
                    </label>
                    <input
                      className="border-2 dark:bg-white rounded-md w-full py-1 px-2 focus:border-primary focus:outline-none"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <label className="font-bold dark:text-white" htmlFor="name">
                      Address
                    </label>
                    <input
                      className="border-2 dark:bg-white rounded-md w-full py-1 px-2 focus:border-primary focus:outline-none"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="w-fit">
                    <button className="rounded-full cursor-pointer text-white bg-gradient-to-r from-primary to-secondary px-4 py-2">
                      Order Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-black dark:text-white p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 hover:text-primary cursor-pointer"
              onClick={handlePopupOrder}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
