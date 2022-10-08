
import './App.css';
import '../Utils/Color Pallet/ColorPallet.css'
import Header from '../Components/Header/header';
import ScreenSizeProvider from '../Utils/Screen Size Media Queries/ScreenSize';


function App() {

  

  return (
    <>
      <ScreenSizeProvider>
        <Header />
        <main>
        </main>
      </ScreenSizeProvider>
    </>
  )
};


export default App;
