// Modal.tsx
import React from "react";

const CardForm: React.FC = () => {
  return (
    <div className="CardForm">
      <h4>Form</h4>
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
      <label>Om osynlig vän</label>
      <select>
        <option>Välj barn som den tillhör</option>
      </select>
    </div>
  );
};

export default CardForm;
