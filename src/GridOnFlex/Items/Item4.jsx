import aboutMe720 from '../assets/aboutMe720.mp4';
import aboutMeIMG from '../assets/aboutMeIMG.svg';

import './Item4.css';

import { VideoItem } from '../VideoItem/VideoItem.jsx';

export const Item4 = () => {
  
  return (
    <div className="item-4-wrapper">

      <VideoItem
      thumbSource={aboutMeIMG}
      thumbAlt="about-me thumbnail"
      thumbClass="item-4-thumbnail"
      videoSource={aboutMe720}
      videoClass="item-4-video"/>
     
    </div>
  );
};

