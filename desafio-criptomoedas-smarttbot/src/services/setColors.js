export const setActionColor = (action) => {
  if (action === 'COMPRA') return '#00a59d';
  if (action === 'VENDA') return '#b50214';
  return '#000';
};

export const setInfoColor = (number) => {
  if (number >= 0) return "#00b49d"
  return "#b50214"
}
