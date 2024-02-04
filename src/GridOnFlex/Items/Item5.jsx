import { LinkItem } from '../LinkItem/LinkItem.jsx';
import './Item5.css'

export const Item5 = () => {
  
  return (
    <div className="item-5-wrapper">
      <LinkItem 
        iconName="fa-github" 
        displayState/>
      <LinkItem 
        iconName="fa-linkedin-in" 
        displayState/>
      <LinkItem 
        iconName="fa-x-twitter" 
        displayState/>
      <LinkItem 
        iconName="fa-github"/>
    </div>
  );
};

export const Item5ModaleContent = () => (
  <div className="item-5-modale-wrapper">
    <div className="item-5-modale-content">
      <a href="https:github.com/massmr"
        target="_blank">
        <LinkItem
          className="modale-link-item"
          iconName="fa-github" 
          modaleState
          displayState/>
      </a>
    </div>
    <div className="item-5-modale-content">
      <a href="https://www.linkedin.com/in/massimo-marcellin-987703230/"
        target="_blank">
        <LinkItem 
          className="modale-link-item"
          iconName="fa-linkedin-in" 
          modaleState
          displayState/>
      </a>
    </div>
    <div className="item-5-modale-content">
      <a href="https://twitter.com/massmr_"
        target="_blank">
        <LinkItem 
          className="modale-link-item"
          iconName="fa-x-twitter" 
          modaleState
          displayState/>
      </a>
    </div>
  </div>
);
