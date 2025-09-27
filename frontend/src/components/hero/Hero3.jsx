import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-xl font-semibold">
                  Travel with us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
                </h2>
                <p className="text-body-color mb-8 text-md">
                  Travel is not just about visiting new places, it’s about respecting them. “Take only memories, leave only footprints” reminds us to enjoy the beauty of nature and culture without harming them.
                </p>
                <p className="text-body-color mb-12 text-md">
                  When you explore destinations like Jharkhand’s waterfalls, forests, and heritage sites, carry back the stories, the experiences, and the memories — but leave behind nothing except your footprints. By doing so, we preserve the purity of nature and ensure that future generations can also witness the same untouched wonders that inspire us today.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.pinimg.com/736x/a1/13/67/a11367818e26a6ba5799d37077d2c18a.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://indiachalk.com/wp-content/uploads/2022/04/Untitled-1200-%C3%97-628-px-38.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/66/88/c4/fotor-150285430797954.jpg?w=900&h=500&s=1"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;