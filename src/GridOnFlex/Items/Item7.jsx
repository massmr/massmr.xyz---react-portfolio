/*
import education720 from '../assets/education-video.mp4';
import educationIMG from '../assets/education-image.png';
*/
import education from '../assets/education-image-white.png';

import './Item7.css';

import { VideoItem } from '../VideoItem/VideoItem.jsx';

export const Item7 = () => {
  
  return (
    <div className="item-7-wrapper">

      <img src={education}
        alt="education-image"
        className="item-7-image" />

    </div>
  );
};

/*
  <VideoItem  
    thumbSource={educationIMG}
    thumbAlt="education thumbnail"
    thumbClass="item-7-thumbnail"
    videoSource={education720}
    videoClass="item-7-video"/>
*/
