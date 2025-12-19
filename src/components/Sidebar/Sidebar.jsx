import { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/log.png";

export default function Sidebar({ open, onClose }) {
  const [active, setActive] = useState("Ventas");

  const Item = ({ name, icon }) => (
    <button
      className={`item ${active === name ? "active" : ""}`}
      onClick={() => {
        setActive(name);
        onClose();
      }}
    >
      <span className="icon">{icon}</span>
      <span>{name}</span>
    </button>
  );

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="avatar">
            <img src={logo} alt="FD Borlette" />
          </div>
          <span className="user">FD Borlette</span>
          <button className="power">⏻</button>
        </div>

        <div className="sidebar-section">
          <p className="section-title">Tickets</p>
          <Item name="Ventas" icon="🧾" />
          <Item name="Copiar" icon="📄" />
          <Item name="Anular" icon="❌" />
          <Item name="Pagar" icon="💵" />
          <Item name="Combinar" icon="🔀" />
        </div>

        <div className="sidebar-section">
          <p className="section-title">Reportes</p>
          <Item name="Tickets" icon="🎟️" />
          <Item name="Sorteos" icon="🎲" />
          <Item name="Cuadre" icon="📊" />
        </div>

        <div className="sidebar-section">
          <p className="section-title">Ajustes</p>
          <Item name="Impresora" icon="🖨️" />
          <Item name="Actualizar App" icon="⬆️" />
          <Item name="Cerrar" icon="🚪" />
        </div>
      </aside>
    </>
  );
}
