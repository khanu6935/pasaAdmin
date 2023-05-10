import React from "react";
import { Images } from "../../assets";
import { SlDiamond } from "react-icons/sl";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser, FaBlogger } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { GiCrossMark } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setopen] = React.useState(false);
  const links = [
    { name: "Dashboard", link: "/home-page", icon: <RxDashboard /> },
    { name: "Users", link: "/users", icons: Images.user },
    { name: "Blogs", link: "/blogs", icons: Images.blogs },
    { name: "Submissions", link: "/submission", icons: Images.submission },
    { name: "Subscribers", link: "/subscribers", icon: <SlDiamond /> },
    { name: "Settings", link: "/setting", icon: <FiSettings /> },
    { name: "Logout", link: "", icons: Images.logout },
  ];

  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={`flex justify-around h-20 bg-secondry md:px-6 px-2 lg:rounded-b-3xl rounded-none duration-500   lg:flex-nowrap flex-wrap   w-full z-50 `}
    >
      <div className="flex lg:justify-center justify-start lg:items-center items-start lg:w-[20%] w-[90%] ">
        <img
          src={Images.pasa}
          className="h-12 w-16 object-cover lg:mr-1 mr-0 lg:mt-0 md:mt-4 mt-[14px]"
          alt="pasa-Logo"
        />
      </div>

      <div className="flex w-full">
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
          className={`flex lg:flex-row lg:space-y-0 space-y-4 absolute lg:static  flex-col  bg-secondry
        py-4 w-full duration-500 transition-all ease-in ${
          open ? "right-[0.5vw]  top-20 " : "right-[-170vw] top-[-20rem]"
        }`}
        >
          <ul className="lg:flex lg:items-center lg:space-x-2 space-x-4 lg:space-y-0 space-y-4">
            {links.map((item) => {
              const isActive = item.link === pathname;
              return (
                <li
                  key={item.name}
                  className={`md:my-0 my-3 flex  min-w-fit px-2 py-1 rounded-2xl duration-500 text-textWhite font-bold ${
                    isActive ? "bg-[#49279A]" : ""
                  }`}
                >
                  <Link
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
          <div className="lg:px-0 px-4 flex lg:justify-end justify-start lg:w-[16rem] w-full">
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
    </div>
  );
};

export { Header };
