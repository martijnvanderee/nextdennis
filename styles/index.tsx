import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
  font-size: 12px;
  color:black;
}

*,*:before,*:after{
box-sizing:inherit
};

body{
margin:0;
padding:0;
font-size: 1.5em;
line-height: 2;
font-family: Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial;
}
a{
text-decoration:none;
color:black;

}
button{
  font-size: 15px;
  font-family: Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial;
  line-height: 2;
  border:none;
  font-weight:900;

}
`;

const GlobalCSS = styled.div`
  --spacingXS: 0.5rem;
  --spacingS: 1rem;
  --spacingM: 1.5rem;
  --spacingL: 2rem;
  --fontsizeXS: 0.5em;
  --fontsizeS: 1em;
  --fontsizeM: 1.5em;
  --fontsizeL: 2em;
  --mediaQueryS: 600px;
  --mediaQueryM: 993px;
  --mediaQueryL: 1200px;
  --borderRadiusXS: 0.25rem;
  --borderRadiusS: 0.5rem;
  --borderRadiusM: 1rem;
  --borderRadiusL: 2rem;
  --basicTransition: 0.5s ease;
  --basicBoxShadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  --color1: #f78e1c;
  --color2: #eccf13;
  --color3: #013f5d;
  --color4: #1abebd;
  --color5: #88c937;
`;

export { GlobalCSS, GlobalStyle };
