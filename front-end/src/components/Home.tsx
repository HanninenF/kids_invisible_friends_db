import React, { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import Modal from "./Modal";
import { getData, addBarn, addVan } from "../services/DataService";
import type { Barn, Van, MockDataType, SidebarProps } from "../type/DataType";

// SIDEBAR – inuti samma fil (ingen extra import behövs)

const Sidebar: React.FC<SidebarProps> = ({ onAddBarn, onAddVan, barnLista }) => {
  const { activeForm, setActiveForm } = useFormContext();

  return (
    <aside className="sidebar">
      <button
        className={`btn ${activeForm === "barn" ? "active" : ""}`}
        onClick={() => setActiveForm(activeForm === "barn" ? null : "barn")}
      >
        Lägg till barn–knapp
      </button>

      <button
        className={`btn ${activeForm === "vän" ? "active" : ""}`}
        onClick={() => setActiveForm(activeForm === "vän" ? null : "vän")}
      >
        Lägg till osynlig vän–knapp
      </button>

      {activeForm && (
        <div className="form-area">
          <Modal onAddBarn={onAddBarn} onAddVan={onAddVan} barnLista={barnLista} />
        </div>
      )}
    </aside>
  );
};

// HUVUDKOMPONENTEN
const Home: React.FC = () => {
  const [data, setData] = useState<MockDataType>({ barn: [], vänner: [] });

  useEffect(() => {
    // Hämta mockdata vid start
    void getData().then(setData);
  }, []);

  const handleAddBarn = async (barn: Barn): Promise<void> => {
    await addBarn(barn);
    setData((prev) => ({ ...prev, barn: [...prev.barn, barn] }));
  };

  const handleAddVan = async (vän: Van): Promise<void> => {
    await addVan(vän);
    setData((prev) => ({ ...prev, vänner: [...prev.vänner, vän] }));
  };

  return (
    <div className="page-container">
      <header className="header">
        <span className="word">Barn</span>
        <span className="word">&</span>
        <span className="word">Osynliga</span>
        <span className="word">Vänner</span>
      </header>

      <div className="app-container">
        <Sidebar
          onAddBarn={() => handleAddBarn}
          onAddVan={() => handleAddVan}
          barnLista={data.barn}
        />

        <div className="card-container">
          <div className="list-column">
            <h2>Barn</h2>
            {data.barn.length === 0 ? (
              <p>Inga barn ännu</p>
            ) : (
              data.barn.map((b, i) => (
                <div key={i} className="card">
                  <h3>{b.namn}</h3>
                  <p>Ålder: {b.ålder}</p>
                  <p>Hårfärg: {b.hårfärg}</p>
                  <p>Ögonfärg: {b.ögonfärg}</p>
                  <p>Snutte: {b.snutte}</p>
                  <p>Förmåga: {b.förmåga}</p>
                </div>
              ))
            )}
          </div>

          <div className="list-column">
            <h2>Osynliga vänner</h2>
            {data.vänner.length === 0 ? (
              <p>Inga osynliga vänner ännu</p>
            ) : (
              data.vänner.map((v, i) => (
                <div key={i} className="card">
                  <h3>{v.namn}</h3>
                  <p>Tillhör: {v.tillhör}</p>
                  <p>Ålder: {v.ålder}</p>
                  <p>Hårfärg: {v.hårfärg}</p>
                  {/* <p>Ögonfärg: {v.ögonfärg}</p> */}
                  <p>Snutte: {v.snutte}</p>
                  <p>Förmåga: {v.förmåga}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <footer className="footer">
        © 2025 Barn & Osynliga Vänner — All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
