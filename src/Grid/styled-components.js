import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 0.5fr);
  height: 100%;
  width: 100%;
  gap: 15px;
`;
export const OpacityOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  border-radius: 12px;
`;
//test style to force grid ratio and always make it fit its parent
export const GridRatioWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/2;
  padding-bottom: 20px;
`;
