import React from "react";

function Hero1() {
  return (
    <div>
      <div className="md:px-36 px-8 md:py-28 py-5">
        <div className="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 justify-center p-5">
            <h1 className="text-4xl font-bold md:text-5xl">Explore</h1>
            <h1 className="text-4xl font-bold md:text-5xl">the Wonders in</h1>
            <h1 className="text-4xl font-bold md:text-6xl text-[#41A4FF]">
              Jharkhand
            </h1>
            <p className="mt-4 text-md">
              Nestled in the heart of India, Jharkhand is a land of breathtaking waterfalls, dense forests, ancient temples, and vibrant tribal culture. From the serene hills of Netarhat to the adventurous trails of Betla National Park, every corner tells a story of nature’s beauty and cultural richness.
            </p>
            <button className="bg-black text-white px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
              Get started
            </button>
          </div>
          <div>
            <img
              src="https://content3.jdmagicbox.com/v2/comp/dhanbad/w8/9999px326.x326.250103114024.k5w8/catalogue/topchanchi-wildlife-sanctuary-topchanchi-dhanbad-wildlife-sanctuary-pjcqylywab.jpg"
              alt="heroimg"
              className="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
