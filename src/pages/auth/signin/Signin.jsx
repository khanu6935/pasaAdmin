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
      <div className="bg-primary h-screen flex justify-center items-center">
        <div className=" lg:w-[40%] w-[100%] flex flex-col items-center ">
          <form className="w-full lg:px-0 px-5" onSubmit={handleSubmit}>
            <div className=" flex justify-center">
              <img
                src={Images.pasa}
                alt="pasa"
                className="h-24 w-32 object-contain flex justify-center"
              />
            </div>
            <h3 className="text-textWhite text-center py-4 font-bold lg:text-5xl text-3xl font-[Barlow]">
              WELCOME ADMIN
            </h3>
            <p className="text-textWhite pb-4  font-[Barlow] text-center text-sm font-normal">
              Login to continue to dashboard
            </p>
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
                className=" w-full text-white p-4 rounded-lg bg-secondry pl-12 outline-0"
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
            </div>

            <div className="flex justify-end">
              <p className="text-[#FFB800] font-[Barlow]">Forget Password</p>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-secondry w-full py-4 rounded-md text-textWhite font-medium font-[Barlow]"
              >
                Login
              </button>
              <p className="text-[red]">{error}</p>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
}

export { Signin };
