import { photo1, photo2, photo3, photo4, photo5 } from "@/asset";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const testimonies = [
  {
    name: "Emma J., Investor",
    image: photo1,
    comment:
      '"This platform has completely transformed the way I manage my portfolio. The intuitive interface and real-time tracking make it so easy to stay on top of my investments. Highly recommend"',
  },
  {
    name: "Carlos M., Beginner Investor",
    image: photo2,
    comment:
      ' "As someone new to trading, I was worried about where to start. This platforms tools and resources have been invaluable. I’ve gained confidence and grown my portfolio in just a few months!"',
  },
  {
    name: "inda K., Long-term Investor",
    image: photo3,
    comment:
      '"Finally, a platform where I can trade stocks, crypto, and ETFs all in one place. The insights and analytics are fantastic, and I love being able to track my progress in real time."',
  },
  {
    name: " Nathan T., Diversified Investor",
    image: photo4,
    comment:
      '"The customer support team is incredibly responsive and helpful. i have been able to make smart investment decisions and see significant growth in my returns"',
  },
  {
    name: "Sophia W., Crypto Trader",
    image: photo5,
    comment:
      '"I was looking for a platform that offered security and simplicity, and I found it here. My investments feel safe, and I love how easy it is to navigate and make trades"',
  },
];

const Testtimonials = () => {
  return (
    <div className=" max-w-[500px] px-3 h-[300px] mb-[7rem] bg-white mx-auto">
      <h3 className=" text-center font-semibold text-xl pb-6">
        What People are saying
      </h3>

      <Carousel
        autoplay
        infinite
        className=" grid place-content-center bg-white"
      >
        {testimonies.map((item, index) => (
          <>
            <main
              key={index}
              className=" flex flex-col justify-between gap-10 rounded-md bg-gray-100 shadow-lg mx-auto px-10 py-6"
            >
              <span className=" flex flex-col gap-4 items-center">
                <Image
                  src={item.image}
                  alt=""
                  width={50}
                  height={50}
                  className=" rounded-full object-cover"
                />

                <p className=" italic font-medium text-s text-teal-800 ">
                  {item.name}
                </p>
              </span>
              <p className="leading-8 mt-[3rem] text-base font-medium italic">
                {item.comment}
              </p>
            </main>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Testtimonials;
