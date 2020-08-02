import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 70%;
`;

export const TableContainer = styled.div`
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 15px;
  width: 728px;
  table {
    border-bottom: 1px solid #212121;
    border-collapse: collapse;
    border-top: 1px solid #212121;
    color: black;
    padding-bottom: 24px;
    padding-top: 24px;
    padding: 8px;
    table-layout: fixed:
    text-align: center;
    text-align: left;
    width: 728px;
  }
  th {
    background: #212121;
    color: white;
    padding-bottom: 12px;
    padding-top: 12px;
    min-width: 180px;
  }
  tr {
    text-align: center;
  }
`;

export const TD = styled.td`
  background: #c4c4c4;
  border-bottom: 1px solid #212121;
  border-top: 1px solid #212121;
  color: ${({ color }) => color};
  font-weight: 500;
`;
