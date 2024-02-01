import { useState } from 'react'
import styled from 'styled-components'

const ModaleBackground = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModaleBody = styled.div`
  background-color: white;
  position: relative;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const Modale = ({ children, 
  state, 
  handleClose }) => {

  return(
    <>
      { state &&
        <ModaleBackground onClick={handleClose}>
          <ModaleBody onClick={e => e.stopPropagation()}>
            <button onClick={handleClose}>Hide Modal</button>
            {children}
          </ModaleBody>
        </ModaleBackground>
      }
    </>
  );
};
