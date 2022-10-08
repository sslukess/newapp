
import './App.css';
import '../Utils/Color Pallet/ColorPallet.css'
import Header from '../Components/Header/header';
import ScreenSizeProvider from '../Utils/Screen Size Media Queries/ScreenSize';
import Main from '../Containers/Main/Main'


function App() {

  

  return (
    <>
      <ScreenSizeProvider>
        <Header />
        <Main></Main>
      </ScreenSizeProvider>
    </>
  )
};


export default App;
