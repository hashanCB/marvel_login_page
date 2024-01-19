import React from "react";
import Imagesvg from "./SVG/Imagesvg";

import InputBox from "./InputBox";

const Form = () => {
  return (
    <div className=" flex flex-col max-w-[580px] px-[25px] sm:px-[70px] sm:pt-[50px] py-[30px] bg-white justify-center rounded-2xl">
      <div className="flex pt-[3px] ">
        <label className=" text-[25px] font-bold  tracking-wider ">
          {" "}
          Enter you email
        </label>
      </div>
      <br />
      <div className="mt-[-9px]">
        <label className=" text-[14px] ">
          {" "}
          Log into your Marvel account. If you don't have one, you will be
          prompted to create one.
        </label>
      </div>
      <br />
      <div className=" w-full  mb-3  ">
        <InputBox />
      </div>
      <div className=" w-full pb-4 border-b-2 ">
        <button className=" bg-[#E62429] hover:bg-[#CA2020] rounded-3xl  w-full mt-4 px-5 py-3 text-white font-semibold">
          Continue
        </button>
      </div>
      <div className="mt-5">
        <label className=" text-[#5f6166] font-semibold">
          Marvel is part of The Walt Disney Family of Companies.{" "}
        </label>
        <br />
        <label className=" text-[#5f6166] text-[12px] ">
          {" "}
          This email and password lets you seamlessly log into services and
          experiences across The Walt Disney Family of Companies, such as ESPN,
          Walt Disney World, Marvel,{" "}
          <span className=" underline">and more.</span>
        </label>
        <br /> <br />
        <p className=" text-[#5f6166] text-[12px] ">
          If you’ve used your email with one of our services, please use it here
          too.
        </p>
      </div>
      <div>
        <br></br>
        <div className=" flex justify-center pb-6 opacity-50 ">
          <Imagesvg />
        </div>
      </div>
    </div>
  );
};

export default Form;
