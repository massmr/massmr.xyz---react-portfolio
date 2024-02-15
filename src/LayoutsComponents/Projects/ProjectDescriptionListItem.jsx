import './ProjectDescriptionListItem.css'

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
library.add({ faArrowUpRightFromSquare })

export const ProjectDescriptionListItem = ({ project }) => {
  const { description, url, name } = project;

  return (
    <div className="project-description-text-wrapper">
      <p className="project-description-subtitle">{description}</p>
              
      <div className="project-description-anchor-wrapper">
        <a 
          className="project-description-anchor"
          href={url} target="_blank">
          <h1 className="project-description-title">
            Visit&nbsp; 
            <span className="project-description-proj-name">
              {name}
            </span>
          </h1>
          <FontAwesomeIcon 
            className="project-description-anchor-icon" 
            icon="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </div>
  );
};
