import education720 from '../assets/education-video.mp4'
import educationIMG from '../assets/education-image.png';

import './Item7.css';

import { VideoItem } from '../VideoItem/VideoItem.jsx';

export const Item7 = () => {
  
  return (
    <div className="item-7-wrapper">

      <VideoItem  
        thumbSource={educationIMG}
        thumbAlt="education thumbnail"
        thumbClass="item-7-thumbnail"
        videoSource={education720}
        videoClass="item-7-video"/>

    </div>
  );
};
