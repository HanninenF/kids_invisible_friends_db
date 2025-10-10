import React from "react";

interface ModalProps {
  type: "barn" | "vän";
}

const Modal: React.FC<ModalProps> = ({ type }) => {
  return (
    <div className="Modal">
      <h4>{type === "barn" ? "Lägg till barn" : "Lägg till osynlig vän"}</h4>

      <label>Namn</label>
      <input type="text" />

      <label>Ålder</label>
      <input type="number" />

      <label>Hårfärg</label>
      <input type="text" />

      <label>Ögonfärg</label>
      <input type="text" />

      <label>Snutte</label>
      <input type="text" />

      <label>Main förmåga</label>
      <input type="text" />

      {type === "vän" && (
        <>
          <label>Om osynlig vän</label>
          <select>
            <option>Välj barn som den tillhör</option>
          </select>
        </>
      )}
    </div>
  );
};

export default Modal;
