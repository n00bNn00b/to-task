import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

const Completed = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/completed")
      .then((res) => setTasks(res.data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="my-20">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div>
          <h1 className="text-center font-bold text-2xl text-green-700">
            Completed Task List
          </h1>
          <div className="flex justify-center items-center">
            {tasks.map((task) => (
              <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{task.taskName}</h2>
                  <p>
                    Status:{" "}
                    <span className="text-green-700 font-bold">
                      {task.status}
                    </span>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Completed;
