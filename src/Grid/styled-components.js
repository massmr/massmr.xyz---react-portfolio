import styled from 'styled-components';

export const Container = styled.section`
  height: calc(100vh - 204.5px);
  padding: 10px;
  margin: 25px 0 10px 0;
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
export const ResumeIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
`;
export const ResumeIcon = styled.img`
  object-fit: contain;
  height: calc(100% / 1.8);
  opacity: 0.2;
`;
export const ResumeText = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Jost',sans-serif;
  color: white;
  z-index: 2;
  font-size: 20px;
`;

