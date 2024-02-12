import { useState } from 'react'
import './Item3.css';
import paperPlane from '../../Utils/assets/img/paper-plane.png'

export const Item3 = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleActivation = () => {
    setIsFocused(true);
  };
  const handleDeactivation = () => {
    setIsFocused(false);
  }

  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  }
  const handleLeave =() => {
    setIsHovered(false);
  }

  return (
    <div 
      tabIndex={0}
      onFocus={handleActivation}
      onBlur={handleDeactivation}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="item-3-wrapper">
      <div className={`item-3-animated-wrapper ${isFocused ? 'item-3-animated-wrapper-focused' : ''} ${isHovered ? 'item-3-animated-wrapper-hovered' : ''}`}>
        <div className="item-3-animated-wrapper-text">
          <h2 className="item-3-subtext">SEND MESSAGE</h2>
        </div>
        <div className="item-3-wrapper-wrapper-freespace">
        </div>
      </div>
      <div className={`item-3-initial-wrapper ${isFocused ? 'item-3-initial-wrapper-focused' : ''}`}>
        <div className="item-3-image-wrapper">
          <img src={paperPlane}
            className="item-3-image"/>
        </div>
        <div className="item-3-text-wrapper">
          <h1 className="item-3-text">CONTACT ME</h1>
        </div>
      </div>
    </div>
  );
};
