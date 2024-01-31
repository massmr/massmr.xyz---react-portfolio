import styled from 'styled-components'

const SiteHeader = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const HeaderLogo = styled.h3`
  color: #F8F9FA; 
  font-family: 'Jost', sans-serif;
`
const HeaderButton = styled.button `
  font-family: 'Jost', sans-serif;
  color: #F8F9FA;
  background-color: transparent;
  border-radius: 20px;
  border:1px solid #F8F9FA;
  padding: 0 10px;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <>
    <SiteHeader>
      
      <HeaderLogo>MM</HeaderLogo>
      <nav>
        <HeaderButton>CONTACT</HeaderButton>
      </nav>

    </SiteHeader>
    </>
  );
};
