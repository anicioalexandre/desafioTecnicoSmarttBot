import React from 'react';
import GlobalStyle from './styles/Global';
import Header from './components/Header';
import Routes from './Routes';
import CurrenciesList from './components/CurrenciesList';
import { Container } from './styles/App';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <CurrenciesList />
        <Routes />
      </Container>
    </>
  );
}

export default App;
