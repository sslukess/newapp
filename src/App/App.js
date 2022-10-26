import './App.css';
import '../Utils/Color Pallet/ColorPallet.css';
import Header from '../Components/Organisms/Header/header';
import Footer from '../Components/Organisms/Footer/Footer'
import ScreenSizeProvider from '../Utils/Screen Size Media Queries/ScreenSize';
import RouterProvider from '../Utils/Router/RouterProvider'
import PageRender from '../Utils/Router/Routed Page';
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../Utils/Apollo/ApolloClient.mjs'

let pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame";

function App() {

  const [page, setPage] = useState();
  let value = {page, setPage};
  //console.log(`value at app = `);
  //console.log(value);

  return (
    <>
      <ScreenSizeProvider>
        <ApolloProvider client={client} >
        <RouterProvider value={value}>
          <Header />
          <main>
            <PageRender pText={pText} />
          </main>
          <Footer />
        </RouterProvider>
        </ApolloProvider>
      </ScreenSizeProvider>
    </>
  );
};


export default App;