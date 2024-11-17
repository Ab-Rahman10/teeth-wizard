import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";

const AllTreatments = () => {
  const serviceData = useLoaderData();

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Our Dental Services</h2>
        <p className="text-gray-500">
          Discover a wide range of dental care solutions designed to meet your
          needs. From preventive care to cosmetic dentistry, <br /> we’re here
          to provide you with exceptional service and a healthier, brighter
          smile.
        </p>
        <hr className="my-5" />
      </div>
      <hr className="my-5" />
      <div className="grid grid-cols-4 gap-5">
        {serviceData.map((service) => (
          <ServiceCard key={service.title} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
