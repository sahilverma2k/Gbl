import React from "react";

const Card = ({ icon, text = "", cardStyle }) => {
  return (
    <div className="w-full">
      <button
        type="button"
        className={`${cardStyle} 
          flex flex-col items-center justify-center 
          border focus:outline-none font-semibold
          transition-all duration-300 ease-linear 
          rounded-lg text-xl w-full px-5 py-2.5 text-center aspect-[15/5]
          `}
      >
        <p>{icon}</p>
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Card;
