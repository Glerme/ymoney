import {OutputsProps} from 'types/Outputs.types';

interface useParsedCardItemsReturn {
  id: number;
  title: string;
  value: string;
}

export const parsedCardsItems = (
  items: OutputsProps[],
): useParsedCardItemsReturn[] => {
  const onlyEntradas = items
    .filter(item => item.type === 'entrada')
    .reduce((prev, curr) => Number(curr.value) + prev, 0);

  const onlySaidas = items
    .filter(item => item.type === 'saida')
    .reduce((prev, curr) => Number(curr.value) + prev, 0);

  const total = items.reduce((prev, curr) => Number(curr.value) + prev, 0);

  const dashboardCards = [
    {
      id: 1,
      title: 'Total',
      value: total.toFixed(2),
    },
    {
      id: 2,
      title: 'Entradas',
      value: onlyEntradas.toFixed(2),
    },
    {
      id: 3,
      title: 'Saídas',
      value: onlySaidas.toFixed(2),
    },
  ];

  return dashboardCards;
};
