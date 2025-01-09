import logo from "../assets/img/bars.svg";

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Логотип ToDo" className="header-logo" />
      <h1 className="header-title">ToDo</h1>
    </header>
  );
}
