import React from "react";
import { Link } from "react-router-dom";

import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-3">
      <footer className="flex flex-col justify-center bg-white">
        <Link
          to={"/"}
          className="flex items-center justify-center mb-5 text-2xl font-semibold "
        >
          <img
            className={"w-4/4 lg:w-48"}
            src="https://icrmat.com/wp-content/uploads/2022/03/2023.png"
            alt={"website logo"}
          />
        </Link>
        <nav className="flex justify-center flex-wrap space-x-5 text-gray-500 font-normal ">
          <Link to={"/"} className="hover:text-gray-900">
            Home
          </Link>
          <Link to={"/"} className="hover:text-gray-900">
            Call for papers
          </Link>
          <Link to={"/"} className="hover:text-gray-900">
            Faq
          </Link>
          <Link to={"/"} className="hover:text-gray-900">
            Contact us
          </Link>
          <Link to={"/"} className="hover:text-gray-900">
            About us
          </Link>
        </nav>

        <div className="text-center mb-2 cursor-pointer">
          <h5 className="">Follow us</h5>
          <div className="flex items-center justify-center mt-1">
            <div className="flex">
              <button
                style={{ height: "25px", width: "25px" }}
                className="footer_icon_hover rounded-full mx-2 border-0 bg-blue-600 text-white flex items-center justify-center"
              >
                <FaFacebookF size={12} />
              </button>
              <button
                style={{ height: "25px", width: "25px" }}
                className="footer_icon_hover rounded-full mx-2 border-0 bg-red-600 text-white flex items-center justify-center"
              >
                <BsInstagram size={12} />
              </button>
              <button
                style={{ height: "25px", width: "25px" }}
                className="footer_icon_hover rounded-full mx-2 border-0 bg-cyan-600 text-white flex items-center justify-center"
              >
                <FiTwitter size={12} />
              </button>
              <button
                style={{ height: "25px", width: "25px" }}
                className="footer_icon_hover rounded-full mx-2 border-0 bg-red-600 text-white flex items-center justify-center"
              >
                <AiOutlineYoutube size={12} />
              </button>
              <button
                style={{ height: "25px", width: "25px" }}
                className="footer_icon_hover rounded-full mx-2 border-0 bg-blue-600 text-white flex items-center justify-center"
              >
                <GrLinkedinOption size={12} />
              </button>
              <button
                style={{ height: "25px", width: "25px" }}
                className="footer_icon_hover rounded-full mx-2 border-0 bg-red-600 text-white flex items-center justify-center"
              >
                <BsPinterest size={12} />
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-700 font-normal text-sm p-2 dark:text-white">
          Copyright 2023 © Conference All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
