import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = ({ servicesData }) => {
  const serviceData = servicesData.serviceData;

  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl font-bold">Our Dental Services</h2>
        <p className="text-gray-500">
          Discover a wide range of dental care solutions designed to meet your
          needs. From preventive care to cosmetic dentistry, <br /> we’re here
          to provide you with exceptional service and a healthier, brighter
          smile.
        </p>
      </div>
      <hr className="my-5" />
      <div className="grid grid-cols-4 gap-5">
        {serviceData.slice(0, 4).map((service) => (
          <ServiceCard key={service.title} service={service}></ServiceCard>
        ))}
      </div>
      <button className="py-1 px-4 rounded-md bg-violet-600 text-white mt-8 mx-auto block">
        <Link to="/allTreatments">Show more</Link>
      </button>
    </div>
  );
};

export default Services;
