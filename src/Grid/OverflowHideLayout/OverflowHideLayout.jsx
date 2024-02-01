import styled from 'styled-components';

const Hidder = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export const HiddingContainer = ({ children })  => {
  return (
    <Hidder>
      {children}
    </Hidder>
  );
}
