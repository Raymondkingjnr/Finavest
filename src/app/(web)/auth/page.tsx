"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
  btc: "",
  eth: "",
  bnb: "",
  usdterc: "",
  usdttrc: "",
};

const AuthPage = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState(defaultFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [signInloading, setSignInLoading] = useState(false);
  const [signUploading, setSignUpLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      push("/");
    }
  }, [push, session]);

  const loginHandler = async () => {
    setSignInLoading(true);
    try {
      await signIn();
      toast.success("sucess, Please Sign in");
      push("/");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    setSignInLoading(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpLoading(true);

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("sucess, Please Sign in");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setFormData(defaultFormData);
      setSignUpLoading(false);
    }
  };
 

  const inputStyles =
    "text-[15px] sm:text-sm text-white font-medium bg-[#0b0d11] mt-3 border-none focus:active:bg-black outline-none w-full px-2 h-[45px] rounded block";
  return (
    <main className="  bg-[#191c23] pt-[7rem] pb-[5rem] overflow-hidden ">
      <section className=" px-5 mx-2  flex items-center justify-center text-white relative">
        <div className="absolute z-[0] w-[60%] h-[60%] top-0 -right-[50%] rounded-full white__gradient " />
        <div className=" py-5  space-y-4 md:bg-[#212733] rounded-md px-0 md:px-5 lg:px-6 w-full lg:w-[45%] mx-auto">
          <div className="flex mb-8 flex-col gap-4  items-center justify-center">
            <h1 className=" text-[15px]  font-semibold tracking-wider">
              Create an Account
            </h1>
            <span className=" font-semibold text-[14px]">OR</span>
            <div
              className=" h-11 w-11 rounded-full grid place-content-center bg-gray-600 shadow-md"
              onClick={loginHandler}
            >
              <FcGoogle
                className="cursor-pointer text-black dark:text-white"
                size={36}
              />
            </div>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="font-medium text-sm flex items-center gap-3"
              >
                <span>Enter Name</span>
                <span className=" text-red-800 text-3xl">*</span>
              </label>
              <input
                type="text"
                name="name"
                //placeholder="Enter Name"
                required
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-medium text-sm flex items-center gap-3"
              >
                <span>Enter Email</span>
                <span className=" text-red-800 text-3xl">*</span>
              </label>
              <input
                type="email"
                name="email"
                //placeholder="Enter eMail"
                required
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div className=" relative">
              <label
                htmlFor="password"
                className="font-medium text-sm flex items-center gap-3"
              >
                <span>Enter Password </span>
                <span className=" text-red-800 text-3xl">*</span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                //placeholder="Password"
                required
                minLength={6}
                className={inputStyles}
                onChange={handleInputChange}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className=" absolute right-2 top-[65px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div>
              <label htmlFor="btc" className="font-medium text-sm pb-3">
                Your BTC Address
              </label>
              <input
                type="btc"
                name="btc"
                //placeholder="Your BTC address"

                minLength={6}
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="eth" className="font-medium text-sm pb-3">
                Your ETH Address
              </label>
              <input
                type="eth"
                name="eth"
                //placeholder="Your eth Address"

                minLength={6}
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="usdterc" className="font-medium text-sm pb-3">
                Your USDT ERC20 Address
              </label>
              <input
                type="usdterc"
                name="usdterc"
                //placeholder="Your usdttrc address"

                minLength={6}
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="usdttrc" className="font-medium text-sm pb-3">
                Your USDT TRC20 Address
              </label>
              <input
                type="usdttrc"
                name="usdttrc"
                //placeholder="Your usdterc address"

                minLength={6}
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="bnb" className=" pb-3 font-medium text-sm">
                Your BNB Address
              </label>
              <input
                type="bnb"
                name="bnb"
                //placeholder="Your BNB address"

                minLength={6}
                className={inputStyles}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="btn buttonComp w-full"
              onClick={() => handleSubmit}
            >
              {signUploading ? (
                <span className="loader">
                  <ImSpinner className="loader" size={25} />
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className=" text-base font-[600] ">
            Already have an account?{" "}
            <button
              className=" w-[120px] buttonComp font-medium rounded-md h-[40px] bg-teal-600 cursor-pointer"
              onClick={loginHandler}
            >
              {signInloading ? (
                <span className="loader">
                  <ImSpinner className="loader" size={25} />
                </span>
              ) : (
                "  Sign In"
              )}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
