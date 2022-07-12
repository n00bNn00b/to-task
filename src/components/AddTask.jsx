import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddTask = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const taskHandler = (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value;
    // console.log(taskName);
    const url = "http://localhost:5000/tasks";
    if (taskName.length > 0) {
      axios
        .post(url, {
          email,
          taskName,
        })
        .then((res) => console.log("task post:", res))
        .catch((err) => console.log("error:", err));
      toast.success(taskName + " has been added!");
      e.target.reset();
    } else {
      toast.warning("Please input a valid task!");
      //
    }
  };
  return (
    <div className="my-20">
      <form className="flex justify-center" onSubmit={taskHandler}>
        <input
          type="text"
          placeholder="i.e: Learning JavaScript"
          name="taskName"
          id="taskName"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input className="btn btn-primary mx-2" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTask;
