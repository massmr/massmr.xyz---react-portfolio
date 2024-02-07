import './GridItem.css';

export const GridItem = ({ 
  children, 
  openModale,
  setActive }) => {
  
  const handleClick = () => {
    openModale();
    setActive();
  };

  return (
    <div
      className="grid-item"
      onClick={handleClick}
      style={{
        borderRadius: '12px',
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'pointer',  
      }}>
      
      {children}
    </div>
  )
}
