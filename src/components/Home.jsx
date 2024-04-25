

export default function Home () {

  return (
    <div className="Home">
      <div className="Home__section">
        <div className="Home__section-pic-container">
          <img className="Home__section-pic" src="src/assets/headshot.jpg" alt="Thendup headshot" />
        </div>

        <div className="Home__section-text-container">
          <p className="Home__section-text-1">Hello, I am</p>

          <p className="Home__section-text-main">Thendup Tsering</p>

          <p className="Home__section-text-1">Senior Frontend Developer</p>
        </div>

        <div className="Home__section-button-container">
          <button className="Home__section-button Button">Download resume</button>

          <button className="Home__section-button Button">Contact info</button>
        </div>
      </div>

      <div className="Home__footer">
        <div className="Home__section-socials-container">
          <a
            className="Home__section-link Home__section-link--icon"
            href="https://www.linkedin.com/in/thendup-tsering"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>

          <a
            className="Home__section-link Home__section-link--icon"
            href="https://github.com/thenduptsering"
            target="_blank"
          >
            <i className="fa-brands fa-github" />
          </a>

          <a
            className="Home__section-link Home__section-link--icon"
            href="https://www.instagram.com/thendup.tsering"
            target="_blank"
          >
            <i className="fa-brands fa-instagram" />
          </a>

          <a
            className="Home__section-link Home__section-link--icon"
            href="https://twitter.com/thenduptsering"
            target="_blank"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}