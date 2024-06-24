import { getLuminance } from "./getLuminance";

export const getContrastRatio = (
  foreGround: string,
  background: string
): number => {
  const lum1 = getLuminance(foreGround);
  const lum2 = getLuminance(background);
  const brightest = Math.max(lum1, lum2);
  const darket = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darket + 0.05);
};
