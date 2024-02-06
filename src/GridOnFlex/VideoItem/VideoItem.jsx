import { useState } from 'react';
import './VideoItem.css';

export const VideoItem = ({ 
  thumbSource,
  thumbAlt,
  thumbClass,
  videoSource,
  videoClass }) => {

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  }

  return (
    <>
      <img src={thumbSource}
       alt={thumbAlt}
       className={`videoItem-image ${thumbClass}`}
       style={{ display: isVideoLoaded ? 'none' : 'block' }} />

      <video playsInline 
        autoPlay 
        muted 
        loop 
        className={`videoItem-video ${videoClass}`}
        onLoadedData={onLoadedData}
        style={{ display : isVideoLoaded ? 'block' : 'none' }}>
        <source src={videoSource} />
      </video>
    </>
  );
};
