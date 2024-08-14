import React from "react";
import icon from "../assets/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] flex flex-col justify-center items-center">
      <img className="h-[80px] w-[80px]" src={icon} alt="checkmark" />
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Thank you!
      </h1>
      <p className="text-neutral-coolGray mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum repudiandae eos voluptates quibusdam, accusamus, corrupti odio odit labore modi architecto aspernatur mollitia sequi, repellendus quidem expedita? Optio, nisi voluptatum?
      </p>
    </div>
  );
};

export default ThankYou;
