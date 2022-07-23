import React from "react";
import mainImg from "./../assets/bball-court.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-stone-800">
      <div className="w-full mt-20 ">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={mainImg}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="pb-6">
            <h2 className="text-center text-8xl uppercase pt-60">
              Become the better you
            </h2>
          </div>
          <div className="text-center text-xl">
            <button className="w-auto px-4 py-2 uppercase text-black font-medium border rounded-md bg-white">
              join and take the next step with us
            </button>
          </div>
        </div>
      </div>
      <div className="text-white text-6xl text-center uppercase">
        <h2>There are many ways to take the next step</h2>
      </div>
    </div>
  );
};

export default Hero;
