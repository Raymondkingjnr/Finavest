"use client";

import {
  anonTransaction,
  investment,
  market,
  rate,
  secureImg,
  trading,
} from "@/asset";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const offers = [
  {
    name: "Tailored Strategies",
    text: "Maximize your investment potential with tailored strategies that align with your unique goals, risk tolerance, and market conditions for optimal financial growth",
    image: investment,
  },
  {
    name: "Advanced Trading Tools",
    text: "Leverage advanced trading tools to make informed decisions, optimize your strategies, and stay ahead in the fast-paced world of global markets",
    image: trading,
  },
  {
    name: "Expert Financial Advice",
    text: "Get personalized financial guidance from seasoned experts to help you make informed decisions, grow your wealth, and achieve long-term financial security.",
    image: anonTransaction,
  },
  {
    name: "Robust Risk Management",
    text: "Safeguard your investments with proactive risk management solutions designed to minimize losses, enhance stability, and ensure consistent growth in a volatile market.",
    image: secureImg,
  },
  {
    name: "Educational Resources",
    text: "Empower your financial journey with our comprehensive educational resources, from beginner guides to advanced strategies, designed to enhance your trading skills and market knowledge.",
    image: rate,
  },
  {
    name: "Comprehensive Market Analysis",
    text: "Gain deep insights into industry trends, consumer behavior, and competitive dynamics to inform strategic decisions and drive growth in today’s rapidly evolving marketplace.",
    image: market,
  },
];

const Offer = () => {
  const scaleFromBottomControls = useAnimation();

  const [scaleFromBottomRef, scaleFromBottomInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (scaleFromBottomInView) {
      scaleFromBottomControls.start("visible");
    }
  }, [scaleFromBottomControls, scaleFromBottomInView]);

  const scaleFromBottomVariant = {
    hidden: { scale: 0.8, x: 50, opacity: 0 }, // Starts from 80% size and 50px down
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section className=" bg-gray-100">
      <motion.div
        ref={scaleFromBottomRef}
        animate={scaleFromBottomControls}
        initial="hidden"
        variants={scaleFromBottomVariant}
      >
        <main className=" py-8 px-2 container mx-auto">
          <div className=" text-center">
            <h3 className=" text-primary font-medium text-base">
              What we offer
            </h3>
            <h2 className=" text-black font-normal text-3xl py-6">
              Unlock Financial Success with Strategic Trading
            </h2>
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center items-center gap-x-4 gap-y-8">
            {offers.map((data, index) => (
              <main key={index} className=" border-2 p-6 rounded-md shadow-md">
                <Image
                  src={data.image}
                  alt={data.name}
                  width={80}
                  height={80}
                  className=" object-contain pb-2"
                />
                <span>
                  <h2 className=" font-medium text-base pb-4">{data.name}</h2>
                  <p className=" font-medium text-xs leading-5 tracking-wide w-[300px]">
                    {data.text}
                  </p>
                </span>
                <button className=" font-medium btn w-[140px] mt-5">
                  {" "}
                  LEARN MORE{" "}
                </button>
              </main>
            ))}
          </div>
        </main>
      </motion.div>
    </section>
  );
};

export default Offer;
