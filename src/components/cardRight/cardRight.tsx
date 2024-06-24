import "./cardRight.css";
import { useEffect, useState } from "react";
import { ContentItemType, getRandomText } from "../../utilities";

type CardRightProps = {
  textColor: string;
  backgroundColor: string;
};

export const CardRight = ({ textColor, backgroundColor }: CardRightProps) => {
  const [contentItem, setContentItem] = useState<ContentItemType>({
    title: "",
    text: "",
  });

  useEffect(() => {
    setContentItem(getRandomText());
  }, []);

  return (
    <div className="cardRight" style={{ backgroundColor: backgroundColor }}>
      <h3 style={{ color: textColor }}>{contentItem.title}</h3>
      <p style={{ color: textColor }}>{contentItem.text}</p>
    </div>
  );
};
