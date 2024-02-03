//import styles
import './Grid.css';
import { Container,
  Grid, 
  OpacityOverlay, 
  ResumeIconContainer, 
  ResumeIcon, 
  ResumeText } from './styled-components.js'

//import components
import { ImagesContainer } from './ImagesContainer/ImagesContainer.jsx';
import { LinkItem } from './LinkItem/LinkItem.jsx';
import { GridItem } from './GridItem/GridItem.jsx';

//import layout design patterns components
import { HiddingContainer } from '../LayoutsComponents/OverflowHideLayout/OverflowHideLayout.jsx';
import { Modale } from '../LayoutsComponents/Modal/Modal.jsx';
import { LeftHandComponent, RightHandComponent } from '../LayoutsComponents//SplitScreen/SplitComponents.jsx';
import { SplitScreen } from '../LayoutsComponents/SplitScreen/SplitScreen.jsx';

//import assets
import resumeIcon from "./assets/resume-icon.png";
import MDHome from './assets/MDHobileHome.png';
import OMF from './assets/ohmyfoodmac.png';
import MDPortrait from './assets/FM20.jpg'

export const BentoGrid = ({ openModale }) => {

  //Definitely need to transfer this in a separate css file 
  //to clarify this file component
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
  
  //callback styles for modale display from App()
  //This style only applies to the item 6
  //Each item that has a modal must have a style to send to App()
  //Maybe I should transfer this to App.css
  //Maybe to the item itself, need to think about
  const ModaleWrapperItem6Style = {
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '30px',
    gap: '40px',
  }
  const ModaleContentItem6Style = {
    width: '50px !important',
    height: '50px !important',
  }

  return (
    <Container>
      <Grid>

        <GridItem 
          name="item1"
          openModale={openModale} >

          <HiddingContainer>

            <OpacityOverlay />
            <ImagesContainer 
              style={Item1ImageStyle}
              source={MDPortrait} 
            />
            <button style={Item1ButtonStyle} >Projects</button>
          
          </HiddingContainer>

        </GridItem>

        <GridItem name="item2">
          
        </GridItem>

        <GridItem name="item3"/>

        <GridItem name="item4"/>

        <GridItem name="item5"/>

        <GridItem 
          name="item6" 
          openModale={() => openModale(
            <div style={ModaleWrapperItem6Style}>
              <div style={ModaleContentItem6Style}>
                <a href="https:github.com/massmr"
                  target="_blank">
                  <LinkItem
                    className="modale-link-item"
                    iconName="fa-github" 
                    modaleState
                    displayState/>
                  </a>
              </div>
              <div style={ModaleContentItem6Style}>
                <a href="https://www.linkedin.com/in/massimo-marcellin-987703230/"
                  target="_blank">
                  <LinkItem 
                    className="modale-link-item"
                    iconName="fa-linkedin-in" 
                    modaleState
                    displayState/>
                  </a>
              </div>
              <div style={ModaleContentItem6Style}>
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
          )} >
          
          <LinkItem 
            iconName="fa-github" 
            displayState/>
          <LinkItem 
            iconName="fa-linkedin-in" 
            displayState/>
          <LinkItem 
            iconName="fa-x-twitter" 
            displayState/>
          <LinkItem iconName="fa-github" />

        </GridItem>
        
        <GridItem name="item7">
      
          <HiddingContainer>

            <ResumeText>RESUME</ResumeText>
            <ResumeIconContainer>
              <ResumeIcon src={resumeIcon}></ResumeIcon>
            </ResumeIconContainer>

          </HiddingContainer>

        </GridItem>

        <GridItem name="item8"/>

      </Grid>
    </Container>
  );
};


