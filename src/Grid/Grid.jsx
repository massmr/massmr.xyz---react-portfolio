//import styles
import './Grid.css';
import { Container,
  Grid, 
  GridItem, 
  OpacityOverlay, 
  ResumeIconContainer, 
  ResumeIcon, 
  ResumeText } from './styled-components.js'

//import components
import { LeftHandComponent, RightHandComponent } from './SplitScreen/SplitComponents.jsx';
import { SplitScreen } from './SplitScreen/SplitScreen.jsx';
import { ImagesContainer } from './ImagesContainer/ImagesContainer.jsx';

//import assets
import resumeIcon from "./assets/resume-icon.png";
import MDHome from './assets/MDHobileHome.png';
import OMF from './assets/ohmyfoodmac.png';
import MDPortrait from './assets/FM20.jpg'

export const BentoGrid = () => {

  const splitScreenStyle = {
    height: '100%',
    padding: '10px',
    background: 'rgb(155,93,229)',
    background: 'linear-gradient(30deg, rgba(155,93,229,1) 0%, rgba(106,62,148,0.9999504089355469) 100%)', 
  }
  const Item1ImageStyle = {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
  const Item1ButtonStyle = {
    position: 'relative',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: '8px',
    border: 'none',
    padding: '4px 17px',
    color: '#F8F9FA',
    fontFamily: `'Jost',sans-serif`,
    letterSpacing: '2px',

  }
  const rightHandStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'calc(100% - 5px)',
    wordWrap: 'break-word',
    fontSize: '12.5vw',
    lineHeight: '0.85',
    fontFamily: `'Major Mono Display',monospace`,
    textAlign: 'center',
    textShadow: '1px 1px 25px rgba(255,255,255,0.3)',
  }

  return (
    <Container>
      <Grid>

        <GridItem className="item1">
          <ImagesContainer 
            style={Item1ImageStyle}
            source={MDPortrait} 
          />
          <OpacityOverlay />
          <button style={Item1ButtonStyle} >Projects</button>
        </GridItem>

        <GridItem className="item2">
          
        </GridItem>

        <GridItem className="item3"/>

        <GridItem className="item4"/>

        <GridItem className="item5"/>

        <GridItem className="item6"/>

        <GridItem className="item7">

          <ResumeText>RESUME</ResumeText>
          <ResumeIconContainer>
            <ResumeIcon src={resumeIcon}></ResumeIcon>
          </ResumeIconContainer>

        </GridItem>

        <GridItem className="item8"/>

      </Grid>
    </Container>
  );
};


