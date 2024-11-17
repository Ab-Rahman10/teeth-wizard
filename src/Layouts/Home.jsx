import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/services";
import { useLoaderData } from "react-router-dom";
import AllFeedbacks from "../Components/AllFeedbacks";

const Home = () => {
  const servicesData = useLoaderData();

  return (
    <div className="w-10/12 mx-auto">
      <Banner></Banner>
      <Services servicesData={servicesData}></Services>
      <AllFeedbacks></AllFeedbacks>
    </div>
  );
};

export default Home;
