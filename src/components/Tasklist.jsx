import axios from "axios";
import React, { useState } from "react";

const Tasklist = ({ task }) => {
  const [clicked, setClicked] = useState(false);
  const [complete, setComplete] = useState(false);

  const { taskName, _id } = task;
  const viewHandler = () => {
    setClicked(true);
  };
  const completeHandler = () => {
    const url = `http://localhost:5000/tasks/${_id}`;
    console.log(url);
    axios.delete(url, { data: taskName }).then((res) => console.log(res));
    // setComplete(true);
  };
  return (
    <div>
      {!complete && (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-2">
          <div className="card-body">
            <h2 className="card-title">
              <input
                type="radio"
                name="radio"
                className="radio radio-primary"
                onChange={viewHandler}
              />
              <span key={_id}>{taskName}</span>
            </h2>

            {clicked && (
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={completeHandler}>
                  Mark as Complete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasklist;
