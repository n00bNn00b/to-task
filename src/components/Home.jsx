import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Tasklist from "./Tasklist";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    const url = `http://localhost:5000/tasks/${email}`;
    axios.get(url).then((res) => setTasks(res.data));
  }, [email]);
  console.log(tasks);

  return (
    <div className="my-20">
      <div>
        <h1 className="text-center text-2xl font-bold my-2">
          {tasks.length > 0 ? "Task List" : "No Task Added Yet!"}
        </h1>
        {tasks.map((task) => (
          <Tasklist key={task._id} task={task} />
        ))}
        {tasks.length > 0 && (
          <button className="btn btn-primary my-5 flex mx-auto">
            ADD Task
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
