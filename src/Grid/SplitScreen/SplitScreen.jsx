import styled from 'styled-components';

//styled-components package usage
const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  width: ${props => props.width};
`;

export const SplitScreen = ({
  children,
  style,
  leftWidth = '50%',
  rightWidth = '50%',
}) => {

  const [left, right] = children;
  
  //each side is a div wrapped inside a container
  return(
    <Container style={style} >
      <Pane width={leftWidth}>
        {left}
      </Pane>
      <Pane width={rightWidth}>
        {right}
      </Pane>
    </Container>
  )
};
