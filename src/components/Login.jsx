import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="card w-full bg-base-100 shadow-2xl mx-auto my-20">
      <div className="card-body w-full">
        <div className="w-80 flex mx-auto">
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
                Dont't have an Account?{" "}
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
