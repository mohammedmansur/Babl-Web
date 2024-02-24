import React from "react";
import { Categorys } from "../../shared/Items";

export default function ColdDrink() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
        {Categorys.find(f=>f.id===3).subItems.map((value,index)=>(
              <div key={index} class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-[320px] rounded w-full object-cover object-center mb-6"
                  src={`/assets/item/colddrink/colddrink${index+1}.jpeg`}
                  alt="content"
                />
  
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  {value.name}
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                  hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>  
            ))}

        </div>
      </div>
    </section>
  );
}
