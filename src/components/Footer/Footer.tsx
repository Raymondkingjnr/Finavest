import { LogoIcon } from "@/asset/icons";
import React from "react";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10">
      <main className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <i className="fa fa-map-marker mr-2"></i>
              <h4 className="text-lg font-semibold">Head Office</h4>
            </div>

            <p className=" font-medium text-base">Jalan Cempaka Wangi No 22</p>
            <p className=" font-medium text-base py-5">
              support@yourdomain.tld
            </p>
            <p className=" font-medium text-base">Phone: +6221.2002.2012</p>
          </div>
        </div>

        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Stocks
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Futures & Options
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                IPO
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Mutual Funds
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Credits
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Vision & Mission
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                Leadership
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-teal-400 transition-all duration-700 font-medium text-base"
              >
                News & Article
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="mb-4">
            Sign up for our newsletter for updates, news, insights, and
            promotions.
          </p>
          <form action="#" method="post" className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mb-3 px-3 py-2 rounded text-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mb-3 px-3 py-2 rounded text-gray-900"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>

      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between container mx-auto px-4">
        <p className="text-sm">
          &copy; 2024 Finavest. All rights reserved. Powered by MoxCreative.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-400">
            <i className="fa fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="hover:text-teal-400">
            <i className="fa fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="hover:text-teal-400">
            <i className="fa fa-linkedin fa-lg"></i>
          </a>
          <a href="#" className="hover:text-teal-400">
            <i className="fa fa-youtube fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
