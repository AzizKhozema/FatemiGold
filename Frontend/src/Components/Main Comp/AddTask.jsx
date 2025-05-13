import { useState } from "react";

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

  const [tasks, setTasks] = useState([]);

  const handleAdd = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };
  // handle change function for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit function for only from submiting the task to saving it in usestate(tasks)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.title.trim() === "") {
      alert("Please enter a title for the task.");
      return;
    }

    const fulltask = {
      ...task,
      id: Date.now(),
      timeAdded: new Date().toLocaleTimeString(),
      dateAdded: new Date().toLocaleDateString(),
    };

    handleAdd(fulltask);

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
    });
    onHide();
  };

  return (
    <>
      <div
        onClick={onHide}
        className="absolute w-screen h-screen  backdrop-blur-xs top-0 left-0"
      ></div>
      <div className="z-1 absolute w-150 h-100 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-4xl bg-red-400">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
          <input
            name="title"
            type="text"
            value={task.title}
            placeholder="Title"
            required={true}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={task.description}
            placeholder="Additional Input"
            onChange={handleChange}
          />
          <input
            type="time"
            name="reminderTime"
            value={task.reminderTime}
            placeholder="Reminder Time"
            onChange={handleChange}
          />
          <input
            type="date"
            name="reminderDate"
            value={task.reminderDate}
            placeholder="Reminder Date"
            onChange={handleChange}
          />
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="none">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
