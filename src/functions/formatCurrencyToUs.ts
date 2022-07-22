export const formatCurrencyToUs = (value: string) =>
  value.replace(/[^\d,]+/g, "").replace(",", ".");
