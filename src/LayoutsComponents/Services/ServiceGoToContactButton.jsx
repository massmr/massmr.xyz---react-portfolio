import { useEffect } from 'react'
import './ServiceGoToContactButton.css'

export const GoToContactButton = ({ 
  children,
  handleSwitch }) => {
  
//redirect to contact item page through props
  const switchToName = 'item3';

  return (
    <div className="go-to-contact-button-container">
      <button
        onClick={() => handleSwitch(switchToName)}
        className="go-to-contact-button">
        {children || 'Ask for princing'}
      </button>
    </div>
  )
};  
