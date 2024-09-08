"use client";

import {
  bnb,
  crypto,
  earth,
  fox,
  goldmin,
  idead,
  kanba,
  musica,
  nirastate,
  solatytic,
  sponsor_bg,
  trader,
} from "@/asset";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const company = [
  earth,
  kanba,
  musica,
  nirastate,
  fox,
  solatytic,
  idead,
  goldmin,
];

const Sponsors = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.2, // Adjust as needed to trigger animation when 20% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      leftControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
      rightControls.start({ x: 0, opacity: 1, transition: { duration: 1.5 } });
    }
  }, [inView, leftControls, rightControls]);

  return (
    <section className=" overflow-hidden">
      <div className=" max-w-5xl mx-auto py-[4rem] relative">
        <Image
          src={sponsor_bg}
          alt=""
          width={500}
          height={500}
          className=" absolute z-0 top-0 left-20 opacity-35"
        />
        <div className=" grid place-content-center">
          <h2 className=" text-center py-5 font-semibold text-2xl lg:w-[400px]">
            Trusted by Over 6 Million Traders Across 175+ Countries
          </h2>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between place-content-center place-items-center items-center gap-x-5 gap-y-8 py-10">
          {company.map((data, index) => (
            <Image
              src={data}
              alt="sponsors"
              width={120}
              height={120}
              className=" object-contain"
              key={index}
            />
          ))}
        </div>
      </div>
      <div
        className="container px-2 mx-auto py-10 flex flex-col lg:flex-row gap-x-[5rem] justify-center "
        ref={ref}
      >
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={leftControls}
          // style={{ flex: 1, marginRight: "1rem" }}
        >
          <main className=" flex flex-col md:flex-row gap-4 justify-center place-content-center items-center relative border-collapse py-[6rem]">
            <div className=" grid place-content-center bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 h-52 w-52 right-0 top-0 text-white p-5 rounded-full absolute z-10">
              <div className=" text-center">
                <p className="text-2xl font-bold">27+</p>
                <p className="text-lg font-semibold">Years of Experience</p>
              </div>
            </div>
            <div>
              <Image
                src={crypto}
                alt="account"
                width={300}
                height={300}
                className=" object-cover"
              />
              <Image
                src={bnb}
                alt=""
                width={300}
                height={300}
                className=" pt-3 object-contain"
              />
            </div>
            <Image
              src={trader}
              alt="account"
              width={310}
              height={310}
              className=" object-cover rounded-lg"
            />
          </main>
        </motion.div>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={rightControls}
          // style={{ flex: 1, marginLeft: "1rem" }}
        >
          <main className=" lg:pt-[7rem] flex flex-col justify-center  md:justify-between">
            <div className=" text-center lg:text-left">
              <p className=" text-[#37696b] font-semibold text-sm ">
                Who we Are
              </p>

              <h2 className=" text-[#597071] font-bold text-lg py-5">
                Leading the Way in Global Trading
              </h2>
              <div className="grid place-content-center">
                <p className=" w-[330px] lg:w-[500px] text-sm font-medium leading-7">
                  Pioneering innovative strategies, forging international
                  partnerships, and driving sustainable growth in the dynamic
                  world of global commerce.
                </p>
              </div>
            </div>
            <main className=" grid place-content-center lg:place-content-start">
              <div className=" flex pt-[3rem] flex-col gap-2">
                <span className="flex gap-4 items-center">
                  <IoMdCheckmark />
                  <p className=" font-semibold text-sm">Deep Assets Details</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdCheckmark />
                  <p className=" font-semibold text-sm">
                    Dynamic Portfolio Tracking
                  </p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdCheckmark />
                  <p className=" font-semibold text-sm">Smart Notifications</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdCheckmark />
                  <p className=" font-semibold text-sm">Multi Asset Tracking</p>
                </span>
                <button
                  className=" mt-[5rem] btn w-[150px]"
                  onClick={() => router.push("/about")}
                >
                  MORE ABOUT US
                </button>
              </div>
            </main>
          </main>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
