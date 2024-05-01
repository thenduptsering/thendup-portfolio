const RESUME_URL = '/_thenduptsering_resume.pdf';

const downloadResume = () => {
  const anchor = document.createElement('a')
  anchor.href = RESUME_URL
  anchor.download = RESUME_URL.split('/').pop()
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

export default function Hero () {
  return (
    <section id="hero" className="Home__section Home__section--hero">
      <div className="Home__section-info-main">
        <p className="Home__section-line1" style={{animationDelay: '0ms'}}>Hello, my name is</p>

        <h1 className="Home__section-line2" style={{animationDelay: '200ms'}}>Thendup Tsering.</h1>

        <p className="Home__section-line3" style={{animationDelay: '400ms'}}>
          I am a senior front-end react developer based in Toronto, Canada
        </p>

        <div className="Home__section-buttons Home__section-line4" style={{animationDelay: '600ms'}}>
          <button className="Home__section-button Button Button--default" onClick={downloadResume}>Download resume</button>
        </div>
      </div>
    </section>
  );
}