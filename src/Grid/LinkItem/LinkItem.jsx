//import packages
import { useState, useEffect } from 'react';

//import styles
import './LinkItem.css';

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, 
  faLinkedinIn, 
  faXTwitter } from "@fortawesome/free-brands-svg-icons";
library.add({ faGithub, faXTwitter, faLinkedinIn });

export const LinkItem = ({ 
  iconName, 
  displayState,
  modaleState,
  }) => {

  const fullIconName = `fa-brands ${iconName}`;

  const [isActive, setIsActive] = useState(false);
  const [isInModale, setIsInModale] = useState(false);
  
  useEffect(() => {
    if (displayState) {
      setIsActive(true);
    }
  }, [displayState]);

  useEffect(() => {
    if (modaleState) {
      setIsInModale(true);
    }
  }, [modaleState]);

  return (
    <div  
    className={`link-item 
      ${isActive ? 'link-item-active' : ''}
      ${isInModale ? 'link-item-modale' : ''}`}>
      {fullIconName && <FontAwesomeIcon
        className="link-icon"
        icon={fullIconName} />}
    </div>
  );
}
