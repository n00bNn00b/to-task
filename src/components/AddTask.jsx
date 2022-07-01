import React from "react";

const AddTask = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTask;
