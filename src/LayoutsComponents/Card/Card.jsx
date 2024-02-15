import './Card.css'

export const Card = ({ 
  customClasses,
  isActive, 
  children,
  optionalProp = null }) => {

  const classNames = `project-card-item ${customClasses}`;

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

//custom classes must have this format according to css
//add further custom classes to css stylesheet : 
/*
{project-${cardCategory} ${isActive ? `project-${cardCategory}-active` : `project-${cardCategory}-not-active`} ${optionalProp ? `project-description-reset-width` : ``}
*/
