import { useRef, useState } from 'react';

import aboutMe720 from '../assets/aboutMe720.mp4';
//import aboutMe440 from '../assets/aboutMe440.mp4';
import aboutMeIMG from '../assets/aboutMeIMG.svg';
import './Item4.css';

export const Item4 = () => {
  /*const windowWidth = useRef(window.innerWidth);
  console.log(windowWidth);
  
  const selectSource = (width) => {
    if(width >= 440) return aboutMe720;
    return aboutMe440;
  }
  
  const src = selectSource(windowWidth);*/

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  }

  return (
    <div className="item-4-wrapper">

      <img src={aboutMeIMG}
        alt="thumbnail"
        className="item-4-thumbnail"
        style={{ display: isVideoLoaded ? 'none' : 'block' }} />

      <video playsInline 
        autoPlay 
        muted 
        loop 
        className="item-4-video"
        onLoadedData={onLoadedData}
        style={{ display : isVideoLoaded ? 'block' : 'none' }}>

        <source src={aboutMe720} />

      </video>
    </div>
  );
};
