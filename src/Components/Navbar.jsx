import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center py-3">
      <div>
        <img className="w-10" src={Logo} />
      </div>
      <div className="flex gap-7 text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 duration-300"
              : "hover:text-yellow-300 duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/allTreatments"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 duration-300"
              : "hover:text-yellow-300 duration-300"
          }
        >
          All Treatments
        </NavLink>
        <NavLink
          to="/myAppointments"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 duration-300"
              : "hover:text-yellow-300 duration-300"
          }
        >
          My Appointments
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 duration-300"
              : "hover:text-yellow-300 duration-300"
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <button className="py-1 px-4 rounded-md bg-violet-600 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
