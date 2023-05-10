import React from "react";
import { MdEmail } from "react-icons/md";

function InputFeild({ placeholder, type, onChange, value }) {
  return (
    <div className="relative my-2">
      <span className="absolute left-3 top-4">
        <MdEmail size={28} color="#016BE6" />
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className=" w-full p-4 rounded-lg outline-0 text-white bg-secondry pl-12"
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
  ...props
}) {
  return (
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
  );
}

function TextAreaWithCount({
  placeholder,
  type,
  onChange,
  value,
  maxLength,
  inputClass,
  ...props
}) {
  return (
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
  );
}

export { InputFeild, InputFieldWithCount, TextAreaWithCount };
