import React, { useState } from "react";
import {
  CustomModal,
  Header,
  HeaderModal,
  InputFeild,
  InputPassword,
} from "../../../components";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

function Setting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changeUsername, setChangeUseName] = useState(false);
  const [changePhone, setChangePhone] = useState(false);
  const [password, setPaswword] = useState("");
  const [newPassword, setConfirmNewPaswword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCloseUsernamelOpen = () => {
    setChangeUseName(false);
  };
  const handleClosePhone = () => {
    setChangePhone(false);
  };
  const setNewPaswword = (e) => {
    setConfirmNewPaswword(e.target.value);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (e) => {
    setPaswword(e.target.value);
  };
  const TextStyle =
    "text-textWhite font-medium text-base cursor-pointer hover:underline font-[Barlow] ";
  const DivStyle =
    "border-b border-[#311A67] h-16 flex justify-between items-center px-4";

  console.log("password", password);
  return (
    <div className="bg-primary min-h-screen">
      <div>
        <Header />
      </div>
      <div className="bg-primary lg:px-10 px-0 lg:py-0 py-10 flex-grow flex flex-col">
        <h3 className="text-textWhite px-5 lg:mt-9 mt-20 pb-5 sm:pb-0 lg:px-0  font-semibold text-2xl  font-[Barlow]">
          Setting
        </h3>
        <div className="border-2 border-[#311A67]  rounded-md mt-8">
          <div className="border-b-2 border-[#311A67] h-16 flex items-center px-4">
            <p className="text-textWhite font-medium font-[Barlow] text-xl">
              Security
            </p>
          </div>
          <div className={DivStyle}>
            <p className={TextStyle} onClick={() => setIsModalOpen(true)}>
              Change Password
            </p>
            <p>
              <HiOutlineLockClosed size={26} color="white" />
            </p>
          </div>
          <div className={DivStyle}>
            <p className={TextStyle} onClick={() => setChangeUseName(true)}>
              Change Email/Username
            </p>
            <p>
              <FiUser size={26} color="white" />
            </p>
          </div>
          <div className={DivStyle}>
            <p className={TextStyle} onClick={() => setChangePhone(true)}>
              Change Phone No
            </p>
            <p>
              <BsTelephone size={26} color="white" />
            </p>
          </div>
        </div>
      </div>
      {/* change password modal */}
      <div className="customClass">
        <CustomModal openModal={isModalOpen} closeModal={handleModalClose}>
          <div className="w-full customClass">
            <HeaderModal title=" CHANGE PASSWORD NOW!" />

            <div className="lg:px-10 md:px-3 px-1">
              <form>
                <InputPassword
                  password={password}
                  showPassword={showPassword}
                  handlePasswordChange={handlePasswordChange}
                  handleShow={handleShow}
                  placeholder="Enter Password"
                />
                <InputPassword
                  password={newPassword}
                  showPassword={showPassword}
                  handlePasswordChange={setNewPaswword}
                  handleShow={handleShow}
                  placeholder="New Password"
                />

                <div className="flex justify-end">
                  <p className="text-[#FFB800] font-[Barlow]">
                    Forget Password
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-[#016BE6] text-textWhite
                   w-full py-4 rounded-md  font-medium font-[Barlow]"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </CustomModal>
      </div>
      {/* change Email Username modal */}
      <div>
        <CustomModal
          openModal={changeUsername}
          closeModal={handleCloseUsernamelOpen}
        >
          <HeaderModal
            title="OTP SENT"
            para="An OTP Has been sent on adamsmith@gmail.com for email change. Enter OTP Below to continue"
          />
          <div className="lg:px-20 px-2">
            <form>
              <InputFeild showIcon={false} />
              <div className="flex justify-center">
                <p className="text-[18px] font-[Barlow]">
                  Resend after{" "}
                  <span className="bg-[#FFB800] font-[Barlow] px-2 py-1 text-black rounded-lg text-[18px]">
                    Resend
                  </span>
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#016BE6] text-textWhite px-12
                    py-3 rounded-lg  font-medium font-[Barlow]"
                >
                  Proceed
                </button>
                {/* <p className="text-[red]">{error}</p> */}
              </div>
            </form>
          </div>
        </CustomModal>
      </div>
      {/* change Phone Number modal */}
      <div>
        <CustomModal openModal={changePhone} closeModal={handleClosePhone}>
          <div className="w-full">
            <HeaderModal title="CHANGE PHONE NO NOW!" />
            <div className="lg:px-10 md:px-3 px-1">
              <form>
                <InputFeild placeholder="Enter New Phone no" showIcon={true} />
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-[#016BE6] text-textWhite
                   w-full py-4 rounded-md  font-medium font-[Barlow]"
                  >
                    Change Phone No
                  </button>
                  {/* <p className="text-[red]">{error}</p> */}
                </div>
              </form>
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}

export { Setting };
