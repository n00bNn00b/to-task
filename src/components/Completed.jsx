import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "./Loading";

const Completed = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const email = user?.email;
  useEffect(() => {
    axios
      .get(`https://to-task.herokuapp.com/tasks/${email}/completed`)
      .then((res) => setTasks(res.data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [email]);

  return (
    <div className="my-20">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div>
          <h1 className="text-center font-bold text-2xl text-green-700">
            Completed Task List
          </h1>
          <div>
            {tasks.map((task) => (
              <div
                key={task._id}
                className="card w-96 bg-base-100 shadow-xl mx-auto my-2"
              >
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
