import './ImagesContainer.css';

export const ImagesContainer = ({ source, name }) => {
 
  return(
    <div className={name} >
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
