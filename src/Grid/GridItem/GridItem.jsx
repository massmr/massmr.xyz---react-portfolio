import { useState } from 'react';
import { Modale } from '../Modal/Modal.jsx';

export const GridItem = ({ children, name, hasModal }) => {
  const [isModaleVisible, setIsModaleVisible] = useState(false);

  const handleModaleOpen = () => {
    if (hasModal) {
      setIsModaleVisible(true);
    }
  };

  const handleModaleClose = () => {
    setIsModaleVisible(false);
  };

  return (
    <div
      onClick={handleModaleOpen}
      className={name}
      style={{
        borderRadius: '12px',
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'pointer',  
      }}>
      
      {children}
      {hasModal && isModaleVisible && (
        <Modale state={isModaleVisible} 
        handleClose={handleModaleClose}>
        </Modale>
      )}

    </div>
  )
}
