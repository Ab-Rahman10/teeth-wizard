import React from "react";
import { useLoaderData } from "react-router-dom";
import Feedback from "./Feedback";

const AllFeedbacks = () => {
  const { feedbackData } = useLoaderData();

  return (
    <div className="mt-10">
      <div className="text-center">
        <h2 className="text-xl font-bold">Your Feedback Matters</h2>
        <p className="text-gray-500">
          We value your opinion! Please share your thoughts and suggestions to
          help us improve our services and provide <br /> you with the best
          experience. Your feedback helps us grow and serve you better.
        </p>
      </div>
      <hr className="my-5" />
      <div className="grid grid-cols-4 gap-5">
        {feedbackData.map((singleFeedback) => (
          <Feedback
            key={singleFeedback.title}
            singleFeedback={singleFeedback}
          ></Feedback>
        ))}
      </div>
    </div>
  );
};

export default AllFeedbacks;
