import React from 'react'
import { useState, useEffect } from 'react'

const AddTask = ({ onHide }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
    priority: "none",
    timeAdded: "",
    dateAdded: "",
    reminder: false,
    reminderTime: "",
  });

  const [tasks, setTasks] = useState(() => {
    const saved=localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [task]);
  
  const handelChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    const handleSubmit = (e) => {
      e.preventDefault();

      if (task.title.trim() === "") {
        alert("Please enter a title for the task.");
        () => (onHide);
        return;
      }
      
      const fulltask = {
        ...task,
        id: Date.now(),
        timeAdded: new Date().toLocaleTimeString(),
        dateAdded: new Date().toLocaleDateString(),
      };

      
      setTasks(prevTasks => [...prevTasks, fulltask]);
    
      setTask({
        id: "",
        title: "",
        description: "",
        completed: false,
        priority: "none",
        timeAdded: "",
        dateAdded: "",
        reminder: false,
        reminderTime: "",
      }
      
    );
 
    };

  return (
    <>
    
    <div onClick={onHide} className='absolute w-screen h-screen  backdrop-blur-xs top-0 left-0'></div>
    <div className='z-1 absolute w-150 h-100 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-4xl bg-red-400'>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-2 p-4'>
        <input
        name="title"
        type="text"
        value={task.title}
        placeholder="Title"
        required={true} 
        onChange={handelChange}
        />
        <input 
        type="text"
        name="description"
        value={task.description}
        placeholder="Additional Input"
        onChange={handelChange}
        />
        <input
        type="time"
        name="reminderTime"
        value={task.reminderTime}
        placeholder="Reminder Time"
        onChange={handelChange}
        />
        <input
        type="date"
        name="reminderDate"
        value={task.reminderDate}
        placeholder="Reminder Date"
        onChange={handelChange}
        />
        <select
        name="priority"
        value={task.priority}
        onChange={handelChange}
        >
          <option value="none">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className='mt-2 p-2 bg-blue-500 text-white rounded'>Add Task</button>
      </form>
    </div>
    {/* {a  && <TodoList task={fulltask}/>} */}

    
    
    </>
  )
}

export default AddTask