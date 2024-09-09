export const formatCurrency = (
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};

export const formatCurrencyUSD = (
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string => {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
};
