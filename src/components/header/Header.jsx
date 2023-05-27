import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Images } from "../../assets";
import { CustomModal } from "../customModal/CustomModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const action = () => {
    navigate("/");
  };

  const links = [
    { name: "Dashboard", link: "/home-page", icon: Images.submission },
    { name: "Signups", link: "/users", icon: Images.user },
    { name: "Blogs", link: "/blogs", icon: Images.blogs },
    { name: "Submissions", link: "/submission", icon: Images.submission },
    { name: "Subscribers", link: "/subscribers", icon: Images.diamond },
    { name: "Settings", link: "/setting", icon: Images.setting },
    {
      name: "Logout",
      link: "",
      icon: Images.logout,
      onClick: () => setIsModalOpen(true),
    },
  ];

  return (
    <nav className="bg-secondry text-white lg:rounded-b-3xl lg:static fixed w-full rounded-none">
      <div className="flex items-center lg:justify-around justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="text-2xl">
            <img
              src={Images.pasa}
              className="h-16 w-20 object-contain lg:mr-[20px] mr-0"
              alt="pasa-Logo"
            />
          </div>
        </div>
        <div className="flex  items-center space-x-4 lg:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:bg-[#49279A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`flex lg:flex-row lg:justify-center lg:items-center items-start lg:space-x-6 space-x-0 justify-start lg:px-0 px-5 lg:space-y-0 space-y-4 absolute lg:static bg-secondry  flex-col
       py-4 w-full duration-500 transition-all ease-in ${
         isMenuOpen ? "right-[0.5vw]  top-20 " : "right-[-170vw] top-[-20rem]"
       }`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className={`text-[16px] flex space-x-2 justify-center items-center px-3 py-1 rounded-2xl ${
                pathname === link.link ? "bg-[#49279A]" : ""
              }`}
              onClick={link.onClick}
            >
              {link.icon ? (
                <img
                  src={link.icon}
                  alt={link.name}
                  className="h-4 w-5 object-contain"
                />
              ) : (
                <span>{link.icon}</span>
              )}
              <span className="ml-1 font-[Barlow] font-normal text-[16px]">
                {link.name}
              </span>
            </Link>
          ))}
          <div className="text-sm lg:hidden block">
            <p className="h-12 w-12 rounded-full bg-[#183584] flex justify-center items-center">
              <img
                src={Images.notification}
                alt="logo"
                className="h-6 w-6 object-contain"
              />
            </p>
          </div>
        </div>
        <div className="text-sm lg:block hidden">
          <p className="h-12 w-12 rounded-full bg-[#183584] flex justify-center items-center">
            <img
              src={Images.notification}
              alt="logo"
              className="h-6 w-6 object-contain"
            />
          </p>
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
              <button
                className="px-16 bg-[#26164B] py-4 text-lg font-medium font-[Barlow] rounded-lg"
                onClick={() => handleModalClose()}
              >
                Cancel
              </button>
              <button
                className="px-16 bg-[#016BE6] py-4 text-lg font-medium font-[Barlow] rounded-lg"
                onClick={() => action()}
              >
                Logout
              </button>
            </div>
          </div>
        </CustomModal>
      </div>
    </nav>
  );
};

export { Header };
