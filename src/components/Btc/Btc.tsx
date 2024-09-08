"use client";

import { useState, useEffect, useRef } from "react";
import BitcoinContainer from "../BitcoinContainer/BitcoinContainer";
import Image from "next/image";
import { phone } from "@/asset";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Btc = () => {
  const fadeInControls = useAnimation();
  const scaleInControls = useAnimation();

  const [fadeInRef, fadeInInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [scaleInRef, scaleInInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (fadeInInView) {
      fadeInControls.start("visible");
    }
  }, [fadeInControls, fadeInInView]);

  useEffect(() => {
    if (scaleInInView) {
      scaleInControls.start("visible");
    }
  }, [scaleInControls, scaleInInView]);

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const scaleInVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div className="bg-gray-50 px-4">
      <section className=" container py-[8rem] mx-auto flex flex-wrap gap-[1rem] justify-center">
        <main className=" flex flex-col gap-3">
          <BitcoinContainer />
          <motion.div
            ref={fadeInRef}
            animate={fadeInControls}
            initial="hidden"
            variants={fadeInVariant}
          >
            <div className=" p-5 w-[350px] md:w-[400px] bg-white shadow-md flex flex-col gap-7 ">
              <h3 className=" font-semibold text-base">Advisors</h3>
              <p className=" text-base leading-7 font-medium">
                Experienced professionals guiding you towards smart financial
                decisions and secure long-term investments for a prosperous
                future.
              </p>
              <button className=" btn w-[130px]">Learn More</button>
            </div>
          </motion.div>
        </main>
        <main className=" trading-bg md:w-[400px] w-[350px]  px-5 py-8">
          <motion.div
            ref={scaleInRef}
            animate={scaleInControls}
            initial="hidden"
            variants={scaleInVariant}
          >
            <div className="  h-[inherit] absolute w-full" />
            <div className="bg-white/10 rounded-md mt-[20rem] backdrop-blur-lg  p-5 flex flex-col float-end justify-end gap-4 text-white">
              <h3>Safe & Secure Trading</h3>
              <p>MT-4 Software which protect data between traders</p>
              <button className=" btn w-[130px]">Learn More</button>
            </div>
          </motion.div>
        </main>
        <motion.div
          ref={fadeInRef}
          animate={fadeInControls}
          initial="hidden"
          variants={fadeInVariant}
        ></motion.div>
        <main className=" flex flex-col gap-6">
          <motion.div
            ref={fadeInRef}
            animate={fadeInControls}
            initial="hidden"
            variants={fadeInVariant}
          >
            <div className=" px-5 py-7 shadow-md bg-white flex flex-col gap-5 rounded-md w-[350px] md:w-[400px]">
              <h2 className=" font-semibold text-base">Instant Exchange</h2>
              <div className="">
                <Image
                  src={phone}
                  alt=""
                  width={100}
                  height={150}
                  className=" object-contain w-full rounded-md"
                />
              </div>
              <p className=" text-base leading-7 font-medium">
                Experience seamless transactions with our Instant Exchange
                service, enabling you to effortlessly convert currencies or
                assets in real-time, ensuring convenience and efficiency at your
                fingertips.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={fadeInRef}
            animate={fadeInControls}
            initial="hidden"
            variants={fadeInVariant}
          >
            <div className=" w-[350px] md:w-[400px] flex flex-col gap-5 rounded-md py-4 px-6 bg-white shadow-md">
              <h3 className=" font-semibold text-base">User Experience</h3>
              <p className=" text-sm leading-7 font-medium">
                Crafting seamless interactions, intuitive interfaces, and
                delightful experiences that captivate users and drive
                engagement, satisfaction, and loyalty.
              </p>
            </div>
          </motion.div>
        </main>
      </section>
    </div>
  );
};

export default Btc;
