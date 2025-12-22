import { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.jpeg";
import AdminPinModal from "../admin/AdminPinModal";
import ChangeAdminPin from "../admin/ChangeAdminPin";

export default function Sidebar({ open, onClose }) {
  const [active, setActive] = useState("Ventas");
  const [showAdminPin, setShowAdminPin] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);

  // 🔐 sesión admin persistente
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("admin_auth") === "true"
  );

  // 🔹 Item reutilizable
  const Item = ({ name, icon, adminOnly = false }) => (
    <button
      className={`item ${active === name ? "active" : ""}`}
      onClick={() => {
        // 🔐 si requiere admin y no lo es → pedir PIN
        if (adminOnly && !isAdmin) {
          setShowAdminPin(true);
          onClose();
          return;
        }

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
      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={onClose} />}

      {/* 🔐 MODAL PIN ADMIN */}
      <AdminPinModal
        open={showAdminPin}
        onClose={() => setShowAdminPin(false)}
        onSuccess={() => {
          setIsAdmin(true);
          localStorage.setItem("admin_auth", "true");
          setShowAdminPin(false);
        }}
      />

      {/* 🔁 MODAL CAMBIAR PIN */}
      <ChangeAdminPin
        open={showChangePin}
        onClose={() => setShowChangePin(false)}
      />

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="avatar">
            <img src={logo} alt="FD Borlette" />
          </div>
          <span className="user">FD Borlette</span>
          <button className="power">⏻</button>
        </div>

        {/* TICKETS */}
        <div className="sidebar-section">
          <p className="section-title">Tickets</p>
          <Item name="Ventas" icon="🧾" />
          <Item name="Copiar" icon="📄" />
          <Item name="Anular" icon="❌" adminOnly />
          <Item name="Pagar" icon="💵" adminOnly />
          <Item name="Combinar" icon="🔀" />
        </div>

        {/* REPORTES */}
        <div className="sidebar-section">
          <p className="section-title">Reportes</p>
          <Item name="Tickets" icon="🎟️" />
          <Item name="Sorteos" icon="🎲" />
          <Item name="Cuadre" icon="📊" adminOnly />
        </div>

        {/* AJUSTES */}
        <div className="sidebar-section">
          <p className="section-title">Ajustes</p>

          <button
            className={`item ${active === "Admin" ? "active" : ""}`}
            onClick={() => {
              // 🔐 si no es admin, pedir PIN
              if (!isAdmin) {
                setShowAdminPin(true);
                onClose();
                return;
              }

              // 🔁 si ya es admin → cambiar PIN
              setShowChangePin(true);
              onClose();
            }}
          >
            <span className="icon">🔐</span>
            <span>Cambiar PIN (Admin)</span>
          </button>

          {isAdmin && (
            <button
              className="item"
              onClick={() => {
                setIsAdmin(false);
                localStorage.removeItem("admin_auth");
                setActive("Ventas");
                onClose();
              }}
            >
              <span className="icon">🚪</span>
              <span>Cerrar sesión Admin</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
