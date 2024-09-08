export const formatCurrency = (
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};

function formatCurrencyUSD(amount: number): string {
  // Check if the input is a valid number
  if (isNaN(amount)) {
    throw new Error("Invalid number");
  }

  // Format the number as USD currency
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
