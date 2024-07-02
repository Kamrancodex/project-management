import { useRef, useState } from "react";
import Modal from "./Modal";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops ... you forgot to enter the task
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="flex items-center gsp-4">
        <input
          value={enteredTask}
          onChange={handleChange}
          type="text"
          className="bg-stone-200 w-64 px-2 py-1 rounded-sm"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTask;
