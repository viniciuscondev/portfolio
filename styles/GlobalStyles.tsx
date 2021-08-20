import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, h2, h3, p, a, img {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', sans-serif;    
  }    
`;

const theme = {
  colors: {
    yellow: '#F4C82D',
    blue: '#60AAEE',
    background: '#FFF9E5',
  },
};

function GlobalStyles({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>Vinícius Condé - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />        
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/56/personal-computer_1f4bb.png" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}
export default GlobalStyles;