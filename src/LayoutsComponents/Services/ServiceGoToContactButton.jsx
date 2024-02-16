import './ServiceGoToContactButton.css'

export const GoToContactButton = ({ children }) => {
  return (
    <div className="go-to-contact-button-container">
      <button className="go-to-contact-button">
        {children || 'Ask for princing'}
      </button>
    </div>
  )
}
