import Logo from "../images/Troll Face.png";

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img alt="" src={Logo} />
        <span>Meme Generator</span>
      </div>
      <span clas>React Course - Project 3</span>
    </header>
  );
}
