import type { FC } from "react";
import "./style.css";
import type { SlideProps } from "../../@types/slide";

const Slide: FC<SlideProps> = (props) => {
  console.log(props);

  return (
    <div className="grid grid-cols-[60%_40%] w-[100%] h-[450px] ">
      <div className="flex flex-col gap-3 px-[43px] py-[68px]">
        <div className="small-title">Welcome to greenshop</div>
        <h1 className="hero-title">
          {props.heroTitle} &nbsp;
          <span className="text-[#46A358]">planet</span>
        </h1>
        <p className="hero-paragraph">{props.paragraph}</p>
        <button
          className="
         rounded-md
         
       text-white 
       w-[140px] h-[40px]
       text-[16px]
       font-[700]
       leading-[20px]
       uppercase
       bg-[#46A358]
       justify-center
       items-center
       mt-auto"
        >
          {props.btnText}
        </button>
      </div>
      <div className="relative max-h-[450px] max-w-[450px]  flex items-center justify-center align-middle">
        <img
          className="max-w-[100%] object-cover  h-[100%]  absolute top-0 left-0 "
          src={props.imgUrl}
          alt=""
        />
        <img
          className="absolute max-w-[100%] bottom-0 left-0 w-[135px] "
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide;
