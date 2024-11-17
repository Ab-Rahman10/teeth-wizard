import React from "react";

const Feedback = ({ singleFeedback }) => {
  const { title, image, feedback, rating } = singleFeedback;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="p-5">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10">
              <img
                className="w-full h-full rounded-full object-cover"
                src={image}
              />
            </div>
            <h2 className="font-semibold flex-grow">{title}</h2>
            <span className="text-xs text-right">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <p title={feedback} className="mt-3">
            {feedback.slice(0, 80)}...
          </p>
          <div className="flex items-center gap-2 mt-7 justify-end">
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <div className="">
              <button className="py-1 px-4 rounded-md bg-violet-600 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
