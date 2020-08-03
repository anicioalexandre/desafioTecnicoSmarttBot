import React from 'react';
import Button from './smallComponents/Button';
import { connect } from 'react-redux';
import { Container, PageDisplay } from '../styles/RankingPagination';

const RankingPagination = ({ previous, next, currenciesInfo }) => {
  const [startPage, setStartPage] = previous;
  const [endPage, setEndPage] = next;
  return (
    <Container>
      <Button
        background={startPage === 0 ? 'gray' : '#00b49d'}
        disabled={startPage === 0}
        onClick={() => {
          setStartPage(startPage - 10);
          setEndPage(endPage - 10);
        }}
      >
        Anterior
      </Button>
      <PageDisplay data-testid="page-display">
        {endPage / 10}/{Math.ceil(Object.keys(currenciesInfo).length / 10)}
      </PageDisplay>
      <Button
        background={endPage >= Object.keys(currenciesInfo).length ? 'gray' : '#00b49d'}
        disabled={endPage >= Object.keys(currenciesInfo).length}
        onClick={() => {
          setStartPage(startPage + 10);
          setEndPage(endPage + 10);
        }}
      >
        Próximo
      </Button>
    </Container>
  );
};

const mapState = (state) => ({
  currenciesInfo: state.currenciesInfos.currenciesInfo,
});

export default connect(mapState)(RankingPagination);
