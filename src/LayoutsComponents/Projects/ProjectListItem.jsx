export const ErrorProjectListItem = ({ project }) => {
  const { name, description } = project;

  return (
    <div className="project-name">
      <h1 className={`project-h1 ${isSelected ? 'project-h1-active' : '' }`}>{name}</h1>
    </div>
  ); 
}; 

export const ProjectListItem = ({ project }) => {
  const { name, description } = project;

  return (
    <div className="project-name">
      <h1 className="project-h1">{name}</h1>
    </div>
  ); 
}; 
