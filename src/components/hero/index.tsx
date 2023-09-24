import type { FC } from "react";
// background: linear-gradient(98deg, rgba(245, 245, 245, 0.50) -23.46%, rgba(245, 245, 245, 0.50) 107.51%);
import React from "react";
import { Carousel } from "antd";
import "./style.css";
import Slide from "../slide";
import type { SlideProps } from "../../@types/slide";
// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "450px",
//   width: "100%",
//   color: "red",
//   lineHeight: "160px",
//   textAlign: "center",
// };

const slideProps: SlideProps[] = [
  {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    heroTitle: "LET'S MAKE A BETTER",
    paragraph:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    btnText: "Shop now",
  },
  {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
    heroTitle: "LET'S LIVE IN A BETTER",
    paragraph:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",

    btnText: "Let's start",
  },
  {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
    heroTitle: "LET'S OBSERVE A BETTER",
    paragraph:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    btnText: "Get loan",
  },
];

const Hero: FC = () => {
  const onChange = (currentSlide: number): void => {
    console.log(currentSlide);
  };
  return (
    <Carousel
      autoplay
      className="flex m-auto w-[80%] h-[450px]  bg-[rgba(245,245,245,0.50)]"
      afterChange={onChange}
    >
      {slideProps.map((slide, index) => (
        <div key={index}>
          <Slide
            imgUrl={slide.imgUrl}
            heroTitle={slide.heroTitle}
            paragraph={slide.paragraph}
            btnText={slide.btnText}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
