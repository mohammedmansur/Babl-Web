import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative h-56 lg:h-72 rounded-b-[50px] bg-cover bg-center bg-no-repeat shadow-lg bg-[url(/assets/back.jpeg)]">
      <div className="px-4 pt-8 pb-10">
        <Link
          to={"/"}
          className="absolute inset-x-0 -bottom-10 mx-auto w-36 lg:w-52 rounded-full  bg-white shadow-lg"
        >
          <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
          <img
            className="mx-auto h-auto w-full rounded-full"
            src="/assets/logo.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
