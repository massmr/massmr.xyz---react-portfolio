export const ImagesContainer = ({ source, style }) => {
 
  return(
    <div style={style} >
      <ProjectImage source={source} />
    </div>
  );
};

export const ProjectImage = ({ source }) => {
  const style = {
    objectFit: 'cover',
  };

  return(
    <img style={style} src={source} alt="Project"></img>
  );
};
