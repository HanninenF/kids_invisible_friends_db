import React from "react";
import "../styles/ConfirmModal.scss"; // (lägg till valfri stil)

interface ConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <p>{message}</p>
        <div className="confirm-buttons">
          <button className="btn btn-danger" onClick={onConfirm}>Ja</button>
          <button className="btn btn-secondary" onClick={onCancel}>Nej</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
