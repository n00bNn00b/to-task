import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";
import Login from "./Login";
import Tasklist from "./Tasklist";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;
  document.title = "To Task - Home";

  useEffect(() => {
    const url = `https://to-task.herokuapp.com/tasks/${email}`;
    axios.get(url).then((res) => setTasks(res.data));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [email]);
  // console.log(tasks);

  return (
    <div className="my-20 w-full">
      {user ? (
        <main>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <div>
              <h1 className="text-center text-2xl font-bold my-2">
                {tasks.length > 0 ? "My Task List" : "No Task Added Yet!"}
              </h1>

              {tasks.map((task, index) => (
                <Tasklist key={task._id} task={task} index={index} />
              ))}
              {tasks.length > 0 && (
                <Link to="/add">
                  <button className="btn btn-primary my-5 flex mx-auto">
                    Add More Task
                  </button>
                </Link>
              )}
            </div>
          )}
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
