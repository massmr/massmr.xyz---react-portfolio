export const CardButton = ({ children, category, handleClick }) => {
  
  const buttonStyle = {
    position: 'absolute',
    zIndex: '10',
    bottom: '0',
    right: '0',
    borderRadius: '30px',
    border: 'none',
    fontFamily: `'Jost', sans-serif`,
    fontSize: '15px',
    padding: '10px 20px',
    backdropFilter: 'blur(30px)',
    color: '#F9F8F0',
    cursor: 'pointer',
  }
  
  const imageButtonStyle = {
    backgroundColor: 'transparent',
    bottom: '35px',
    right: '30px',
  }

  const descriptionButtonStyle = {
    backgroundColor: 'rgba(255,255,255,0.2)',
  }

  return (
    <>
    <button
      onClick={handleClick}
      style={{ ...buttonStyle, ...(category === 'image' ? imageButtonStyle : descriptionButtonStyle) }}
      className="project-button">
      {children}
    </button>
    </>
  );
};
