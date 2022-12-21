import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2">
            Dashboard anything. Observe everything.
          </h1>
          <p className="text-[#00df9a] font-bold md:text-3xl sm:text-3xl py-4 text-2xl">
            Operational dashboards for your data
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat
            massa, ornare in nisi non, efficitur condimentum ante. Nulla sed
            efficitur libero. Nullam at facilisis elit. Vivamus vel enim et
            justo aliquam aliquet. Donec ut ipsum sit amet nunc tincidunt
            porttitor. Maecenas euismod ultrices velit nec molestie. Cras
            placerat vitae turpis sed interdum. Nullam placerat sodales
            consectetur.
          </p>

          <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
