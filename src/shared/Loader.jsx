import React from "react";
import loaderLottie from "./loader.json";
export default function Loader() {
  return (
    <div>
      <div className="flex items-center text-sm justify-center h-screen w-full">
        <Lottie
          className="h-[20rem] w-[20rem]"
          animationData={loaderLottie}
          loop={true}
        />
      </div>
    </div>
  );
}
