import React from "react";
import Tasktodo from "./Tasktodo";

const Nav = () => {
  return (
    <>
      
      <div className="flex flex-1 pt-5 mt-2 mb-2 bg-zinc-300 p-2 overflow-hidden flex-col items-center  rounded-r-3xl shadow-amber-300 shadow-2sm">
        <div className="logobar flex flex-row justify-between items-center w-full gap-5">
          <div>   
          <img
            className="h-9 w-40"
            src="src/assets/logo written.png"
            alt=""/>
          </div>            
          <div className="menuicon pr-4">
            <div className="line " id="line2"></div>
            <div className="line" id="line3"></div>
            <div className="line" id="line4"></div>
          </div>
        </div>

        <Tasktodo />
      </div>
    </>
  );
};

export default Nav;
