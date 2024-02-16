import './ServiceDetailListItem.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
library.add({ faCheck })

export const ServiceDetailListItem = ({ detail }) => {

  return (
    <div className="service-detail-wrapper">
      <FontAwesomeIcon 
        className="service-detail-icon"
        icon="fa-solid fa-check" />
      <p className="service-detail-text">{detail}</p>
    </div>
  );
};
