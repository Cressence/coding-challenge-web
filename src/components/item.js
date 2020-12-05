// import React from "react";

import "./item.css";

const Item = (props) => {
  const event = props.data;
  return (
    <div className="item-container">
      <div className="event-container">
        <div className="left-section">
          <p className="date">
            {event.day}
            <span className="date-superscript">TH</span> {event.month}
          </p>
        </div>
        <div className="middle-section">
          <p className="sub-title">{event.title}</p>
          <p className="text-body description">{event.description}</p>
        </div>
        <div className="right-section">
          <p className="time-tile">
            <span className="time">{event.time}</span>
          </p>
          <p className="text-body location">{event.location}</p>
        </div>
      </div>
      <p className="event-details">+ Event Details</p>
    </div>
  );
};

export default Item;
