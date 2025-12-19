export default function AppBar({ title, onMenu }) {
  return (
    <header className="appbar">
      <button
        className="appbar__icon"
        onClick={onMenu}   // 👈 OBLIGATORIO
      >
        ☰
      </button>

      <h1 className="appbar__title">{title}</h1>
    </header>
  );
}
