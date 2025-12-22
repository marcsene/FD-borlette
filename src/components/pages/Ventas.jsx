import { useState } from "react";
import AppBar from "../Header/AppBar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AdminPinModal from "../admin/AdminPinModal";

export default function Ventas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("admin_auth") === "true"
  );

  return (
    <>
      {/* 🔐 MODAL PIN (obligatorio) */}
      {!isAdmin && (
        <AdminPinModal
          open={true}
          onClose={() => {}}
          onSuccess={() => {
            localStorage.setItem("admin_auth", "true");
            setIsAdmin(true);
          }}
        />
      )}

      {/* 🚫 BLOQUEO TOTAL SI NO ES ADMIN */}
      {isAdmin && (
        <>
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

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
      )}
    </>
  );
}
