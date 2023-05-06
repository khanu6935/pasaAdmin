import React from "react";
import react, { useEffect, useState } from "react";
import { FaRegUser, FaBlogger } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { SlDiamond } from "react-icons/sl";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { Images } from "../../assets";

const Header = () => {
  const links = [
    { name: "Dashboard", link: "/home-page", icons: <RxDashboard /> },
    { name: "Users", link: "/users", icons: <FaRegUser /> },
    { name: "Blogs", link: "/blogs", icons: <FaBlogger /> },
    { name: "Submissions", link: "/submission", icons: <FaBlogger /> },
    { name: "Subscribers", link: "/subscribers", icons: <SlDiamond /> },
    { name: "Settings", link: "/setting", icons: <FiSettings /> },
    { name: "Logout", link: "", icons: <FiSettings /> },
  ];

  return (
    <nav className="bg-secondry rounded-b-xl dark:bg-gray-900 px-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src={Images.pasa}
          className="h-12 w-16 object-cover mr-3"
          alt="pasa-Logo"
        />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto  " id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-secondry md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-secondry dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((item) => {
              return (
                <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-textWhite md:p-0 dark:text-white md:dark:text-blue-500">
                  <Link to={item.link}>
                    <span className="flex justify-center items-center gap-2">
                      {item.icons}
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Link to="/notification">
            <p className="h-12 w-12 rounded-full bg-[#183584] flex justify-center items-center">
              <img
                src={Images.notification}
                alt="logo"
                className="h-6 w-6 object-contain"
              />
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Header };
