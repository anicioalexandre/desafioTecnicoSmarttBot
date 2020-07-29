import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15vw;
`;

export const InputButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  min-width: 150px;
  width: 100%;
`;

export const ButtonStyle = styled.button`
  align-items: center;
  background: green;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 0 5px;
  width: 30%;
  &:hover {
    opacity: 0.8;
  }
`;

export const InputStyle = styled.input`
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  padding: 14px 8px;
  width: 70%;
`;

export const CurrencyName = styled.p`
  align-items: center;
  border-bottom: 0.1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  margin: 5px 0;
`;

export const CurrenciesListStyle = styled.div`
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  color: #000;
  font-weight: 400;
  height: 60vh;
  margin: 5px 0;
  min-width: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  width: 100%;
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
