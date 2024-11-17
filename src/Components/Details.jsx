import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
  const detailsData = useLoaderData();
  const { id, title, image, price, description } = detailsData;

  return (
    <div className="w-6/12 mx-auto mt-6">
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
            <div className="flex justify-center">
              <p className="py-1 px-4 rounded-md bg-[#FF52D9] text-white w-36">
                Cost: ${price}
              </p>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="py-1 px-4 rounded-md bg-violet-600 text-white mt-7"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
