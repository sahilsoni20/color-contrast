export const getOverallStars = (
  grade: string,
  largeTextStars: number,
  smallTextStars: number
): string => {
  if (largeTextStars === 3 && smallTextStars === 3) return "★★★★★";

  switch (grade) {
    case "Super":
      return "★★★★★";
    case "Very Good":
      return "★★★★";
    case "Good":
      return "★★★";
    case "Poor":
      return "★★";
    case "Very Poor":
      return "★";
    default:
      return "";
  }
};

export const getStarsForLargerText = (ratio: number): number => {
  if (ratio >= 3) return 3;
  return 1;
};

export const getStarsForSmallerText = (ratio: number): number => {
  if (ratio >= 7) return 3;
  if (ratio >= 4.5) return 2;
  return 1;
};
