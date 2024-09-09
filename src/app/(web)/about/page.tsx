import { photo1, photo2, photo3, photo4 } from "@/asset";
import React from "react";
import {
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const team = [
  {
    name: "Sony Madison",
    title: "CEO, Director",
    image: photo1, // Placeholder image; replace with real image paths
  },
  {
    name: "Hary Warth",
    title: "Head Manager",
    image: photo2,
  },
  {
    name: "Jenny Hobb",
    title: "Branch Manager",
    image: photo3,
  },
  {
    name: "Johny Smith",
    title: "Supervisor",
    image: photo4,
  },
];

const AboutUsPage = () => {
  return (
    <div>
      <div className="relative about-bg h-[550px] flex flex-col w-full justify-center items-center text-center mb-10">
        <div className=" bg-[#04123298] h-[550px] absolute w-full" />
        <main className=" relative z-10 md:w-[560px]">
          <h2 className="text-3xl font-bold text-gray-50">About Us</h2>
          <p className="text-gray-50 mt-4 font-medium text-base leading-8">
            At Financier, we specialize in creating impactful digital
            experiences that connect brands with their audiences. From
            innovative strategies to cutting-edge technology, we are here to
            elevate your business to new heights.
          </p>
          {/* <button className="mt-6 btn text-white capitalize w-[120px] font-medium">
            About Us
          </button> */}
        </main>
      </div>

      <div className="bg-white py-[5rem] px-5 ">
        <div className="max-w-7xl mx-auto text-center">
          <div className=" bg-orange-600 w-4 h-4 mb-5 p-5 rounded-full" />
          <main className="grid lg:grid-cols-2 gap-x-[3rem] gap-y-5">
            <div className=" text-left">
              <h2 className="text-3xl font-bold text-gray-800">
                <span className="text-red-500">Introduction</span> To Best
                Digital Agency!
              </h2>
              <p className="mt-4 text-teal-600 py-5 text-base font-semibold">
                We are dedicated to providing top-tier digital solutions that
                drive business growth, enhance brand presence, and maximize
                return on investment.
              </p>
            </div>

            <div className=" grid md:grid-cols-2 gap-5  ">
              <main className=" p-6 shadow-xl h-fit rounded-md text-left">
                <p className="text-teal-700 font-medium text-sm pt-4">
                  {" "}
                  Our mission is to deliver measurable results through
                  customized digital strategies that drive growth, engagement,
                  and lasting success. We believe in the power of creativity
                  combined with data-driven insights to achieve exceptional
                  outcomes for our clients.
                </p>
              </main>
              <main className=" p-6 shadow-xl h-fit rounded-md text-left">
                <p className="text-teal-700 font-medium text-sm pt-4">
                  {" "}
                  With a dedicated team of industry experts, a client-first
                  approach, and a proven track record, we are committed to
                  making your vision a reality. Partner with us to unlock new
                  opportunities and navigate the digital landscape with
                  confidence
                </p>
              </main>
            </div>
          </main>
          <div className="pt-[4rem] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6  rounded-lg flex gap-5 shadow-lg text-left">
              <div className=" w-[50px] p-[6px] h-[50px] rounded-full bg-black">
                <FaDollarSign className="mx-auto text-4xl text-red-500 mb-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Best Price Guaranteed</h3>
                <p className="text-teal-700 font-medium text-base pt-4">
                  We offer competitive pricing with a commitment to delivering
                  exceptional value, ensuring your investments work harder for
                  you.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-6 flex gap-5  rounded-lg shadow-lg text-left">
              <div className=" w-[50px] p-[6px] h-[50px] rounded-full bg-orange-500">
                <FaChartLine className="mx-auto text-4xl text-white mb-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Finance Analysis</h3>
                <p className="text-teal-700 font-medium text-base pt-4">
                  Our team provides detailed financial insights and data-driven
                  strategies to optimize your digital marketing spend and
                  maximize ROI.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-lg flex gap-5 shadow-lg text-left">
              <div className=" w-[50px] p-[6px] h-[50px] rounded-full bg-black">
                <FaUsers className="mx-auto text-4xl text-red-500 mb-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Professional Team</h3>
                <p className="text-teal-700 font-medium text-base pt-4">
                  Work with our team of seasoned professionals, who bring deep
                  industry knowledge and innovative solutions to help you
                  achieve your business goals
                </p>
              </div>
            </div>
          </div>
          {/* 
          <div className="bg-gray-100 py-10 px-5 mt-[5rem]">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                <span className="text-red-500">Team</span> Members
              </h2>
              <p className="mt-4 text-base font-medium text-gray-600">
                Meet our dedicated team of professionals who are committed to
                delivering exceptional results for our clients.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded pb-5 shadow-lg text-center "
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      className=" mx-auto mb-4"
                    />
                    <h3 className="text-base font-semibold">{member.name}</h3>
                    <p className="text-gray-500 mb-4 text-sm font-medium">
                      {member.title}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <FaTwitter />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-red-500">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
