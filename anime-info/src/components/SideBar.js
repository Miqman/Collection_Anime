import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import { useState } from "react";

export default function SideBar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  function btnHome() {
    localStorage.next = 1;
    navigate(`/`);
  }
  return (
    <>
      <div className="flex h-[60px] justify-between items-center bg-[#EDF1F5]">
        <Link to="#" className="ml-8 text-2xl">
          <FaBars onClick={showSidebar} />
        </Link>
        <div className="overflow-hidden h-5 w-14 rounded-3xl flex-initial mr-8">
          <img src={"/Mlogo.png"} alt="" className="w-full -mt-3"></img>
        </div>
      </div>
      <nav
        className={
          sidebar
            ? "flex w-[450px] h-screen justify-center fixed top-0 duration-300 left-0 bg-cyan-500"
            : "flex w-[450px] h-screen justify-center fixed duration-700 top-0 left-[-120%] "
        }
      >
        <ul className="w-full" onClick={showSidebar}>
          <li className="w-full h-[60px] flex justify-start items-center bg-cyan-500">
            <Link to="#" className="ml-8 text-2xl">
              <IoMdClose />
            </Link>
          </li>
          <li className="flex justify-start items-center h-[60px] py-2 pl-[16px]">
            <Link
              to="/"
              onClick={btnHome}
              className=" flex items-center px-4 rounded text-white font-bold w-[95%] h-full hover:bg-cyan-400"
            >
              <IoHome className="text-[20px] ml-8" />
              <span className="ml-[16px]">Home</span>
            </Link>
          </li>
          <li className="flex justify-start items-center h-[60px] py-2 pl-[16px]">
            <Link
              to="/"
              onClick={btnHome}
              className=" flex items-center px-4 rounded text-white font-bold w-[95%] h-full hover:bg-cyan-400"
            >
              <MdCollectionsBookmark className="text-[20px] ml-8" />
              <span className="ml-[16px]">Collection</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
