export const ComingSoon = () => {
  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const contentStyle = {
    color: '#F8F9FA',
    fontSize: '30px',
    fontFamily: `'Jost', sans-serif`,
  }
  return (
    <div style={containerStyle}>
      <h1 style={contentStyle}>Coming soon</h1>
    </div>
  )
}
