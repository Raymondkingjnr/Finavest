"use client";

import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  isOpen?: boolean;
  amountSent?: number;
  setAmountSent: Dispatch<SetStateAction<number | null>>;
  token?: string;
  setToken: Dispatch<SetStateAction<string>>;
  submitHandler: () => Promise<string | undefined>;
  isSubmittingPayment?: boolean;
  toggleModal?: () => void;
  headerText: string;
  AmountLable: string;
  CurrencyLable: string;
};

const PaymentModal: FC<Props> = (props) => {
  const {
    isOpen,
    amountSent,
    setAmountSent,
    token,
    setToken,
    submitHandler,
    isSubmittingPayment,
    toggleModal,
    headerText,
    AmountLable,
    CurrencyLable,
  } = props;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountSent(value ? parseFloat(value) : null);
  };
  return (
    <div
      className={`fixed z-[61] inset-0 flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white w-[400px] p-4 rounded-lg shadow-lg">
        <h2 className=" text-center font-medium text-base text-gray-700">
          {headerText}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium pb-4 text-gray-700">
            {AmountLable}
          </label>
          <input
            className=" w-full  h-[40px] px-2  rounded-md font-medium focus:outline-none border border-gray-300"
            value={amountSent}
            onChange={handleAmountChange}
          />
        </div>
        <div className=" mb-5 flex flex-col gap-4">
          <label className="block text-sm font-medium text-gray-700">
            {CurrencyLable}
          </label>
          <input
            readOnly
            className=" w-full h-[40px] px-2 rounded-md font-medium focus:outline-none border border-gray-300"
            value={token}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {["BTC", "ETH", "BNB", "SOL", "USDT", "USDC"].map(
              (coin: string, index) => (
                <div
                  key={index}
                  onClick={() => setToken(coin)}
                  className={`${token === coin ? " text-green-300 bg-[#ff8a2505] border border-green-500" : ""} border border-[#f7f7f7] rounded py-[5px] px-[8px]`}
                >
                  <p className=" font-medium text-[14px] text-center">{coin}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={submitHandler}
            className="px-4 py-2 bg-primary text-white rounded-md"
            disabled={isSubmittingPayment}
          >
            {isSubmittingPayment ? "Submitting" : "Submit"}
          </button>
          <button
            onClick={toggleModal}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
