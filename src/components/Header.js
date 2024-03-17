import React from "react";
import { BsSearch, BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish mx-6">
          <b>Fish</b>
          <i>Mania</i>.
        </div>

        <div className="w-full relative flex justify-end items-center">
          <div className="flex-grow relative">
            <input
              className="border-gray-200 border p-2 px-4 rounded-lg w-full"
              type="text"
              placeholder="Enter any product name..."
            />
            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex mx-auto px-4 sm:px-6 lg:px-8 text-gray-500 text-[30px]">
            <div className="relative">
              <BsCart />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
