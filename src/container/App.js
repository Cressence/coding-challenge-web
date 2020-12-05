import { RiMessageFill } from "react-icons/ri";
import Item from "./../components/item";

import { events } from "./../data/data";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="page-body">
        <h3>EVENTS</h3>
        {events.map((event, index) => {
          return <Item data={event} key={index} />;
        })}
      </div>
      <button className="floating-btn">
        <RiMessageFill className="message-icon" />
      </button>
    </div>
  );
};

export default App;
