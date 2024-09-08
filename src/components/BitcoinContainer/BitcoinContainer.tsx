"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { formatCurrency } from "@/libs/helpers";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface BitcoinData {
  market_data: {
    current_price: {
      usd: number | null;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    price_change_percentage_1h_in_currency: {
      usd: number;
    };
  };
  name: string;
  image: {
    small: string;
  };
}

const BitcoinContainer = () => {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const fadeInControls = useAnimation();

  const [fadeInRef, fadeInInView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  useEffect(() => {
    if (fadeInInView) {
      fadeInControls.start("visible");
    }
  }, [fadeInControls, fadeInInView]);

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  useEffect(() => {
    // Function to fetch data from the CoinGecko API
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        const data: BitcoinData = await response.data;
        setBitcoinData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the Bitcoin data:", error);
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <div className=" w-[350px] md:w-[400px] shadow-md p-4 ">
      <motion.div
        ref={fadeInRef}
        animate={fadeInControls}
        initial="hidden"
        variants={fadeInVariant}
      >
        <main className=" flex justify-between">
          <span className=" flex flex-col gap-2">
            <Image
              src={bitcoinData?.image.small ?? ""}
              alt={bitcoinData?.name ?? ""}
              width={30}
              height={30}
            />
            <h3 className=" font-semibold text-base">{bitcoinData?.name}</h3>
            <h3 className=" font-medium text-base">BTC/USD</h3>
          </span>
          <h3 className=" font-bold text-lg">
            {formatCurrency(bitcoinData?.market_data.current_price.usd)}
          </h3>
        </main>
        <main className=" flex flex-col gap-3 pt-6">
          <span className=" flex justify-between">
            <h3 className=" font-medium text-base">Rank:</h3>
            <p className=" font-medium text-xl">1</p>
          </span>
          <span className=" flex justify-between">
            <h3 className=" font-medium text-base">1 hour Change:</h3>
            <p className=" flex items-center font-medium text-sm blink-1">
              {bitcoinData?.market_data.price_change_percentage_1h_in_currency.usd
                ?.toString()
                .includes("-") ? (
                <FaLongArrowAltDown size={20} color="red" />
              ) : (
                <FaLongArrowAltUp size={20} color="green" />
              )}

              {
                bitcoinData?.market_data.price_change_percentage_1h_in_currency
                  .usd
              }
            </p>
          </span>
          <span className=" flex justify-between">
            <h3 className=" font-medium text-base">Market Cap:</h3>
            <p className=" font-medium text-sm">
              {formatCurrency(bitcoinData?.market_data.market_cap.usd)} B
            </p>
          </span>
        </main>
      </motion.div>
    </div>
  );
};

export default BitcoinContainer;
