import './Item7Page.css'
import iedLogo from '../../Utils/assets/img/ied_logo.jpg'
import lewagonLogo from '../../Utils/assets/img/lewagon-ok.webp'
import amu from '../../Utils/assets/img/amu-ok.png'
import toeic from '../../Utils/assets/img/toeic.jpg'

export const Item7PageContent = () => {
  const mainText = `
    "The vast majority of my knowledge in software development has been self-taught, involving consistent hands-on experience with computer programming over an extensive period of my life. I am deeply passionate about continuously refining my skills in this field.. Happy Coding."
  `
  const text1 = `
    In order to enhance my theoretical knowledge, I enrolled in 'computer science' bachelor's program at Paris 8 Universsity as an online student. 
  `
  const text2 = `
    As I am always looking to gain more practical experience, I decided to attend the 'Le Wagon' bootcamp during the university holiday break this summer.
  `
  const text3 = `
    Studying general sciences provided me with a strong foundation that served well over the last 8 years as a system administrator. The main subjects studied were electronics, electricity and mechanics.
  `
  const text4 = `
  The TOEIC assesses business-oriented English proficiency, with a score of 920 indicating upper-intermediate proficiency—remarked as the individual's rank.
  `

  return (
    <section className="item-7-page-container">
      <h1 className="item-7-title">Education 
        <span> background</span>
      </h1>
      <p className="item-7-main-description">
        {mainText}
        <br />
        <span>Massimo</span>
      </p>
      <div className="item-7-image-container">
        <div className="item-7-logo-wrapper item-7-ied-wrapper">
          <img className="item-7-image ied" src={iedLogo}/>
        </div>
        <div className="item-7-image-description-wrapper">
          <h1 className="item-7-image-description-title">
            Bachelor of Science in <span>computer science</span>
          </h1>
          <p className="item-7-image-description-date">
            will be completed in june 2026
          </p>
          <p className="item-7-description-text">{text1}</p>
        </div>
      </div>
      <div className="item-7-image-container">
        <div className="item-7-logo-wrapper item-7-lewagon-wrapper">
          <img className="item-7-image lewagon" src={lewagonLogo}/>
        </div>
        <div className="item-7-image-description-wrapper">
          <h1 className="item-7-image-description-title">
            Le wagon <span>fullstack developer Bootcamp</span>
          </h1>
          <p className="item-7-image-description-date">
            will be completed in august 2024
          </p>
          <p className="item-7-description-text">{text2}</p>
        </div>
      </div>
      <div className="item-7-image-container">
        <div className="item-7-logo-wrapper item-7-amu-wrapper">
          <img className="item-7-image amu" src={amu}/>
        </div>
        <div className="item-7-image-description-wrapper">
          <h1 className="item-7-image-description-title">
            Degree in general <span>engineering sciences</span>
          </h1>
          <p className="item-7-image-description-date">
            completed in 2016
          </p>
          <p className="item-7-description-text">{text3}</p>
        </div>
      </div>
      <div className="item-7-image-container">
        <div className="item-7-logo-wrapper item-7-toeic-wrapper">
          <img className="item-7-image toeic" src={toeic}/>
        </div>
        <div className="item-7-image-description-wrapper">
          <h1 className="item-7-image-description-title">
            TOEIC english test
          </h1>
          <p className="item-7-image-description-date">
            920 points
          </p>
          <p className="item-7-description-text">{text4}</p>
        </div>
      </div>
    </section>
  );
};
