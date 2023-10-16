import React from "react";
import type { FC } from "react";
import type { SlideProps } from "../../../@types/slide";
const TrendsCard: FC<SlideProps> = ({
  imgUrl,
  heroTitle,
  paragraph,
  btnText,
}) => {
  return (
    <div className="h-[250px] flex-1  flex  p-7 justify-between">
      <div>
        <img src={imgUrl} alt="trends banner" />
      </div>
      <div className="flex flex-col items-end gap-4">
        <h2 className="text-right text-[20px] font-extrabold uppercase">
          {heroTitle}
        </h2>
        <p className="text-right text-[12px]  text-gray-400">{paragraph}</p>
        <button
          className="
         rounded-md
         
       text-white 
       w-[140px] h-[40px]
       text-[14px]
       font-[400]
       leading-[20px]
       
       bg-[#46A358]
       justify-center
       items-center
       mt-auto"
        >
          Find more &rarr;
        </button>
      </div>
    </div>
  );
};

export default TrendsCard;
