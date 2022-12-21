import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 sm:">
          <h1 className="md:text-4xl sm:text-4xl text-3xl font-bold py-4 ">
            Keep up with us.
          </h1>
          <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold sm:grid-col-1 ">
            Product developments and observability innovations.
          </h1>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-black">
              Subscribe
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
