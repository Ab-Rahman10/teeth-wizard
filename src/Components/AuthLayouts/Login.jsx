import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-10/12 mx-auto flex justify-center">
      <div className="card bg-base-100 shrink-0 shadow-2xl mt-16 w-96">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="py-1 px-4 rounded-md bg-violet-600 text-white"
            >
              Login
            </button>
          </div>
          <div className="text-center ">
            Don't have an account? Please
            <Link className="underline text-red-500 ml-1" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
