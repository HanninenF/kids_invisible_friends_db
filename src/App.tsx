import React, { useState } from "react";
import "./App.scss";
import CardForm from "./container/CardForm";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <div className="sidebar">
        <button className="btn">Lägg till barn–knapp</button>
        <button className="btn">Lägg till osynlig vän–knapp</button>

        <div className="CardForm-container">
          <CardForm />
        </div>

        <button className="btn add">Add Barn</button>
      </div>

      <div className="card-container">
        CARD CONTAINER
      </div>
    </div>
  );
};

export default App;
