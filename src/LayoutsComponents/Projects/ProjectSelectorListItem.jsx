export const ProjectSelectorListItem = ({ project, optionalProp1 }) => {
  const { name } = project;

  return (
    <div className="project-name">
      <h1 onClick={() => optionalProp1(name)} className="project-h1">{name}</h1>
    </div>
  ); 
}; 
