import './ImagesContainer.css';

export const ImagesContainer = ({ source, name }) => {
 
  return(
    <div className={name} >
      <ProjectImage source={source} />
    </div>
  );
};

export const ProjectImage = ({ source }) => {
  
  return(
    <img
      className="item-img"
      src={source} 
      alt="Project"></img>
  );
};
