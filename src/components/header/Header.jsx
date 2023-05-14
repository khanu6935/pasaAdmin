import React, { useState } from "react";
import { Images } from "../../assets";
import { SlDiamond } from "react-icons/sl";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { GiCrossMark } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { CustomModal } from "../customModal/CustomModal";

const Header = () => {
  const [open, setopen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const links = [
    { name: "Dashboard", link: "/home-page", icon: <RxDashboard /> },
    { name: "Signups", link: "/users", icons: Images.user },
    { name: "Blogs", link: "/blogs", icons: Images.blogs },
    { name: "Submissions", link: "/submission", icons: Images.submission },
    { name: "Subscribers", link: "/subscribers", icon: <SlDiamond /> },
    { name: "Settings", link: "/setting", icon: <FiSettings /> },
    {
      name: "Logout",
      link: "",
      icons: Images.logout,
      onClick: () => setIsModalOpen(true),
    },
  ];

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div
        className={`flex justify-around py-4 bg-secondry lg:px-6 px-2 lg:rounded-b-3xl rounded-none duration-500 lg:static fixed lg:flex-nowrap flex-wrap z-50  w-full  `}
      >
        <div className="flex justify-start lg:items-center items-start lg:w-[10%] w-[100%] ">
          <img
            src={Images.pasa}
            className="h-16 w-20 object-contain lg:mr-[20px] mr-0"
            alt="pasa-Logo"
          />
        </div>

        <div className="flex  container w-[100%]">
          <div
            onClick={() => setopen(!open)}
            className="text-3xl text-white   absolute top-[1.8rem]  right-8 cursor-pointer lg:hidden block"
          >
            {open ? (
              <GiCrossMark color="white" />
            ) : (
              <AiOutlineMenu color="white" />
            )}
          </div>

          <div className="flex container w-full">
            <div
              onClick={() => setopen(!open)}
              className="text-3xl text-white   absolute top-[1.8rem]  right-8 cursor-pointer lg:hidden block"
            >
              {open ? (
                <GiCrossMark color="white" />
              ) : (
                <AiOutlineMenu color="white" />
              )}
            </div>

            <div
              className={`flex lg:flex-row justify-center lg:space-y-0 space-y-4 absolute lg:static bg-secondry  flex-col  
        py-4 w-full duration-500 transition-all ease-in ${
          open ? "right-[0.5vw]  top-20 " : "right-[-170vw] top-[-20rem]"
        }`}
            >
              <ul className="lg:flex lg:items-center space-x-6">
                {links.map((item) => {
                  const isActive = item.link === pathname;
                  return (
                    <li
                      key={item.name}
                      className={`md:my-0 my-3  flex min-w-fit px-2 py-1 rounded-2xl duration-500 text-textWhite font-bold ${
                        isActive ? "bg-[#49279A]" : ""
                      }`}
                      onClick={item.onClick}
                    >
                      <Link
                        onClick={item.onClick}
                        className={`flex justify-center items-center gap-1 ${
                          isActive ? "bg-[#49279A]" : ""
                        }`}
                        to={item.link}
                      >
                        {item.icons ? (
                          <img
                            src={item.icons}
                            alt={item.name}
                            className="h-4 w-5 object-contain"
                          />
                        ) : (
                          <span>{item.icon}</span>
                        )}
                        <span className="font-[Barlow] text-base font-normal">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="lg:px-0 px-4 lg:hidden block  lg:justify-end justify-start lg:w-[16rem] w-full">
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
          </div>
          <div className="lg:px-0 px-4 lg:block hidden  w-[10%]  lg:justify-end justify-start">
            <Link
              to="/notification"
              className="h-full flex justify-end items-center"
            >
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
      </div>

      <div>
        <CustomModal openModal={isModalOpen} closeModal={handleModalClose}>
          <div className="w-full">
            <div>
              <h3 className="text-[32px] font-bold text-center  text-textWhite font-[Barlow]">
                ARE YOU SURE YOU WANT TO LOGOUT?
              </h3>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <button className="px-16 bg-[#26164B] py-4 text-lg font-medium font-[Barlow] rounded-lg">
                Cancel
              </button>
              <button className="px-16 bg-[#016BE6] py-4 text-lg font-medium font-[Barlow] rounded-lg">
                Logout
              </button>
            </div>
          </div>
        </CustomModal>
      </div>
    </>
  );
};

export { Header };
