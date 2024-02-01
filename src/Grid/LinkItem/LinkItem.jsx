//import packages
import { useState, useEffect } from 'react';

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, 
  faLinkedinIn, 
  faXTwitter } from "@fortawesome/free-brands-svg-icons";
library.add({ faGithub, faXTwitter, faLinkedinIn });

export const LinkItem = ({ iconName, state }) => {

  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (state) {
      setIsActive(true);
    }
  }, [state]);

  const LinkItemStyle = {
    width: 'calc(100% / 2 - 3px)',
    height: 'calc(100% / 2 - 2px)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isActive ? 1 : 0,
  }; 

  const linkIconStyle = {
    transform: 'scale(1.5)',
    color: '#F8F9FA',
  }

  const fullIconName = `fa-brands ${iconName}`;

  return (
    <div style={LinkItemStyle} >
      {fullIconName && <FontAwesomeIcon
        style={linkIconStyle}
        icon={fullIconName} />}
    </div>
  );
}
