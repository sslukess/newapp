import './App.css';
import '../Utils/Color Pallet/ColorPallet.css';
import Header from '../Components/Organisms/Header/header';
import ScreenSizeProvider from '../Utils/Screen Size Media Queries/ScreenSize';
import ContentBox from '../Components/Molecules/Content Box/ContentBox';
import { Container } from 'react-bootstrap';
import Hero from '../Components/Organisms/Hero/Hero'


let pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame";

function App() {

  return (
    <>
      <ScreenSizeProvider>
        <Header />
        <main id='main'>
          <Hero id='hero' text={pText} heading='GRVL//BNE' />
          <Container>
            <ContentBox content='Hello World' heading='heading1' />
          </Container>
        </main>
      </ScreenSizeProvider>
    </>
  );
};


export default App;