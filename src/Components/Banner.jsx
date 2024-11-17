import dentistImg from "../assets/service.png";

const Banner = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={dentistImg} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Brighten Your Smile with Expert Dental Care
          </h1>
          <p className="py-6">
            Experience top-notch dental services tailored for your comfort and
            care. From routine check-ups to advanced treatments, our dedicated
            team ensures your smile stays healthy and radiant.
          </p>
          <button className="py-1 px-4 rounded-md bg-violet-600 text-white">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
