import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ash from "../assets/ashProfile-Photoroom.png";

const Home = () => {
  // State to track which button is active
  const [activeButton, setActiveButton] = useState(null);

  // Handle button click
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Define button data
  const buttons = ["Home", "About Me", "Projects", "Contact"];

  return (
    <div className="p-4">
      <nav className="flex flex-wrap items-center justify-between p-4 md:p-6">
        <div className="mr-auto ml-4">
          <h1 className="text-[#7562E0] font-bold text-2xl md:text-3xl">Aishwarya Patni</h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto">
          {buttons.map((button) => (
            <div key={button} className="mr-4 text-white font-bold text-lg">
              <button
                className={`hover:text-[#7562E0] ${activeButton === button ? "text-[#7562E0]" : "text-white"}`}
                onClick={() => handleClick(button)}
              >
                {button}
              </button>
            </div>
          ))}
        </div>
      </nav>

      <div className="firstDiv text-white flex flex-col md:flex-row justify-center items-center p-4 md:p-[5%] mt-10">
        <div className="p-4 md:p-8 text-center md:text-left">
          <p className="text-[20px] md:text-[24px] font-bold mb-2">Hello, I'm</p>
          <h1 className="text-[28px] md:text-[32px] font-bold mb-2">Aishwarya M. Patni</h1>
          <p className="font-bold text-base md:text-lg">
            Fullstack developer & UI Designer. I craft seamless web experiences for end-users.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 font-bold justify-center md:justify-start">
            <div
              className={`flex items-center justify-center border-2 border-[#7562E0] p-2 rounded-xl cursor-pointer 
              ${activeButton === "About Me" ? "bg-[#7562E0] text-white" : "bg-transparent text-white"}`}
              onClick={() => handleClick("About Me")}
            >
              <button className="mr-2">About Me</button>
              <FaUser
                className={`text-lg  ${activeButton === "About Me" ? "bg-[#7562E0] text-[white]" : ""}`}
              />
            </div>
            <div
              className={`flex items-center justify-center gap-2 border-2 border-[#7562E0] p-2 rounded-xl cursor-pointer 
              ${activeButton === "Projects" ? "bg-[#7562E0] text-white" : "bg-transparent text-white"}`}
              onClick={() => handleClick("Projects")}
            >
              <button>Projects</button>
              <MdOutlineRemoveRedEye
                className={`text-xl   ${activeButton === "Projects" ? "bg-[#7562e0] text-[white]" : ""}`}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#7562E0] rounded-full mt-6 md:mt-0">
          <img
            src={ash}
            alt="Profile"
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full object-cover bg-[#7562E0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
