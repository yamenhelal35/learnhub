import React from "react";
function PriceCard(){

    return(
<div class="flex flex-col bg-white rounded-2xl">
  <div class="px-6 py-8 sm:p-10 sm:pb-6">
    <div class="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2
          class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        >
          Starter
        </h2>
        <p class="mt-2 text-sm text-gray-500">Suitable to grow steadily.</p>
      </div>
      <div class="mt-6">
        <p>
          <span class="text-5xl font-light tracking-tight text-black">
            $25
          </span>
          <span class="text-base font-medium text-gray-500"> /mo </span>
        </p>
      </div>
    </div>
  </div>
  <div class="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
      href="#"
    >
      Get started
    </a>
  </div>
</div>
    )
}
export default PriceCard;






