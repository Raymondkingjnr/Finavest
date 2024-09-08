import { customer } from "@/asset";
import React from "react";

const ContactPage = () => {
  return (
    <div className=" pb-12  ">
      {/* Contact Header */}
      <div className="relative contact-bg h-[500px] flex flex-col w-full justify-center items-center text-center mb-10">
        <div className=" bg-[rgba(0,0,0,0.8)] h-[500px] absolute w-full" />
        <main className=" relative z-10 md:w-[460px]">
          <h2 className="text-3xl font-bold text-gray-50">
            Contact Information
          </h2>
          <p className="text-gray-50 mt-4 font-medium text-base leading-8">
            For inquiries, support, or collaboration opportunities, please reach
            out using the details below. We look forward to connecting with you
            and addressing your needs!
          </p>
          <button className="mt-6 btn text-white w-[120px] font-medium">
            Contact Us
          </button>
        </main>
      </div>

      {/* Contact Details and Form */}
      <div className="max-w-5xl mx-auto px-5 flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-8 my-10 gap-8">
        {/* Contact Details */}
        <div className="flex flex-col space-y-10">
          <div className="flex items-start space-x-4">
            <span className="text-orange-500">
              <i className="fas fa-phone-alt"></i>
            </span>
            <div>
              <h3 className="font-semibold text-base">Phone Number</h3>
              <p className="text-gray-600 font-medium text-sm">
                +0123 4567 8910
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-orange-500">
              <i className="fas fa-envelope"></i>
            </span>
            <div>
              <h3 className="font-semibold text-base">Email Address</h3>
              <p className="text-gray-600 font-medium text-sm">
                example@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-orange-500">
              <i className="fas fa-fax"></i>
            </span>
            <div>
              <h3 className="font-semibold text-base">Fax Address</h3>
              <p className="text-gray-600 font-medium text-sm">
                +0123 4567 9876
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-orange-500">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div>
              <h3 className="font-semibold text-base">Location</h3>
              <p className="text-gray-600 font-medium text-sm">
                123 Business Avenue, NYC
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Send Message</h3>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 p-3 border border-gray-300 rounded-md"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="flex-1 p-3 border border-gray-300 rounded-md"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 p-3 border border-gray-300 rounded-md"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="flex-1 p-3 border border-gray-300 rounded-md"
                type="text"
                placeholder="Subject"
              />
            </div>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-[300px]"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn w-[127px] font-medium">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="max-w-5xl mx-auto mt-12 px-5">
        <main className="">
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">
              Find Us on Google Maps
            </h3>
            <p className="text-center text-gray-600 font-bold px-4 md:px-[2rem] lg:px-[10rem] text-sm leading-8 mb-8">
              Explore our location easily by searching for us on Google Maps.
              Get directions, view nearby landmarks, and find the best route to
              reach us effortlessly.
            </p>
          </div>
        </main>
        <div className="w-full h-[350px] bg-gray-200 rounded-lg overflow-hidden">
          {/* Replace with actual Google Maps embed code */}
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
