import "./Header.css";

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
        <div class="wrapper">
          <svg
            width="291"
            height="328"
            version="1.1"
            id="atom"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
          >
            <path
              class="atom--elipse"
              d="M201,131.8c-8.5-5.6-17.5-11.2-26.9-16.5c-77.6-44-153-57.8-168.3-30.7s35.1,84.7,112.8,128.7s153,57.8,168.3,30.7c13.5-23.7-23.7-70.9-85.3-111.9"
            />
            <circle
              class="atom--circle atom--circle__1"
              cx="10"
              cy="0"
              r="10"
            />
            <path
              class="atom--elipse"
              d="M97.9,81.5c9.8-47.2,27.8-78.7,48.4-78.7c31.1,0,56.3,72.3,56.3,161.6s-25.2,161.6-56.3,161.6S90,253.6,90,164.4c0-30.1,2.9-58.2,7.9-82.4"
            />
            <circle
              class="atom--circle atom--circle__2"
              cx="10"
              cy="0"
              r="10"
            />
            <path
              class="atom--elipse"
              d="M145.7,228.2c-66.9,32-126.5,39.6-140,15.9C-9.6,217,40.9,159.4,118.5,115.4s153-57.8,168.3-30.7c15.3,27.1-35.1,84.7-112.8,128.7c-9.4,5.3-18.7,10.2-28,14.6"
            />
            <circle
              class="atom--circle atom--circle__3"
              cx="10"
              cy="0"
              r="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
