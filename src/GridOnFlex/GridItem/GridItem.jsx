import './GridItem.css';

export const GridItem = ({ 
  children, 
  openModale }) => {
  
  const handleOpenModale = () => {
    openModale();
  };

  return (
    <div
      className="grid-item"
      onClick={handleOpenModale}
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
