import React from "react";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function InputFeild({ placeholder, type, onChange, value, showIcon }) {
  return (
    <div className="relative my-2">
      {showIcon && (
        <span className="absolute left-3 top-4">
          <MdEmail size={28} color="#016BE6" />
        </span>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-4 rounded-lg text-lg font-[Barlow] font-normal outline-0 text-white bg-secondry pl-12"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

function InputFieldWithCount({
  placeholder,
  type,
  onChange,
  value,
  maxLength,
  inputClass,
  error,
  hasError,

  ...props
}) {
  return (
    <>
      <div className="relative my-2 flex bg-secondry overflow-hidden rounded-2xl items-center px-4 font-[Barlow]">
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full p-4 rounded-2xl outline-0 text-white font-normal bg-secondry pl-12 ${inputClass}`}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          {...props}
        />
        <span className="text-[#FFB800] opacity-80">
          {value?.length ?? 0}/{maxLength}
        </span>
      </div>
      {hasError && (
        <span className="text-white ml-2 my-2 bg-red-400 px-2 py-1 rounded-sm">
          {error}
        </span>
      )}
    </>
  );
}

function TextAreaWithCount({
  placeholder,
  type,
  onChange,
  value,
  maxLength,
  inputClass,
  error,
  hasError,

  ...props
}) {
  return (
    <>
      <div className="relative my-2 flex bg-secondry overflow-hidden rounded-2xl items-center px-4 font-[Barlow]">
        <textarea
          placeholder={placeholder}
          className={`w-full p-4 rounded-2xl outline-0 text-white font-normal bg-secondry pl-12 ${inputClass}`}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          {...props}
          style={{ resize: "none" }}
        />
        <span className="text-[#FFB800] opacity-80">
          {value?.length ?? 0}/{maxLength}
        </span>
      </div>
      {hasError && (
        <span className="text-white ml-2 my-5 bg-red-400 px-2 py-1 rounded-sm">
          {error}
        </span>
      )}
    </>
  );
}

function InputPassword({
  password,
  showPassword,
  handlePasswordChange,
  placeholder,
  handleShow,
  signin,
  ...props
}) {
  return (
    <div className="relative  flex justify-center my-3">
      <span
        className={`absolute ${
          signin ? "lg:left-4 md:left-2" : "lg:left-8"
        }  md:left-7 left-3 top-6`}
      >
        <AiFillLock size={28} color="#016BE6" />
      </span>
      <button
        onClick={(e) => handleShow(e)}
        className={`absolute ${
          signin
            ? "lg:right-6 md:right-5 right-2 top-8"
            : "lg:right-16 md:right-12 right-5 top-8"
        }`}
      >
        {showPassword ? (
          <BsEyeFill height={18} width={20} color="white" />
        ) : (
          <BsFillEyeSlashFill height={18} width={20} color="white" />
        )}
      </button>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className=" lg:w-[478px] w-[560px] h-[75px] text-white text-lg font-[Barlow] font-normal  p-4 rounded-lg bg-secondry lg:pl-16 pl-12 outline-0"
        value={password}
        onChange={(e) => handlePasswordChange(e)}
        {...props}
      />
    </div>
  );
}

export { InputFeild, InputFieldWithCount, TextAreaWithCount, InputPassword };
