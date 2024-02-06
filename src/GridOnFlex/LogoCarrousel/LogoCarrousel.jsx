import { useState, useEffect } from 'react';
import './LogoCarrousel.css';

export const LogoCarrousel = () => {

  const [isAnimate, setIsAnimate] = useState(false);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimate(true);
      setIteration((prevIteration) => (prevIteration + 1) % 6);
    }, 2000); // Adjust the interval between slides

    return () => clearInterval(interval);
  }, []);

  const containerStyle = { '--iteration': iteration };

  return (
    <>
      <div className={`carrousel-stack-container ${isAnimate ? 'animate' : ''}`}
        style={containerStyle}>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-react-original"></i>
          <h5 className="carrousel-stack-icon-name">React</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-sass-original"></i>
          <h5 className="carrousel-stack-icon-name">Sass</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-nodejs-plain"></i>
          <h5 className="carrousel-stack-icon-name">Node.js</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-html5-plain"></i>
          <h5 className="carrousel-stack-icon-name">HTML</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-css3-plain"></i>
          <h5 className="carrousel-stack-icon-name">CSS</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-mongodb-plain"></i>
          <h5 className="carrousel-stack-icon-name">MongoDB</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-postgresql-plain"></i>
          <h5 className="carrousel-stack-icon-name">PostgreSQL</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-wordpress-plain"></i>
          <h5 className="carrousel-stack-icon-name">Wordpress</h5>
        </div>
        <div className="carrousel-stack-icon-wrapper">
          <i className="carrousel-stack-icon devicon-apache-plain"></i>
          <h5 className="carrousel-stack-icon-name">Apache</h5>
        </div>
      </div>
    </>
  );
}; 
