import React from "react";
import { useState } from "react";
import Nav from "./Components/Nav Copm/Nav";
import MainScreen from "./Components/Main Comp/MainScreen";

const App = () => {

  const [transtasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  

  return (
    <>
      <div className="relative flex flex-row h-screen w-screen">
        <Nav transtasks={transtasks} />
        <MainScreen transtasks={transtasks} />


      
        
      </div>
    </>
  );
};

export default App;
