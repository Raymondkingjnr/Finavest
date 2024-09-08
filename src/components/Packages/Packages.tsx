"use client";

import { formatCurrency } from "@/libs/helpers";
import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const packages = [
  {
    name: "Basic",
    minimam_amount: 100,
    max_amount: 1000,
    profit: "50%",
    benefits: [
      "instant withdrew",
      "24 hours customer support",
      "Basic risk managment tool",
    ],
  },
  {
    name: "Gold",
    minimam_amount: 1000,
    max_amount: 10000,
    profit: "80%",
    benefits: [
      "instant withdrew",
      "24 hours customer support",
      "Basic risk managment tool",
    ],
  },
  {
    name: "Premium",
    minimam_amount: 1500,
    max_amount: 50000,
    profit: "150%",
    benefits: [
      "instant withdrew",
      "24 hours customer support",
      "Basic risk managment tool",
    ],
  },
];

const Packages = () => {
  const scaleFromBottomControls = useAnimation();
  const router = useRouter();

  const { data: session } = useSession();

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
    hidden: { scale: 0.8, y: 50, opacity: 0 }, // Starts from 80% size and 50px down
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 3 },
    },
  };

  return (
    <div className=" container mx-auto px-2 py-[8rem]">
      <motion.div
        ref={scaleFromBottomRef}
        animate={scaleFromBottomControls}
        initial="hidden"
        variants={scaleFromBottomVariant}
      >
        <p className=" font-normal text-2xl text-center ">
          Check our list of packages below. <br /> All our packages come with a
          30 days money-back guarantee.
        </p>
        <main className=" grid place-items-center items-center md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7 pt-9">
          {packages.map((data, index) => (
            <section
              className=" border-2 rounded-md p-4  text-black w-[340px] lg:w-[400px] "
              key={index}
            >
              <main className=" grid place-content-center">
                <div
                  className={` w-24 h-24 rounded-full grid place-content-center text-center  py-2 ${data.name === "Gold" ? "bg-yellow-500" : data.name === "Premium" ? "bg-purple-500" : data.name === "Basic" ? "bg-blue-600" : ""}`}
                >
                  <h2
                    className={` font-semibold text-lg text-white capitalize text-center `}
                  >
                    {data.name}
                  </h2>
                </div>
              </main>

              <h3 className=" pt-10 font-semibold text-xl md:text-2xl pb-2 text-center text-teal-900">
                {formatCurrency(data.minimam_amount)} - {""}
                {formatCurrency(data.max_amount)}
                <span className=" text-sm ">/Month</span>
              </h3>
              <p className=" text-center font-medium tracking-wide text-lg pb-2">
                {data.profit} {""}monthly interest
              </p>
              <hr />
              <div className=" pt-7">
                <p className=" font-medium text-2xl py-5">Features</p>

                <div className=" flex flex-col gap-3">
                  {data.benefits.map((items, index) => (
                    <span className=" flex items-center gap-3" key={index}>
                      <span>
                        <IoCheckmarkDoneCircleOutline />
                      </span>
                      <h2>{items}</h2>
                    </span>
                  ))}
                </div>
              </div>

              {session?.user ? (
                <Link href={`/users/${session.user.id}`}>
                  <button className="btn w-full mt-8">Subscribe</button>
                </Link>
              ) : (
                <div>
                  <button className="btn w-full mt-8">Subscribe</button>
                </div>
              )}
            </section>
          ))}
        </main>
      </motion.div>
    </div>
  );
};

export default Packages;
