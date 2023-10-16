import React from "react";
import type { FC } from "react";
import type { BlogCardType } from "../../../@types/blog";
const BlogsCard: FC<BlogCardType> = ({ title, imgUrl, description, date }) => {
  return (
    <div className="flex flex-col flex-1 gap-2 h-[100%] ">
      <div>
        <img src={imgUrl} alt="#" />
      </div>
      <div
        className="flex p-[10px] flex-col
      gap-2 bg-[rgba(245,245,245,0.50)] h-[100%]"
      >
        <p className=" cursor-pointer text-[13px]  text-[#46A358]">{date}</p>
        <h2 className=" text-[18px] font-extrabold ">{title}</h2>
        <p className=" text-[13px]  text-gray-400">{description}</p>
        <button className=" text-[13px] cursor-pointer hover:text-[#46A358]  text-black mb-2 mt-auto self-start">
          Read More &rarr;
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
