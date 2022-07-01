import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, errorVerification] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();

  if (error || errorProfile || errorVerification) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || updating || sending) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user?.email}</p>
        <p>Registered User: {user?.displayName}</p>
      </div>
    );
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    await sendEmailVerification();
    // signOut(auth);
    // navigate("/login");
    e.target.reset();
  };
  return (
    <div className="card w-full bg-base-100 shadow-2xl mx-auto my-20">
      <div className="card-body w-full">
        <div className="w-80 flex mx-auto">
          <form className="my-10" onSubmit={signupHandler}>
            <h2 className="text-center font-bold text-2xl">Sign up</h2>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="i.e.: Felicia Herman"
                name="name"
                id="name"
                className="input input-bordered w-80"
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="i.e.: email@email.com"
                name="email"
                id="email"
                className="input input-bordered w-80"
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="input my-3 input-bordered w-80"
              />
              <label className="label">
                <span className="label-text-alt text-red-600 font-bold">
                  Error text
                </span>
              </label>
              <p className="my-3">
                Already have an Account?{" "}
                <Link className="mx-1 text-secondary font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
            <input
              type="submit"
              value="Signup"
              className="btn btn-primary flex mx-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
