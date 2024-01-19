import React from "react";
import image1 from "../../assets/alfis.svg";
import image2 from "../../assets/disney.svg";
import image3 from "../../assets/kleenex-3.svg";
import image4 from "../../assets/paramount-pictures.svg";
import image5 from "../../assets/walt-disney-home-video.svg";
import image6 from "../../assets/walt-disney-records.svg";
import image7 from "../../assets/sunkist-3.svg";
import image8 from "../../assets/boston2.svg";

const Imagesvg = () => {
  return (
    <div className=" flex max-w-[450px]  flex-wrap justify-center items-center ">
      <div className=" flex w-[60px] h-[50px]">
        <img src={image1} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[60px] h-[50px]">
        <img src={image2} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[60px] h-[50px]">
        <img src={image3} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[60px] h-[50px]">
        <img src={image4} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[60px] h-[50px]">
        <img src={image5} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[60px] h-[50px]">
        <img src={image6} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[50px] h-[40px] ">
        <img src={image7} alt="logo1" className="grayscale" />
      </div>

      <div className="flex w-[50px] h-[40px]">
        <img src={image8} alt="logo1" className="grayscale" />
      </div>
    </div>
  );
};

export default Imagesvg;
