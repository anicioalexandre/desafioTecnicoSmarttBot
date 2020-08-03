import styled from 'styled-components';

export const Container = styled.div`
  background: #c4c4c4;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  display: grid;
  grid-template-rows: 50px;
  margin-bottom: 2vh;
  min-height: 300px;
  min-width: 350px;
  place-items: center;
  h3 {
    align-items: center;
    background: #212121;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    width: 100%;
  }
`;
export const NumberInfo = styled.span`
  color: ${({ color = '#000' }) => color};
  font-weight: 500;
`;
