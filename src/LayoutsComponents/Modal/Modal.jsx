import { useState } from 'react'
import styled from 'styled-components'

const ModaleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModaleBody = styled.div`
  background-color: white;
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
