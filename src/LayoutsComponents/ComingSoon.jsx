export const ComingSoon = () => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  }
  const contentStyle = {
    position: 'absolute',
    color: '#F8F9FA',
    fontSize: '30px',
    fontFamily: `'Jost', sans-serif`,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  return (
    <div style={containerStyle}>
      <h1 style={contentStyle}>Coming soon</h1>
    </div>
  )
}
