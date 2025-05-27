import './Header.css';

function Header({ setPage }) {
  return (
    <header className="header">
      <h1 className="logo">Sania Irshad</h1>
      <nav className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("projects")}>Projects</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
