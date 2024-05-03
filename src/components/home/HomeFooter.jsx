import Tooltip from '@/components/Tooltip';

export default function HomeFooter () {
  return (
    <div className="Home__footer">
      <div className="Home__section-socials-container">
        <Tooltip direction="top" delay="0" content="LinkedIn profile">
          <a
            className="Home__section-link Home__section-link--icon"
            href="https://www.linkedin.com/in/thendup-tsering"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </Tooltip>

        <Tooltip direction="top" delay="0" content="Github profile">
          <a
            className="Home__section-link Home__section-link--icon"
            href="https://github.com/thenduptsering"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>
        </Tooltip>

        <Tooltip direction="top" delay="0" content="Instagram profile">
          <a
            className="Home__section-link Home__section-link--icon"
            href="https://www.instagram.com/thendup.tsering"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" />
          </a>
        </Tooltip>

        <Tooltip direction="top" delay="0" content="Twitter(X) profile">
          <a
            className="Home__section-link Home__section-link--icon"
            href="https://twitter.com/thenduptsering"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
