import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  document.title = "To Task - Login";

  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return navigate("/");
  }

  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="card w-80 bg-base-100 shadow-2xl mx-auto my-20">
      <div className="card-body w-full">
        <p className="text-red-500 font-bold">
          Still under development! Some features may not work.
        </p>
        <div className="w-full flex mx-auto">
          <form className="my-10" onSubmit={loginHandler}>
            <h2 className="text-center font-bold text-2xl">Login</h2>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="i.e.: email@email.com"
                name="email"
                className="input input-bordered w-64"
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
                className="input my-3 input-bordered w-64"
              />
              <label className="label">
                <span className="label-text-alt text-red-600 font-bold">
                  Error text
                </span>
              </label>
              <p className="my-3">
                Do not have an Account?{" "}
                <Link className="mx-1 text-secondary font-bold" to="/signup">
                  Signup
                </Link>{" "}
              </p>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary flex mx-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
