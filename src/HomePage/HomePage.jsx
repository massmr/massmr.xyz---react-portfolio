import './HomePage.css';

//import assets
import profilePic from '../Utils/assets/img/profile-pic.png'

export const HomePage = ({ deployGrid }) => {
  return (
    <section className="home-page-container">
      <div className="home-page-wrapper">
        <img 
          onClick={deployGrid}
          className="home-page-logo"
          src={profilePic}
          alt="logo" />
        <button 
          className="home-page-button"
          onClick={deployGrid}>
            Step into digital
        </button>
      </div>
    </section>
  );
};
 
