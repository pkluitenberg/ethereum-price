import './App.css';
import GetFormattedPrice from "./getFormattedPrice";

function App() {
  const data = GetFormattedPrice()
  return (
      <div className="App">
        <h3>ethereum price</h3>
          {data.formattedPrice}
          <br/>
          <p className='timestamp'>
              as of {data.formattedTimestamp}
          </p>

      </div>
  );
}

export default App;
