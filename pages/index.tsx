import styled from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';

const Main = styled.main`
  width: 100vw;
`;

const FirstSection = styled.section`
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.nav`  
  position: fixed;
  background-color: ${({ theme }) => theme.colors.yellow};
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 1;

  li {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    font-size: 18px;
  }
`;

const Window = styled.div`
  background-color: white;
  width: 800px;
  height: 450px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-size: 64px;
    font-weight: 400;    
    border-bottom: 2px solid black;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
  }
`;

const WindowTopBar = styled.div`
  position: absolute;    
  top: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const WindowButton = styled.div`
    background-color: #FFFF;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 15px;
    box-shadow: 2px 2px 2px;
    transition: .3s;

    &:hover {
        filter: brightness(170%);
    }
`;

const Portfolio = styled.section`
  height: 100vh;
  width: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

function Home() {
  return (
    <GlobalStyles>
      <Main>
        <Navbar>
          <li>
            <ul>Home</ul>
            <ul>Portfolio</ul>
            <ul>Contato</ul>
          </li>
        </Navbar>
        <FirstSection>
          <Window>
            <WindowTopBar>
              <WindowButton style={{ background: "#FFC940" }}/>
              <WindowButton style={{ background: "#4098FF" }}/>
              <WindowButton style={{ background: "#FF406E" }}/>
            </WindowTopBar>
            <h1>Vinícius Condé</h1>
            <h2>Desenvolvedor front-end</h2>
          </Window>
        </FirstSection>
        <Portfolio>

        </Portfolio>
      </Main>
    </GlobalStyles>
  );
}

export default Home