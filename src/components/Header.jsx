import TrollFace from "../images/Troll Face.png";

export default function Header() {
  return (
    <header className="header--container">
      <div className="header--logo">
        <img src={TrollFace} alt="Troll Face" className="header--icon" />
        <h2>Meme Generator</h2>
      </div>
      <h4>React Course - Project 3</h4>
    </header>
  );
}
