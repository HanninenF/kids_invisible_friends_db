import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
/* import { addBarn, addVan } from "../data/MockData"; */
interface ModalProps {
  onAddBarn?: (barn: any) => void;
  onAddVan?: (vän: any) => void;
  barnLista?: any[]; //  ny prop
}

const Modal: React.FC<ModalProps> = ({ onAddBarn, onAddVan, barnLista = [] }) => {
  const { activeForm, formData, updateField, resetForm } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!activeForm) return null;
  const data = formData[activeForm];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!data.namn) newErrors.namn = "Namn krävs";
    if (!data.ålder) newErrors.ålder = "Ålder krävs";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = () => {
    if (!validate()) return;

    if (activeForm === "barn") {
      const newBarn = { ...data };
      onAddBarn?.(newBarn);
    } else {
      const newVan = { ...data };
      onAddVan?.(newVan);
    }

    resetForm(activeForm);
    setErrors({});
    alert(`${activeForm === "barn" ? "Barn" : "Osynlig vän"} tillagd!`);
  };

  return (
    <div className="Modal">
      <h4>{activeForm === "barn" ? "Lägg till barn" : "Lägg till osynlig vän"}</h4>

      <label>Namn</label>
      <input
        type="text"
        value={data.namn}
        onChange={(e) => updateField(activeForm, "namn", e.target.value)}
        style={errors.namn ? { borderColor: "red" } : {}}
      />

      <label>Ålder</label>
      <input
        type="number"
        min="1"
        value={data.ålder}
        onChange={(e) => updateField(activeForm, "ålder", e.target.value)}
        placeholder={errors.ålder}
        style={errors.ålder ? { borderColor: "red" } : {}}
      />

      <label>Hårfärg</label>
      <input
        type="text"
        value={data.hårfärg}
        onChange={(e) => updateField(activeForm, "hårfärg", e.target.value)}
      />

      <label>Ögonfärg</label>
      <input
        type="text"
        value={data.ögonfärg}
        onChange={(e) => updateField(activeForm, "ögonfärg", e.target.value)}
      />

      <label>Snutte</label>
      <input
        type="text"
        value={data.snutte}
        onChange={(e) => updateField(activeForm, "snutte", e.target.value)}
      />

      <label>Main förmåga</label>
      <input
        type="text"
        value={data.förmåga}
        onChange={(e) => updateField(activeForm, "förmåga", e.target.value)}
      />

      {/* Dropdown för osynlig vän */}
      {activeForm === "vän" && (
        <>
          <label>Välj barn som vännen tillhör</label>
          <select
            value={data.tillhör || ""}
            onChange={(e) => updateField(activeForm, "tillhör", e.target.value)}
            style={errors.tillhör ? { borderColor: "red" } : {}}
          >
            <option value="">-- Välj barn --</option>
            {barnLista.map((b, i) => (
              <option key={i} value={b.namn}>
                {b.namn}
              </option>
            ))}
          </select>
        </>
      )}

      <button
        type="button"
        className="btn add"
        style={{ width: "95%", marginTop: "10px" }}
        onClick={handleSubmit}
      >
        {activeForm === "barn" ? "Lägg till Barn" : "Lägg till Osynlig vän"}
      </button>
    </div>
  );
};

export default Modal;
