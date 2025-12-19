import "./Sidebar.css";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="avatar" />
          <span className="user">Prueba de ING.Marcsene</span>
          <button className="power">⏻</button>
        </div>

        <div className="sidebar-section">
          <p className="section-title">Tickets</p>
          <button className="item">Ventas</button>
          <button className="item">Copiar</button>
          <button className="item">Anular</button>
          <button className="item">Pagar</button>
          <button className="item">Combinar</button>
        </div>

        <div className="sidebar-section">
          <p className="section-title">Reportes</p>
          <button className="item">Tickets</button>
          <button className="item">Sorteos</button>
          <button className="item">Cuadre</button>
        </div>

        <div className="sidebar-section">
          <p className="section-title">Ajustes</p>
          <button className="item">Impresora</button>
          <button className="item">Actualizar App</button>
          <button className="item">Cerrar</button>
        </div>
      </aside>
    </>
  );
}
