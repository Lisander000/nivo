export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
