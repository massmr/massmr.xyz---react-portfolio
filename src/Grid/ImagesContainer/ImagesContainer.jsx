export const ImagesContainer = ({ source }) => {
  const style = {
    display: 'flex',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  }

  return(
    <div style={style} >
      <ProjectImage source={source} />
    </div>
  );
};

export const ProjectImage = ({ source }) => {
  const style = {
    objectFit: 'contain',
  };

  return(
    <img style={style} src={source} alt="Project"></img>
  );
};
