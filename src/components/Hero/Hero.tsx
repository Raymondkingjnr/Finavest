"use client";
import React from "react";
import { useSession } from "next-auth/react";
import CountUpNumber from "../CountNumber/CounterNumber";

const Hero = () => {
  const { data: user } = useSession();
  return (
    <>
      <div className=" hero-bg  h-[100vh] relative text-white ">
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.8)]" />
        <section className=" container mx-auto h-screen  px-2 relative z-10 flex items-center">
          <div className=" md:w-[600px] flex flex-col gap-5 mt-[4.8rem] ">
            <h2 className=" font-semibold text-[1.4rem] md:text-[2.6rem] leading-8 md:leading-[50px] text-gray-50">
              Invest with Confidence, Trade with Precision.
            </h2>
            <p className="font-medium text-base text-gray-50">
              Join our platform to unlock a world of opportunities in stocks,
              cryptocurrencies, ETFs, and more. Manage your investments, track
              your profits, and achieve your financial goals — all in one place
            </p>
            <div className=" flex gap-4 justify-start relative mt-3">
              {user?.user ? (
                ""
              ) : (
                <button className=" capitalize btn w-[140px]">
                  Sign up today
                </button>
              )}

              <button className=" capitalize btn-transparent">
                Learn More
              </button>
            </div>

            <main className=" hidden md:flex flex-wrap relative z-40  mt-3 justify-center md:justify-start gap-10">
              <div className=" w-[130px] bg-white h-[130px] rounded-full grid place-content-center py-10 shadow text-center">
                <main>
                  <h3 className=" font-semibold text-base text-orange-600 ">
                    <CountUpNumber duration={3000} endValue={1000} />
                  </h3>
                  <p className=" pt-3 font-semibold text-xs text-green-600">
                    Active Users
                  </p>
                </main>
              </div>
              <div className=" w-[130px] bg-white h-[130px] rounded-full grid place-content-center shadow py-10 text-center">
                <main>
                  <h3 className=" font-semibold text-base text-orange-600 ">
                    <CountUpNumber duration={3000} endValue={300} />
                  </h3>
                  <p className=" pt-3 font-semibold text-xs text-green-600">
                    Active Trading Bots
                  </p>
                </main>
              </div>
              <div className=" w-[130px] bg-white h-[130px] rounded-full grid place-content-center shadow py-10 text-center">
                <main>
                  <h3 className=" font-semibold text-base text-orange-600 ">
                    <CountUpNumber duration={4000} endValue={2000} />
                  </h3>
                  <p className=" pt-3 font-semibold text-xs text-green-600">
                    Trading Commodities
                  </p>
                </main>
              </div>
            </main>
          </div>
        </section>
      </div>
      <main className=" flex md:hidden flex-wrap mt-3 justify-center gap-10">
        <div className=" w-[130px] bg-white h-[130px] rounded-full grid place-content-center py-10 shadow text-center">
          <main>
            <h3 className=" font-semibold text-base text-orange-600 ">
              <CountUpNumber duration={3000} endValue={1000} />
            </h3>
            <p className=" pt-3 font-semibold text-xs text-green-600">
              Active Users
            </p>
          </main>
        </div>
        <div className=" w-[130px] bg-white h-[130px] rounded-full grid place-content-center shadow py-10 text-center">
          <main>
            <h3 className=" font-semibold text-base text-orange-600 ">
              <CountUpNumber duration={3000} endValue={300} />
            </h3>
            <p className=" pt-3 font-semibold text-xs text-green-600">
              Active Trading Bots
            </p>
          </main>
        </div>
        <div className=" w-[130px] bg-white h-[130px] rounded-full grid place-content-center shadow py-10 text-center">
          <main>
            <h3 className=" font-semibold text-base text-orange-600 ">
              <CountUpNumber duration={4000} endValue={2000} />
            </h3>
            <p className=" pt-3 font-semibold text-xs text-green-600">
              Trading Commodities
            </p>
          </main>
        </div>
      </main>
    </>
  );
};

export default Hero;
