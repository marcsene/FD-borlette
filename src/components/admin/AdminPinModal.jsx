import { useState, useEffect } from "react";
import "./AdminPinModal.css";

export default function AdminPinModal({ open, onClose, onSuccess }) {
  const [pin, setPin] = useState("");

  // ✅ SIEMPRE leer desde localStorage
  const correctPin = localStorage.getItem("admin_pin") || "1234";

  useEffect(() => {
    if (open) setPin("");
  }, [open]);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const entered = pin.trim();

    if (!/^\d{4}$/.test(entered)) {
      alert("Ingrese un PIN válido de 4 dígitos");
      setPin("");
      return;
    }

    if (entered === correctPin) {
      onSuccess();
      setPin("");
    } else {
      alert("Clave incorrecta");
      setPin("");
    }
  }

  return (
    <div className="pin-overlay">
      <div className="pin-modal">
        <h3>Administrador</h3>
        <p>Ingrese clave de 4 dígitos</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            maxLength={4}
            inputMode="numeric"
            value={pin}
            onChange={(e) =>
              setPin(e.target.value.replace(/\D/g, ""))
            }
            autoFocus
          />

          <div className="pin-actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
