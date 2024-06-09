import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StockForm from "./Components/Stock-form";
import StockList from "./Components/Stock-list";

function App() {
  const [stocks, setStocks] = useState([]);

  const handleAddStock = (newStock) => {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${newStock.symbol}&apikey=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        const currentPrice = parseFloat(data["Global Quote"]["05. price"]);
        setStocks((prevStocks) => [
          ...prevStocks,
          { ...newStock, currentPrice },
        ]);
      })
      .catch((error) => console.error("Error fetching stock data:", error));
  };

  return (
    <>
      <h1>Finance Dashboard</h1>
      <StockForm onAddStock={handleAddStock} />
      {stocks.length > 0 && <StockList stocks={stocks} />}
    </>
  );
}

export default App;
