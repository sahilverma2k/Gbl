import React from "react";

const Card = ({ icon, text = "", cardStyle }) => {
  return (
    <button
      type="button"
      className={`${cardStyle} 
        flex flex-col items-center justify-center 
        border focus:outline-none font-semibold
        transition-all duration-300 ease-linear min-h-[7.5rem]
        rounded-lg text-sm md:text-2xl w-full px-2 md:px-5 py-2 md:py-2 text-center aspect-auto md:aspect-[15/5]
      `}
    >
      <p>{icon}</p>
      <p>{text}</p>
    </button>
  );
};

export default Card;
