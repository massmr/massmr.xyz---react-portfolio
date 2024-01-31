//import packages
import styled from 'styled-components';
import './Grid.css';

//import components
import { LeftHandComponent, RightHandComponent } from './SplitScreen/SplitComponents.jsx';
import { SplitScreen } from './SplitScreen/SplitScreen.jsx';
import { ImagesContainer } from './ImagesContainer/ImagesContainer.jsx';

//import assets
import resumeIcon from "./assets/resume-icon.png";
import MDHome from './assets/MDHobileHome.png';
import OMF from './assets/ohmyfoodmac.png';

const Container = styled.section`
  height: calc(100vh - 204.5px);
  padding: 10px;
  margin: 25px 0 10px 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 0.5fr);
  height: 100%;
  width: 100%;
  gap: 15px;
  overflow: hidden;
`;
const GridItem = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
const ResumeIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
`;
const ResumeIcon = styled.img`
  object-fit: contain;
  height: calc(100% / 1.8);
  opacity: 0.2;
`;
const ResumeText = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Jost',sans-serif;
  color: white;
  z-index: 2;
  font-size: 20px;
`;

export const BentoGrid = () => {

  const splitScreenStyle = {
    height: '100%',
    padding: '10px',
    background: 'rgb(155,93,229)',
    background: 'linear-gradient(30deg, rgba(155,93,229,1) 0%, rgba(106,62,148,0.9999504089355469) 100%)', 
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

          <SplitScreen
            style={splitScreenStyle}
            leftWidth="50%" 
            rightWidth="50%">

            <LeftHandComponent
              name={MDHome} 
            />

            <RightHandComponent 
              style={rightHandStyle}
              name="Projects" 
            />
          </SplitScreen>

          <ImagesContainer source={OMF} />

        </GridItem>

        <GridItem className="item2"/>

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


