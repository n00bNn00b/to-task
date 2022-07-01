import React from "react";

const AddTask = () => {
  const taskHandler = (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value;
    console.log(taskName);
  };
  return (
    <div className="my-20">
      <form className="flex justify-center" onSubmit={taskHandler}>
        <input
          type="text"
          placeholder="i.e: Learning JavaScript"
          name="taskName"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input className="btn btn-primary mx-2" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTask;
