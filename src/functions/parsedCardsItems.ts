import { OutputsProps } from "../types/Outputs.types";

export const parsedCardsItems = (items: OutputsProps[]) => {
  const onlyEntradas = items.filter((item) => item.type === "entrada") || [];

  const entradaValues = onlyEntradas.reduce(
    (prev, curr) => Number(curr.value) + prev,
    0
  );

  const onlySaidas = items.filter((item) => item.type === "saida") || [];

  const saidasValues = onlySaidas.reduce(
    (prev, curr) => Number(curr.value) + prev,
    0
  );

  const total = entradaValues - saidasValues;

  const dashboardCards = [
    {
      id: 1,
      title: "Total",
      value: total.toFixed(2),
    },
    {
      id: 2,
      title: "Entradas",
      value: entradaValues.toFixed(2),
    },
    {
      id: 3,
      title: "Saídas",
      value: saidasValues.toFixed(2),
    },
  ];

  return {
    totalValues: dashboardCards,
    items: {
      onlyEntradas,
      onlySaidas,
    },
  };
};
