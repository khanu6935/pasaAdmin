import React from "react";

const NotificationList = ({ title, action, view, icon }) => {
  return (
    <div className="container mx-auto flex justify-between border-b lg:w-[95%] w-[90%]  lg:mx-6 mx-0 border-[#311A67] h-14 items-center">
      <p className="lg:pl-5 pl-2 text-textWhite text-base font-medium font-[Barlow]">
        {title} <span className="text-[#007BC7]">{action}.</span>{" "}
        <span className="text-[#FFB800]">{view}</span>
      </p>
      <img src={icon} alt="sms" className="h-6 w-6 object-contain" />
    </div>
  );
};

export { NotificationList };
