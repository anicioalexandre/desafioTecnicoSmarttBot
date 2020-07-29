import styled from 'styled-components';

export const CurrenciesListStyle = styled.div`
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  color: #000;
  font-weight: 400;
  height: 60vh;
  margin: 1%;
  min-width: 150px;
  overflow-x: hidden;
  overflow: auto;
  text-align: center;
  width: 15%;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background: gray;
    border-radius: 9px;
    margin: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e5ecf4;
    border-radius: 9px;
    border: 0.5px solid gray;
  }
`;
