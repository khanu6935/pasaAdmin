import React, { useState } from "react";
import { Header } from "../../../components";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

function Setting() {
  const TextStyle = "text-textWhite font-medium text-base font-[Barlow] ";
  const DivStyle =
    "border-b border-[#311A67] h-16 flex justify-between items-center px-4";

  return (
    <div className="bg-primary">
      <Header />
      <div className="bg-primary lg:px-10 px-0 py-10 h-screen">
        <h3 className="text-textWhite px-6 font-semibold font-[Barlow] text-2xl ">
          Setting
        </h3>
        <div className="border-2 border-[#311A67] rounded-md mt-8">
          <div className="border-b-2 border-[#311A67] h-16 flex items-center px-4">
            <p className="text-textWhite font-medium font-[Barlow] text-xl">
              Security
            </p>
          </div>
          <div className={DivStyle}>
            <p className={TextStyle}>Change Password</p>
            <p>
              <HiOutlineLockClosed size={26} color="white" />
            </p>
          </div>
          <div className={DivStyle}>
            <p className={TextStyle}>Change Email/Username</p>
            <p>
              <FiUser size={26} color="white" />
            </p>
          </div>
          <div className={DivStyle}>
            <p className={TextStyle}>Change Phone No</p>
            <p>
              <BsTelephone size={26} color="white" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Setting };
