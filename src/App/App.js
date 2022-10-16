import './App.css';
import '../Utils/Color Pallet/ColorPallet.css';
import Header from '../Components/Organisms/Header/header';
import Footer from '../Components/Organisms/Footer/Footer'
import ScreenSizeProvider from '../Utils/Screen Size Media Queries/ScreenSize';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HomepageBody from '../Pages/Home/HomePageBody'


let pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame";

function App() {

  return (
    <>
      <ScreenSizeProvider>
        <Header />

          <main>
            <HomepageBody pText={pText} />
            <Footer />
          </main>

          
      </ScreenSizeProvider>
    </>
  );
};


export default App;