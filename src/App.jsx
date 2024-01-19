import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./App.css";
import logo from "./assets/marvel-logo.svg";
import Form from "./components/Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" relative bg-herobg min-h-screen bg-cover bg-center">
        <div className=" flex justify-end">
          <div className="m-6 cursor-pointer absolute bg-white/90 text-black w-8 h-8 rounded-full items-center flex justify-center text-[30px] ">
            <IoMdClose />
          </div>
        </div>

        <div className="flex  flex-col justify-center items-center">
          <div className=" w-[130px] h-[50px] mt-5 ss:mt-[45px] ss:w-[140px]  ">
            <img src={logo} alt="marval logo" />
          </div>

          <div className="flex  mt-6 mx-[30px]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
