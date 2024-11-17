import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, title, image, price, description } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:scale-105 hover:duration-500">
        <figure className="w-full h-[230px]">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">$ {price}</div>
          </h2>
          <p title={description}>{description.slice(0, 80)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
              <button className="py-1 px-4 rounded-md bg-violet-600 text-white mt-4">
                Checkout more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
