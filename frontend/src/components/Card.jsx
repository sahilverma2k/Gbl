import React from "react";

const Card = ({ icon, text = "", cardStyle }) => {
  return (
    <div className="">
      <button type="button" class={cardStyle}>
        {icon}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Card;
