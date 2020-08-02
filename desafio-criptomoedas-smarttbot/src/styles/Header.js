import styled from 'styled-components';

export const HeaderStyle = styled.header`
  align-items: center;
  background: #212121;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  font-size: 32px;
  min-height: 15vh;
  justify-content: space-around;
  width: 100%;
  h3 {
    margin: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  h6 {
    margin: 0 40px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
