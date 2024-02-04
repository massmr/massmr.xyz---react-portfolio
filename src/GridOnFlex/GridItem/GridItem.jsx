export const GridItem = ({ children, name, openModale }) => {
  
  const handleOpenModale = () => {
    openModale();
  };

  return (
    <div
      className={name}
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
