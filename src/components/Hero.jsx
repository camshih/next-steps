import React from "react";
import mainImg from "./../assets/bball-court.jpg";

const Hero = () => {
  return (
    // <div className="pt-20 w-full h-screen bg-zinc-200 flex flex-col justify-between ">
    //   <div className="w-full h-[700px] bg-gray-900/90">
    //     <img className="w-full h-full object-cover mix-blend-overlay" src={mainImg} alt="" />
    //   </div>
    //   <div className="flex justify-center w-full text-center m-auto">
    //     Lorem.
    //   </div>
    // </div>

    <div className="w-full h-screen flex justify-between bg-stone-800">
      <div className="w-full mt-20">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img className="w-full h-full object-cover mix-blend-overlay" src={mainImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="pb-6">
            <h2 className="text-center text-8xl uppercase pt-60">Become the better you</h2>
          </div>
          <div className="text-center text-xl">
          <button className="w-auto px-4 py-2 uppercase text-black font-medium border rounded-md bg-white">
            join and take the next step with us
          </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;

// <div class="w-64 h-64 bg-red-100 relative">
//   <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg')"></div>
//   <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div>
// </div>
