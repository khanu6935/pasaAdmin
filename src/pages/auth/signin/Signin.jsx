import React from "react";
import { Images } from "../../../assets";
import { MdEmail } from "react-icons/md";
import { Button, InputFeild } from "../../../components";
import { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmial] = useState("");
  const [password, setPaswword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmial(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPaswword(e.target.value);
  };

  const disableButon = email === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin123@gmail.com" && password === "admin123") {
      console.log("email>>>", email);
      console.log("password>>>", password);
      navigate("/home-page");
    } else {
      setError("Please Enter Email and password");
    }
    setEmial("");
    setPaswword("");
  };

  return (
    <>
      <div className="bg-primary  flex min-h-screen relative">
        <div className="w-full flex justify-center container items-center">
          <div className=" flex justify-center">
            <div className="w-[100%] flex flex-col items-center ">
              <form className="w-full lg:px-0 px-5" onSubmit={handleSubmit}>
                <div className=" flex justify-center">
                  <img
                    src={Images.pasa}
                    alt="pasa"
                    className="h-24 w-32 object-contain flex justify-center"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-textWhite text-center flex justify-center items-center gap-2 py-4 font-bold lg:text-4xl text-3xl font-[Barlow]">
                    WELCOME ADMIN
                    <img
                      src={Images.handshake}
                      alt="hand"
                      className="h-10 w-10 object-contain"
                    />
                  </h3>
                  <p className="text-textWhite pb-4  font-[Barlow] text-center text-sm font-normal">
                    Login to continue to dashboard
                  </p>
                </div>

                <InputFeild
                  placeholder="Enter email"
                  type="text"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                />
                <div className="relative my-2">
                  <span className="absolute left-3 top-4">
                    <AiFillLock size={28} color="#016BE6" />
                  </span>
                  <button
                    onClick={(e) => handleShow(e)}
                    className="absolute right-4 top-4"
                  >
                    {showPassword ? (
                      <BsEyeFill size={24} color="white" />
                    ) : (
                      <BsFillEyeSlashFill size={24} color="white" />
                    )}
                  </button>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className=" w-full text-white text-lg font-[Barlow] font-normal  p-4 rounded-lg bg-secondry pl-12 outline-0"
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                  />
                </div>

                <div className="flex justify-end">
                  <p className="text-[#FFB800] font-[Barlow]">
                    Forget Password
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    disabled={disableButon}
                    type="submit"
                    className={`${
                      disableButon
                        ? "bg-secondry text-[#535E89]"
                        : "bg-[#016BE6] text-textWhite"
                    } w-full py-4 rounded-md  font-medium font-[Barlow]`}
                  >
                    Login
                  </button>
                  <p className="text-[red]">{error}</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <img
          src={Images.diamonds}
          alt="diamonds"
          className="lg:[16rem] lg:w-[16rem] md:h-[15rem] md-w-[15rem] h-[10.5rem] w-[10.5rem]   absolute bottom-0 right-0  object-contain"
        />
      </div>
    </>
  );
}

export { Signin };
