import './App.css';
import '../Utils/Color Pallet/ColorPallet.css'
import Header from '../Components/Header/header';
import ScreenSizeProvider from '../Utils/Screen Size Media Queries/ScreenSize';
import Main from '../Containers/Main/Main'
import ContentBox from '../Components/Content Box/ContentBox';


function App() {

  

  return (
    <>
      <ScreenSizeProvider>
        <Header />
        <Main>
          <ContentBox content='Hello World' divClass='d-flex justify-content-center'/>
        </Main>
      </ScreenSizeProvider>
    </>
  )
};


export default App;