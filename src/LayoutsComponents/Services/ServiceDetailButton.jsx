import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
library.add({ faPlus })

export const SeeDetailButton = ({ 
  onClick,
  isActive,
  }) => {

  const handleToggleActivation = () => {
    setIsActive((prev) => !prev);
  }

  const handleClick = () => {
    handleShowDetails();
    handleHideDetails();
    handleToggleActivation();
  }

  return (
    <div className="service-button-wrapper">
      <p
        onClick={onClick}
        className="service-button-text">See plan details</p>
      <FontAwesomeIcon 
        className={`service-button-icon ${isActive ? 'service-button-icon-active' : '' }`}
        icon="fa-solid fa-plus" />
    </div>
  );
};

