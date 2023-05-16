import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const NavBoxes = ({
  title,
  counts,
  ratio,
  duration,
  createBlog,
  createTitle,
  onClick,
}) => {
  return (
    <div
      className={` w-full bg-transparent rounded-md cursor-pointer lg:max-w-[224px] max-w-full flex ${
        createBlog && "justify-center items-center"
      }  my-0 sm:my-6 justify-center pl-5 flex-col`}
      style={{ border: "2px solid #311A67" }}
      onClick={onClick}
    >
      <div className="py-6">
        <p className="text-textWhite text-base font-normal font-[Barlow]">
          {title}
        </p>
        <div className="flex items-center gap-3">
          <h2 className="text-textWhite text-3xl font-bold font-[Barlow]">
            {counts}
          </h2>
          {createBlog ? (
            <Link
              to="/create-blog/new"
              className="flex flex-col justify-center items-center gap-2 mr-8"
            >
              <span className="cursor-pointer">
                <GoPlus size={20} color="white" fontWeight="bold" />
              </span>
              <p className="text-textWhite">{createTitle}</p>
            </Link>
          ) : (
            <p className="bg-primaryYellow w-12 h-6 flex justify-center items-center text-base font-medium rounded-2xl">
              {ratio}
              <RxArrowTopRight />
            </p>
          )}
        </div>
        <p className="text-textWhite text-sm font-semibold font-[Barlow]">
          {duration}
        </p>
      </div>
    </div>
  );
};

export { NavBoxes };
