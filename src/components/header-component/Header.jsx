import "./Header.css";
import CoderAnim from "../coder-anim/CoderAnim.jsx";

function Header() {
  return (
    <div className="header">
      <div className="main">
        <div className="main__info">
          <h1 className="Hi">
            Hi, There! <></>
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="name">
            I'm <span></span>
            <strong className="name__info">Oleksandr Shal</strong>
          </h1>
          <div className="typing">
            <h1 className="typing__info">Frontend Developer</h1>
          </div>
        </div>
        <CoderAnim />
      </div>
    </div>
  );
}

export default Header;
