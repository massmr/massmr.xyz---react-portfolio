import { useState } from 'react';
import styled from 'styled-components';

import { Header } from './Header/Header.jsx';
import { Banner } from './Banner/Banner.jsx';
import { BentoGrid } from './Grid/Grid.jsx';
import { Modale } from './LayoutsComponents/Modal/Modal.jsx';

const BodyBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background: rgb(102,103,166);
  background: linear-gradient(30deg, rgba(102,103,166,1) 0%, rgba(46,45,66,1) 100%); 
`;

const App = () => {

 const [isModaleVisible, setIsModaleVisible] = useState(false);

  const handleModaleOpen = () => {
    setIsModaleVisible(true);
  };

  const handleModaleClose = () => {
    setIsModaleVisible(false);
  };
  
  return(
    <>
      <BodyBackground>

        { isModaleVisible && (
          <Modale 
            state={isModaleVisible} 
            handleClose={handleModaleClose}>
          </Modale>
        )}
        <Banner />
        <BentoGrid openModale={handleModaleOpen} />
      </BodyBackground>
    </>
  );
};

export default App
