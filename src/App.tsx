import { useState } from "react";
import { CardLeft, CardRight } from "./components";

function App() {
  const [textColor, setTextColor] = useState("#489546");
  const [backgroundColor, setBackgroundColor] = useState("#90EE90");

  return (
    <div className="container">
      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Calculate the contrast ratio of text and background
      </h2>
      <div className="card">
        <CardLeft
          textColor={textColor}
          setTextColor={setTextColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
        <CardRight textColor={textColor} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}

export default App;
