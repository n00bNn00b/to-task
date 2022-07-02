import React, { useState } from "react";

const Tasklist = ({ task }) => {
  const [clicked, setClicked] = useState(false);

  const { taskName } = task;
  const viewHandler = () => {
    setClicked(true);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-2">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="radio"
            name="radio"
            className="radio radio-primary"
            onChange={viewHandler}
          />
          <span>{taskName}</span>
        </h2>

        {clicked && (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setClicked(false)}
            >
              Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasklist;
