import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: space-evenly;
  min-width: 150px;
  width: 100%;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(7, 171, 150, 0.7);
  }
    
  50% {
    box-shadow: 0 0 0 12px rgba(0, 180, 157, 0);
  }
    
  100% {
    box-shadow: 0 0 0 0 rgba(3, 107, 94, 0.7);
  }
`;

export const ButtonStyle = styled.button`
  align-items: center;
  animation-name: ${pulse};
  animation-duration: 2s;
  animation-iteration-count: ${({ animation }) => animation};
  animation-timing-function: linear;
  background: #00b49d;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 0 5px;
  outline: none;
  width: 30%;
  &:hover {
    opacity: 0.8;
  }
`;

export const InputStyle = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  padding: 14px 8px;
  width: 70%;
`;

export const CurrencyName = styled.p`
  align-items: center;
  background: ${(props) => props.background};
  border-bottom: 0.1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  color: ${(props) => props.color};
  display: flex;
  font-weight: 500;
  height: 45px;
  justify-content: center;
  margin: 0;
`;

export const CurrenciesListStyle = styled.div`
  background: #c4c4c4;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  font-weight: 350;
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
    border-radius: 3px;
    margin: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e5ecf4;
    border-radius: 3px;
    border: 0.5px solid gray;
  }
`;
