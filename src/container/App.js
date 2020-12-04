import { RiMessageFill } from "react-icons/ri";
import Item from "./../components/item";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="page-body">
        <h3>EVENTS</h3>
        <Item />
        <Item />
      </div>
      <button className="floating-btn">
        <RiMessageFill className="message-icon" />
      </button>
    </div>
  );
};

export default App;
