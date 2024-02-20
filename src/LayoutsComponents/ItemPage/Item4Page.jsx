import './Item4Page.css'
import { ComingSoon } from '../ComingSoon.jsx'
import aboutImage from '../../Utils/assets/img/aboutphoto.jpg'

export const Item4PageContentOld = ({ name }) => {

  return (
    <ComingSoon />
  );
};


const text1 = `
  Hello, I'm Massimo, a passionate software developer. My experiences in computer science have equipped me with a diverse set of technical skills, fostering a sharp understanding of both the intricate domain of backend development and the captivating world of front-end development.

`
export const Item4PageContent = ({ name }) => {

  return (
    <section className="item-4-page-container">
      <div className="item-4-page-image-container">
        <img src={aboutImage} alt="about"/>
      </div>
      <div className="item-4-page-text-container">
        <h1 className="item-4-text-title">Welcome to the <span className="item-4-text-colored">digital realm</span></h1>
        <h2 className="item-4-text-sub-right">Where we are crafting <span className="item-4-text-colored">experiences</span></h2>
        <h2 className="item-4-text-sub-left">&& unveiling surreal <span className="item-4-text-colored">creativity</span></h2>
        <div className="item-4-text-paragraph-container">
          <p className="item-4-text-paragraph">{text1}</p>
        </div>
      </div>
    </section>
  );
};
