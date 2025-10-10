import React, { useState } from "react";
import "./styles/App.scss";
import Modal from "./container/Modal";

const App: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"barn" | "vän" | null>(null);

  const handleToggleForm = (type: "barn" | "vän") => {
    setActiveForm(prev => (prev === type ? null : type));
  };

  const getAddButtonText = () => {
    if (activeForm === "vän") return "Add Osynlig Vän";
    if (activeForm === "barn") return "Add Barn";
    return "Add Barn";
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h1>Barn & Osynliga Vänner</h1>
      </header>

      {/* Main Content */}
      <div className="app-container">
        <div className="sidebar">
          {/* Visa båda knapparna om inget formulär är aktivt */}
          {activeForm === null && (
            <>
              <button className="btn" onClick={() => handleToggleForm("barn")}>
                Lägg till barn–knapp
              </button>
              <button className="btn" onClick={() => handleToggleForm("vän")}>
                Lägg till osynlig vän–knapp
              </button>
            </>
          )}

          {/* Visa endast den aktiva knappen */}
          {activeForm === "barn" && (
            <button className="btn active" onClick={() => handleToggleForm("barn")}>
              Lägg till barn–knapp
            </button>
          )}

          {activeForm === "vän" && (
            <button className="btn active" onClick={() => handleToggleForm("vän")}>
              Lägg till osynlig vän–knapp
            </button>
          )}

          {/* Formulär under knappen */}
          <div className="form-area">
            {activeForm && (
              <div className="Modal-container">
                <Modal type={activeForm} />
              </div>
            )}
          </div>

          {/* Nedersta knappen */}
          <button className="btn add">{getAddButtonText()}</button>
        </div>

        <div className="card-container">CARD CONTAINER</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Barn & Osynliga Vänner — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
