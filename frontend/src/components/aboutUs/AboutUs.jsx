import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://imgs.search.brave.com/pw9nNOckIxpPsadO76hJi8fMQwTt8_bXnLToZc7SVJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZW1w/bGUtbGFyZC1zaGl2/YS1zaXR1YXRlZC1k/ZW9naGFyLWpoYXJr/aGFuZC1pbmRpYS10/ZW1wbGUtbGFyZC1z/aGl2YS1zaXR1YXRl/ZC1kZW9naGFyLWpo/YXJraGFuZC1pbmRp/YS0yNTM2MzQ1NDgu/anBn"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-xl font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Discover Jharkhand with Trust, Innovation, and Heart.
                </h2>
                <p className="text-body-color mb-8 text-md">
                  Choosing us means experiencing Jharkhand in the most authentic, safe, and memorable way. We combine smart technology with local expertise to give you personalized journeys, real-time assistance, and immersive previews of destinations.
                </p>
                <p className="text-body-color mb-12 text-md">
                  Our platform goes beyond just travel planning — it connects you with tribal artisans, eco-friendly stays, and cultural experiences, ensuring your trip is not only enjoyable but also meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;