import { useRef } from 'react';

import aboutMe1080 from '../assets/aboutMe1080.mp4';
import aboutMe720 from '../assets/aboutMe720.mp4';
import aboutMe440 from '../assets/aboutMe440.mp4';
import './Item4.css';

export const Item4 = () => {
  const windowWidth = useRef(window.innerWidth);
  console.log(windowWidth);
  
  const selectSource = (width) => {
    if(width >= 1080) return aboutMe1080;
    if(width <= 1080 && width >= 440) return aboutMe720;
    return aboutMe440;
  }
  
  const src = selectSource(windowWidth);

  return (
    <div className="item-4-wrapper">
      <video playsInline autoPlay muted loop className="item-4-video">
        <source src={src} />
      </video>
    </div>
  );
};
