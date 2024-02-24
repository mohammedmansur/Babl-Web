import React from "react";
import { Categorys } from "../../shared/Items";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
        <div className="max-w-lg mx-5">
          <h1 className="text-2xl font-bold text-gray-800">قاوەی بابل</h1>
          <p className="mt-2 text-gray-600 text-justify">
            لە بابل هەموو جۆرەکانی چەرەس و قاوە نوقڵی بادەم شەکری و لوقم و
            شیرینی چەندین جۆری چکلێت هەموو جۆرەکانی بەهارات دەست دەکەوێت، بابل
            هەمیشە جیاوازەکان پێشکەش دەکات بۆیە دەتوانی خۆشترین بۆنی قۆڵۆنیای
            تایبەت بە براندی بابل تاقیبکەیتەوە
          </p>
        </div>
        <div className="max-w-lg mx-5">
          <a
          href='https://wa.link/5uos0x'
          target="_blank"
          className="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 inline h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            چاتمان لەگەڵ بکە
          </a>
          <p
            dir="ltr"
            className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +964 770 138 2008
          </p>
        </div>
      </div>
      <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
        {Categorys.map((value, index) => (
          <div key={index} className="relative shadow-lg p-4">
            <div className="aspect-square overflow-hidden">
              <img
                className="h-full w-full scale-125 object-cover transition-all duration-300 group-hover:scale-125"
                src={value.imagePath}
                alt=""
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div className="">
                <h3 className="text-md font-semibold sm:text-sm md:text-base">
                  <a href="#" title="" className="">
                    {value.name}
                    <span className="absolute" aria-hidden="true"></span>
                  </a>
                </h3>
              </div>
              <div className="text-right">
                <p className="text-md font-normal sm:text-sm md:text-base">
                  {value.price}
                </p>
              </div>
            </div>

            <Link
              to={value.type}
              className="text-md my-4 flex justify-center font-normal sm:text-sm md:text-base"
            >
              <div class="relative inline-flex  group">
                <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3E3232] via-[#503C3C] to-[#A87C7C] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <div
                
                  class="relative inline-flex items-center justify-center px-8 py-2 text-lg bg-[#7E6363] text-white font-bold  transition-all duration-200  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  زیاتر ببینە
                </div>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
