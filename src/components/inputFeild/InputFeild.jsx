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

export { InputFeild };
