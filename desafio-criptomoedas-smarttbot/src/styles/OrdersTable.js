import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 20px;
    min-height: 390px;
    width: 240px;
  table {
    border-bottom: 1px solid #212121;
    border-collapse: collapse;
    border-top: 1px solid #212121;
    color: white;
    padding-bottom: 12px;
    padding-top: 12px;
    padding: 8px;
    text-align: center;
    text-align: left;
    width: 100%;
  }
  td {
    border-bottom: 1px solid #212121;
    border-top: 1px solid #212121;
    padding 8px;
  }
  th {
    background: #212121;
    padding-bottom: 12px;
    padding-top: 12px;
  }
  tr {
    text-align: center;
  }
`;
