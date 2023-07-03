import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <PinkBox>
          <WhiteInPinkBox></WhiteInPinkBox>
        </PinkBox>
        <BlackBox>
          <BlueInBlackBox></BlueInBlackBox>
          <SkyblueInBlackBox></SkyblueInBlackBox>
        </BlackBox>
        <BlackBox>
          <WhiteInBlackBox></WhiteInBlackBox>
        </BlackBox>
        <YellowBox></YellowBox>
        <GreenBox>
          <RedInGreenBox></RedInGreenBox>
          <WhiteInGreenBox></WhiteInGreenBox>
        </GreenBox>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 4px;
  position: relative;
  width: 600px;
  height: 600px;
  background-color: black;
  padding: 4px;
  margin: 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

const PinkBox = styled(Box)`
  positon: relative;
  background-color: #f91aff;
`;

const BlackBox = styled(Box)`
  position: relative;
  background-color: black;
`;

const YellowBox = styled(Box)`
  background-color: yellow;
`;

const GreenBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border: 4px solid black;
  background-color: #40fe00;
`;

const MiniBox = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
`;

const WhiteInPinkBox = styled(MiniBox)`
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  background-color: #fff;
`;

const WhiteInBlackBox = styled(MiniBox)`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50.5%, -50%);

  border: 4px solid black;
  border-right: 0;
  background-color: #fff;
`;

const WhiteInGreenBox = styled(MiniBox)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  border: 4px solid black;
  border-bottom: 0;
  background-color: #fff;
`;

const RedInGreenBox = styled(MiniBox)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border-top: 4px solid black;
  border-right: 4px solid black;
  background-color: #f90000;
`;

const SkyblueInBlackBox = styled(MiniBox)`
  bottom: 0;
  right: 0;

  border-top: 4px solid black;
  background-color: #3fffff;
`;

const BlueInBlackBox = styled(MiniBox)`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 4px solid black;
  background-color: #001fff;
`;
