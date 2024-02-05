import aboutMe from '../assets/aboutmepurplegrad.mp4';
import './Item4.css';

export const Item4 = () => {
  
  return (
    <div className="item-4-wrapper">
      <video autoPlay muted loop className="item-4-video">
        <source src={aboutMe} />
      </video>
    </div>
  );
};
