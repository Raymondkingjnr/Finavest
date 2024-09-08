import React from "react";

const Banner = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source
          src={
            "https://videos.pexels.com/video-files/3130284/3130284-sd_640_360_30fps.mp4"
          }
          type="video/mp4"
        />
        Your Browser dose not support this video
      </video>
      <section className=" px-4 grid place-content-center text-center">
        <div className="inset-0  bg-black/60 backdrop-blur-lg border text-white border-gray-500 py-[5rem] px-10 rounded-md">
          <h2 className=" font-bold text-2xl pb-6">
            Start Trading Today and Unlock Your Financial Potential.
          </h2>
          <div className="grid pl-4 place-content-center lg:w-[600px]">
            <p className=" px-5 font-medium text-base leading-7">
              Begin your trading journey today and explore opportunities to grow
              your wealth with expert strategies, advanced tools, and
              comprehensive market insights.
            </p>
          </div>
          <button className=" btn w-[200px] mt-4">START TRADING NOW</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
