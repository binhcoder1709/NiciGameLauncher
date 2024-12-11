export const formatVND = (x: number) => {
  return x.toLocaleString("en-US", { style: "currency", currency: "VND" });
};
