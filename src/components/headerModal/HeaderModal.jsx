import React from "react";
import { Images } from "../../assets";

function HeaderModal({ title, para }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={Images.pasa} alt="pasa" className="w-32 h-24 object-contain" />
      <h3 className="lg:text-[32px] md:text-[28px] text-2xl py-3 text-textWhite font-bold font-[Barlow] text-center">
        {title}
      </h3>
      <p className="lg:text-[18px] md:text-[15px] text-[14px] font-medium font-[Barlow] text-center">
        {para}
      </p>
    </div>
  );
}

export { HeaderModal };
