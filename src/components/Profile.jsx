import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "./Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  //   console.log(user);
  const userName = user?.displayName;
  const userEmail = user?.email;
  document.title = "To Task - Profile";
  return (
    <div className="card flex mx-auto w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/192/192/people"
          alt="profilephoto"
          className="rounded-xl"
          accept="image/*"
        />
      </figure>

      <label className="flex justify-center items-center mt-5">
        <input
          className=" border border-primary border-1 rounded-md "
          type="file"
          name="profilePic"
          id="profilePic"
        />
      </label>

      <div className="card-body">
        <h2 className="font-bold">Name: {userName} </h2>
        <p className="font-bold">Email: {userEmail} </p>
        <div className="card-actions flex mx-auto mt-3">
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
