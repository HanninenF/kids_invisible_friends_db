import React, { useEffect } from 'react';
import { useFormContext } from '../context/FormContext';
import { useChildFriendContext } from '../domain/useContext';
import deleteChild from '../services/deleteChild';
import fetchChildren from '../services/fetchChildren';
import type { SidebarProps } from '../type/DataType';
import Modal from './Modal';

// SIDEBAR – inuti samma fil (ingen extra import behövs)

const Sidebar: React.FC<SidebarProps> = () => {
  const { activeForm, setActiveForm } = useFormContext();

  return (
    <aside className="sidebar">
      <button
        className={`btn ${activeForm === 'barn' ? 'active' : ''}`}
        onClick={() => setActiveForm(activeForm === 'barn' ? null : 'barn')}
      >
        Lägg till barn–knapp
      </button>

      <button
        className={`btn ${activeForm === 'vän' ? 'active' : ''}`}
        onClick={() => setActiveForm(activeForm === 'vän' ? null : 'vän')}
      >
        Lägg till osynlig vän–knapp
      </button>

      {activeForm && (
        <div className="form-area">
          <Modal />
        </div>
      )}
    </aside>
  );
};

// HUVUDKOMPONENTEN
const Home: React.FC = () => {
  const { setKids, setInvisibleFriends, kids, InvisibleFriends } = useChildFriendContext();
  const handleDelete = async (id: string) => {
    const num = Number(id);
    const message = await deleteChild(num);
    const children = await fetchChildren();
    setKids(children);
  };

  useEffect(() => {
    const renderCards = async () => {
      const data = await fetchChildren();
      setKids(data);
      console.log('renderCards: ', data);
    };
    renderCards();
  }, [setKids]);

  return (
    <div className="page-container">
      <header className="header">
        <span className="word">Barn</span>
        <span className="word">&</span>
        <span className="word">Osynliga</span>
        <span className="word">Vänner</span>
      </header>

      <div className="app-container">
        <Sidebar />

        <div className="card-container">
          <div className="list-column">
            <h2>Barn</h2>
            {kids.length === 0 ? (
              <p>Inga barn äbarnnnu</p>
            ) : (
              kids.map((k, i) => (
                <div key={i} className="card">
                  <button onClick={() => handleDelete(k.id)}>X</button>
                  <h3>{k.name}</h3>
                  <p>Ålder: {k.age}</p>
                  <p>Hårfärg: {k.hairColor}</p>
                  <p>Ögonfärg: {k.eyeColor}</p>
                  <p>Snutte: {k.comfortObject}</p>
                  <p>Förmåga: {k.mainAbility}</p>
                </div>
              ))
            )}
          </div>

          <div className="list-column">
            <h2>Osynliga vänner</h2>
            {InvisibleFriends.length === 0 ? (
              <p>Inga osynliga vänner ännu</p>
            ) : (
              InvisibleFriends.map((v, i) => (
                <div key={i} className="card">
                  <h3>{v.name}</h3>
                  <p>Tillhör: {v.childId}</p>
                  <p>Ålder: {v.age}</p>
                  <p>Hårfärg: {v.hairColor}</p>
                  <p>Ögonfärg: {v.eyeColor}</p>
                  <p>Snutte: {v.comfortObject}</p>
                  <p>Förmåga: {v.mainAbility}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <footer className="footer">© 2025 Barn & Osynliga Vänner — All Rights Reserved</footer>
    </div>
  );
};

export default Home;
