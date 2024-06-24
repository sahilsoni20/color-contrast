import { CardLeft, CardRight } from './components';

function App() {
  return (
    <div className="container">
      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Calculate the contrast ratio of text and background
      </h2>
      <div className="card">
        <CardLeft />
        <CardRight 
          textColor=''
          backgroundColor=''
        />
      </div>
    </div>
  );
}

export default App;
