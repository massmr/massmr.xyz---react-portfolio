import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 10px;
  margin-top: 10px;
`;

const BannerTitle = styled.h1`
  font-family: 'Major Mono Display', monospace;
  font-size: 45px;
  height: 60px;
  color: #F8F9FA;
`;

const BannerSubTitle = styled.h2`
   font-family: 'Major Mono Display', monospace;
   font-size: 18px;
   color: #F8F9FA;
   margin: 15px 0 10px 0;
`;

const BannerText = styled.h4`
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  color: #F8F9FA;
  font-weight: 300;
`;

const StrongText = styled.span`
  font-weight: 900;
  color: #9B5DE5;
`; 

export const Banner = () => {
  return (
    <>
      <BannerWrapper>
        
        <BannerTitle>Massmr</BannerTitle>
        
        <BannerSubTitle>web developer</BannerSubTitle>
        
        <BannerText>
          Enter the <StrongText>digital realm</StrongText>
        </BannerText>

      </BannerWrapper>
    </>
  );
};
