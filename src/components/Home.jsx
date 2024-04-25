import Tooltip from './Tooltip';

const RESUME_URL = 'src/assets/tt_resume.pdf';

export default function Home () {

  const downloadResume = () => {
    const anchor = document.createElement('a')
    anchor.href = RESUME_URL
    anchor.download = RESUME_URL.split('/').pop()
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

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
          <button className="Home__section-button Button" onClick={downloadResume}>Download resume</button>

          <button className="Home__section-button Button Button--secondary">Contact</button>
        </div>
      </div>

      <div className="Home__footer">
        <div className="Home__section-socials-container">
          <Tooltip direction="top" content="LinkedIn profile">
            <a
              className="Home__section-link Home__section-link--icon"
              href="https://www.linkedin.com/in/thendup-tsering"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </Tooltip>

          <Tooltip direction="top" content="Github profile">          
            <a
              className="Home__section-link Home__section-link--icon"
              href="https://github.com/thenduptsering"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
          </Tooltip>

          <Tooltip direction="top" content="Instagram profile">  
            <a
              className="Home__section-link Home__section-link--icon"
              href="https://www.instagram.com/thendup.tsering"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </Tooltip>

          <Tooltip direction="top" content="Twitter (X) profile">  
            <a
              className="Home__section-link Home__section-link--icon"
              href="https://twitter.com/thenduptsering"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}