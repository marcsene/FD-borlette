import { useMemo, useState } from "react";
import AppBar from "../Header/AppBar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function Ventas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  alert("ESTE ES EL Ventas ACTIVO");


  return (
    <>
      {/* SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* CONTENIDO */}
      <div className="ventas">
        <AppBar
          title="Ventas"
          onMenu={() => setSidebarOpen(true)}
        />

        <div style={{ padding: 20 }}>
          <p>Pantalla Ventas</p>
        </div>
      </div>
    </>
  );
}
