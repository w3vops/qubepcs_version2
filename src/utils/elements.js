import styled from "styled-components";
export const palette = {
  black: '#000000',
  white: '#FFFFFF',
  byzantium: '#793661',
  CadmiumOrange: '#EF9443',
  grayish: '#f8f9fa'
}

export const typeScale = {
  header1: '4.209rem',
  header2: '3.157rem',
  header3: '2.369rem',
  header4: '1.777rem',
  header5: '1.333rem',
  paragraph: '1rem',
  subtext: '0.75rem',
}


export const HeaderOne = styled.h1`
  font-size: ${typeScale.header1};
  font-family: 'Teko', sans-serif;
`;
export const HeaderTwo = styled.h2`
  font-size: ${typeScale.header2};
  font-family: 'Teko', sans-serif;
`;
export const HeaderThree = styled.h3`
  font-size: ${typeScale.header3};
  font-family: 'Teko', sans-serif;

`;
export const HeaderFour = styled.h4`
  font-size: ${typeScale.header4};
  font-family: 'Athiti', sans-serif;
`;
export const HeaderFive = styled.h5`
  font-size: ${typeScale.header1};
  font-family: 'Athiti', sans-serif;
`;
export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  line-height: 220%;
`;
export const SubText = styled.p`
  font-size: ${typeScale.subtext};
`;
export const Container = styled.div``;