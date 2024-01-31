import { ImagesContainer, ProjectImage } from '../ImagesContainer/ImagesContainer.jsx';

export const LeftHandComponent = ({ 
  name
  , style = '', 
  }) => (

  <ImagesContainer
    style={style}
    source={name} 
  />
);

export const RightHandComponent = ({ 
  name, 
  style = ''
  }) => (
    <h1 style={style}>
      {name}
    </h1>
);
