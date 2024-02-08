import { useState, useEffect } from 'react'
import './GridItem.css'

export const GridItem = ({ 
  children, 
  name,
  openModale = null,
  setActive,
  setDeactive,
  isActive,
  isBlurred }) => {
  
  //on click on the item : 
    //-deploy the modale if there is one
    //-set active >> callback set isBlurred : true
    // >> will prevent blurred div to render
  const handleOnClick = () => {
    openModale ? openModale() : '';
    setActive();
  };
  const handleOnBlur = () => {
    setDeactive();
  };

  const [isBlurAlreadyOn, setIsBlurAlreadyOn] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isBlurred) {
        setIsBlurAlreadyOn(true);
      } else {
        setIsBlurAlreadyOn(false);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [isBlurred]);

  return (
    <>
      { !isActive && isBlurred && (
        <div className={`grid-item-blurred ${isBlurAlreadyOn ? 'grid-item-blurred-active' : 'grid-item-blurred-deactive'}`}>
        </div>
      )}
      <div
        tabIndex={0}
        className="grid-item"
        onFocus={handleOnClick}
        onBlur={handleOnBlur}
        style={{
          borderRadius: '12px',
          width: '100%',
          height: '100%',
          position: 'relative',
          cursor: 'pointer',  
        }}>
        {children}
      </div>
    </>
  )
}
