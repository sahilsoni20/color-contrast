import { GoStarFill, GoStar } from "react-icons/go";
import {
  getContrastGrade,
  getContrastRatio,
  getOverallStars,
  getStarsForLargerText,
  getStarsForSmallerText,
} from "../../utilities";

type RatioContrastProps = {
  textColor: string;
  backgroundcolor: string;
};

export const RatioContrast = ({
  textColor,
  backgroundcolor,
}: RatioContrastProps) => {
  const ratioContrast = getContrastRatio(textColor, backgroundcolor);
  const largeTextStars = getStarsForLargerText(ratioContrast);
  const smallTextStars = getStarsForSmallerText(ratioContrast);
  const contrastGrade = getContrastGrade(ratioContrast);

  const overallStars = getOverallStars(
    contrastGrade,
    largeTextStars,
    smallTextStars
  );

  const renderStars = (totalStars: number, filledStars: number) => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(i < filledStars ? <GoStarFill key={i} /> : <GoStar key={i} />);
    }
    return stars;
  };

  const getRatioColorBackground = () => {
    if (contrastGrade === "Poor" || contrastGrade === "Very Poor") {
      return "poor-contrast";
    } else if (contrastGrade === "Good") {
      return "good-contrast";
    } else if (contrastGrade === "Very Good" || contrastGrade === "Super") {
      return "very-good-contrast";
    }
  };

  const getSmallTextBackground = () => {
    if (smallTextStars === 3) {
      return "very-good-contrast";
    } else if (smallTextStars === 2) {
      return "good-contrast";
    } else if (smallTextStars === 1) {
      return "poor-contrast";
    }
    return "";
  };

  const getLargeTextBackground = () => {
    if (largeTextStars === 3) {
      return "very-good-contrast";
    } else if (largeTextStars === 2) {
      return "good-contrast";
    } else if (largeTextStars === 1) {
      return "poor-contrast";
    }
    return "";
  };

  const smallTextColorShades = getSmallTextBackground();
  const largeTextColorShades = getLargeTextBackground();
  const ratioColorShades = getRatioColorBackground();

  return (
    <div className="contrast-section-wrapper">
      <span className="contrast-heading">Contrast</span>
      <div className="cibtrast-ratio-display">
        <div className={`contrast-info ${ratioColorShades}`}>
          <span className="ratio-value">{ratioContrast.toFixed(2)}</span>
          <div className="ratio-value-wrapper">
            <span className="grade-display">{contrastGrade}</span>
            <span className="stars-display">{renderStars(5, overallStars.length)}</span>
          </div>
        </div>
        <div className="text-rating-section">
          <div className={`small-text-rating ${smallTextColorShades}`}>
            <span className="star-symbol">Small Text</span>
          </div>
          <div className={`large-text-rating ${largeTextColorShades}`}>
            <span className="star-symbol">Large Text</span>
          </div>
        </div>
      </div>
    </div>
  );
};
