import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  margin: 3vh 2vw;
  @media only screen and (min-width: 1600px) {
    margin: 5vh 15vw;
  }
`;
