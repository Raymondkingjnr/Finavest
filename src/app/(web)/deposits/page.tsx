"use client";

import {
  BnbIcon,
  BtcIcon,
  EthIcon,
  SolanaIcon,
  UsdcIcon,
  UsdtIcon,
} from "@/asset/icons";
import { getCoinsAddress } from "@/libs/api";
// import axios from "axios";
import useSWR from "swr";
import { FaCopy } from "react-icons/fa";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import PaymentModal from "@/components/PaymentModal/PaymentModal";
import axios from "axios";
import BackDrop from "@/components/BackDrop/BackDrop";

const DepositPage = () => {
  const [amount, setAmount] = useState<number | undefined>();
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [submittingPayment, setSubmittingPayment] = useState(false);
  const [token, setToken] = useState("");

  const toogglModal = () => setIsPaymentVisible((prev) => !prev);

  const onSubmit = async () => {
    if (!token || !amount) {
      return toast.error("provide a rating text and a rating");
    }

    setSubmittingPayment(true);
    try {
      const { data } = await axios.post("/api/users", {
        token,
        amount,
      });
      console.log(data);
      toast.success("Request Submitted");
    } catch (error) {
      console.log(error);
      toast.error("Request Failed");
    } finally {
      setToken("");
      setAmount(0);
      setSubmittingPayment(false);
      setIsPaymentVisible(false);
    }
  };

  async function fetchData() {
    return getCoinsAddress();
  }

  const { data, error, isLoading } = useSWR("get/addresses", fetchData);

  if (error) {
    console.error("Error fetching data:", error);
    throw new Error("Cannot fetch data");
  }

  if (isLoading) {
    console.log("Loading data...");
  } else if (typeof data === "undefined") {
    console.error("Data is undefined after loading.");
    throw new Error("Cannot fetch data");
  }

  const shortenString = (str: string, startLength = 8, endLength = 8) => {
    if (str.length <= startLength + endLength) {
      return str; // Return the string as is if it is shorter than total length
    }
    const startPortion = str.slice(0, startLength);
    const endPortion = str.slice(-endLength);
    return `${startPortion}......${endPortion}`;
  };

  const btc = data?.btc ?? "";
  const eth = data?.eth ?? "";
  const bnb = data?.bnb ?? "";
  const solana = data?.solana ?? "";
  const usdt = data?.usdt ?? "";
  const usdc = data?.usdc ?? "";

  const shortBtc = shortenString(btc);
  const shorteth = shortenString(eth);
  const shortBnb = shortenString(bnb);
  const shortSol = shortenString(solana);
  const shortUsdt = shortenString(usdt);
  const shortUsdc = shortenString(usdc);

  const handleCopyClick = (textToCopy: string) => {
    console.log("i was clicked");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => toast.success("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className=" container mx-auto p-6 bg-white mt-[7rem] mb-[5rem]">
      <section className="max-w-[700px] mx-auto rounded-lg p-5 shadow-lg ">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Payment Method
        </h2>
        <div className="flex items-center gap-x-[3rem] gap-y-[1rem] flex-wrap justify-center mt-8 mb-16">
          <span className=" grid place-content-center h-[70px] w-[70px] rounded-full bg-slate-100 shadow-xl">
            <BtcIcon />
          </span>
          <span className=" grid place-content-center h-[70px] w-[70px] rounded-full bg-slate-100 shadow-xl">
            <EthIcon />
          </span>
          {/* <span className=" grid place-content-center h-[70px] w-[70px] rounded-full bg-slate-100 shadow-xl">
            <UsdtIcon />
          </span>
          <span className=" grid place-content-center h-[70px] w-[70px] rounded-full bg-slate-100 shadow-xl">
            <UsdcIcon />
          </span> */}
          <span className=" grid place-content-center h-[70px] w-[70px] rounded-full bg-slate-100 shadow-xl">
            <SolanaIcon />
          </span>
          <span className=" grid place-content-center h-[70px] w-[70px] rounded-full bg-slate-100 shadow-xl">
            <BnbIcon />
          </span>
        </div>

        <div className="mb-4 flex flex-col gap-10">
          <div className=" relative">
            <input
              type="text"
              placeholder="Btc Address"
              className="border p-2 rounded w-full text-xs border-t-transparent border-l-transparent border-r-transparent focus:outline-none font-semibold "
              value={shortBtc}
              readOnly
            />
            <span className="absolute right-2 bottom-3 top-2 items-center flex gap-7">
              <BtcIcon />
              <FaCopy
                className="  text-gray-600"
                size={20}
                onClick={() => handleCopyClick(btc)}
              />
            </span>
          </div>
          <div className=" relative">
            <input
              type="text"
              placeholder="Eth address"
              className="border p-2 rounded w-full text-xs border-t-transparent border-l-transparent border-r-transparent focus:outline-none font-semibold"
              value={shorteth}
              readOnly
            />
            <span className="absolute right-2  bottom-3 top-2 items-center flex gap-7">
              <EthIcon className=" bottom-1" />
              <FaCopy
                className=" text-gray-600"
                size={20}
                onClick={() => handleCopyClick(eth)}
              />
            </span>
          </div>
          <div className=" relative">
            <input
              type="text"
              placeholder="Bnb Address"
              className="border p-2 rounded w-full text-xs border-t-transparent border-l-transparent border-r-transparent focus:outline-none font-semibold"
              value={shortBnb}
              readOnly
            />
            <span className="absolute right-2  bottom-3 top-2 items-center flex gap-7">
              <BnbIcon className=" bottom-1" />
              <FaCopy
                className=" text-gray-600"
                size={20}
                onClick={() => handleCopyClick(bnb)}
              />
            </span>
          </div>

          <div className=" relative">
            <input
              type="text"
              placeholder="Solana Address"
              className="border p-2 rounded w-full text-xs border-t-transparent border-l-transparent border-r-transparent focus:outline-none font-semibold"
              value={shortSol}
              readOnly
            />
            <span className="absolute right-2  bottom-3 top-2 items-center flex gap-7">
              <SolanaIcon className=" bottom-1" />
              <FaCopy
                className=" text-gray-600"
                size={20}
                onClick={() => handleCopyClick(solana)}
              />
            </span>
          </div>

          {/* <div className=" relative">
            <input
              type="text"
              placeholder="Usdt Address"
              className="border p-2 rounded w-full border-t-transparent border-l-transparent border-r-transparent focus:outline-none font-semibold"
              value={shortUsdt}
              readOnly
            />
            <span className="absolute right-2 top-2 items-center flex gap-7">
              <UsdtIcon />
              <FaCopy
                className=" text-gray-600"
                size={20}
                onClick={() => handleCopyClick(usdt)}
              />
            </span>
          </div>
          <div className=" relative">
            <input
              type="text"
              placeholder="Usdc Address"
              className="border p-2 rounded w-full border-t-transparent border-l-transparent border-r-transparent focus:outline-none font-semibold"
              value={shortUsdc}
              readOnly
            />
            <span className="absolute right-2 top-2 items-center flex gap-7">
              <UsdcIcon />

              <FaCopy
                className=" text-gray-600"
                size={20}
                onClick={() => handleCopyClick(usdc)}
              />
            </span>
          </div> */}
        </div>

        <button className="w-full btn mt-6" onClick={toogglModal}>
          Confirm Payment
        </button>
      </section>

      <PaymentModal
        token={token}
        setToken={setToken}
        isOpen={isPaymentVisible}
        toggleModal={toogglModal}
        submitHandler={onSubmit}
        isSubmittingPayment={submittingPayment}
        amountSent={amount}
        setAmountSent={setAmount}
        headerText="Comfirm Payment"
        AmountLable="Amount Sent"
        CurrencyLable="Currency"
      />
      <BackDrop isOpen={isPaymentVisible} />
    </div>
  );
};

export default DepositPage;
