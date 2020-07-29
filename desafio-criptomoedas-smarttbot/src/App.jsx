import React from 'react';
import GlobalStyle from './styles/Global';
import Header from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
