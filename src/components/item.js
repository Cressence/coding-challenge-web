// import React from "react";

import "./item.css";

const Item = () => {
  return (
    <div className="item-container">
      <div className="event-container">
        <div className="left-section">
          <p className="date">
            11<span className="date-superscript">TH</span> NOV
          </p>
        </div>
        <div className="middle-section">
          <p className="sub-title">Second that the development</p>
          <p className="text-body description">
            Fruitcake gummi bears gingerbread tootsie roll cotton candy lollipop
            bonbon pastry lemon drops. Jelly beans sweet halvah. Jelly-o tart
            cookie pastry cotton candy tootsie roll. Tiramisu candy canes halvah
            pie macaroon sweet roll sweet roll.
          </p>
        </div>
        <div className="right-section">
          <p className="sub-title time">16:00 - 19:00</p>
          <p className="text-body">
            Fruitcake gummi bears gingerbread tootsie roll cotton candy
          </p>
        </div>
      </div>
      <p className="event-details">+ Event Details</p>
    </div>
  );
};

export default Item;
