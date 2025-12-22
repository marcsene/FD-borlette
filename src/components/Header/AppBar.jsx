import "./AppBar.css";
import logo from "../../assets/log.png";

export default function AppBar({ title = "Ventas", onMenu }) {
  return (
    <header className="appbar">
      <button className="appbar__menu" onClick={onMenu}>
        ☰
      </button>

      <div className="appbar__brand">
        <img src={logo} alt="Fandal" className="appbar__logo" />
        <span className="appbar__title">{title}</span>
      </div>
    </header>
  );
}
