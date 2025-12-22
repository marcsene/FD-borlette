import { useState } from "react";
import "./ChangeAdminPin.css";

export default function ChangeAdminPin({ open, onClose }) {
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  if (!open) return null;

  function handleSave() {
    if (newPin.length !== 4) {
      alert("El PIN debe tener 4 dígitos");
      return;
    }

    if (newPin !== confirmPin) {
      alert("Los PIN no coinciden");
      return;
    }

    localStorage.setItem("admin_pin", newPin);
    alert("PIN actualizado correctamente");
    setNewPin("");
    setConfirmPin("");
    onClose();
  }

  return (
    <div className="pin-overlay">
      <div className="pin-modal">
        <h3>Cambiar PIN Administrador</h3>

        <input
          type="password"
          placeholder="Nuevo PIN (4 dígitos)"
          maxLength={4}
          value={newPin}
          onChange={(e) => setNewPin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar PIN"
          maxLength={4}
          value={confirmPin}
          onChange={(e) => setConfirmPin(e.target.value)}
        />

        <div className="pin-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

