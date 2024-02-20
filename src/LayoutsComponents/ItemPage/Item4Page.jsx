import './Item4Page.css'
import { ComingSoon } from '../ComingSoon.jsx'
import aboutImage from '../../Utils/assets/img/aboutphoto.jpg'

const text1 = `
  Hello, I'm Massimo, a passionate software developer. With more than 7 years into tech as a system administrator for the french army, and a lot of self-studies about programming, I have been equipped with a diverse set of technical skills, fostering a sharp understanding of both the intricate domain of backend development and the captivating world of front-end development.
`
const text2 = `
  My true passion lies in frontend development, as I find the creative process of designing user interfaces and crafting seamless user experiences particularly interesting. Working on various projects has allowed me to not only enhance my coding skills but also develop a keen eye for aesthetics and user-centric design.
`

const text3=`
  Furthermore, my military experience enhanced my stress management and time-sensitive skills, valuable in the fast-paced tech world. It also cultivated effective teamwork, where I learned to communicate and contribute within a team. 
`

export const Item4PageContent = ({ name }) => {
  return (
    <>
    <section className="item-4-page-container">

      <div className="item-4-page-image-container">
        <img src={aboutImage} alt="about"/>
      </div>

      <div className="item-4-page-text-container">

        <div className="item-4-page-title-container">
          <h1 className="item-4-text-title">Welcome to my <span className="item-4-text-colored">digital world</span></h1>
          <h2 className="item-4-text-sub-right">Where i am crafting <span className="item-4-text-colored">experiences</span></h2>
          <h2 className="item-4-text-sub-left">&& unveiling surreal <span className="item-4-text-colored">creativity</span></h2>
        </div>
    
        <div className="item-4-text-paragraph-container">
          <p className="item-4-text-paragraph">{text1}</p>
          <p className="item-4-text-paragraph">{text2}</p>
          <p className="item-4-text-paragraph">{text3}</p>
        </div>

      </div>
      
    </section>
    </>
  );
};
