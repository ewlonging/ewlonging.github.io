import { useState } from "react";
import "./Stock-styling.css";
import "./Stock-styling.css";

function StockForm({ onAddStock }) {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const handleAddStock = () => {
    if (symbol && quantity && purchasePrice) {
      onAddStock({ symbol, quantity, purchasePrice });
      setSymbol("");
      setQuantity("");
      setPurchasePrice("");
    }
  };

  function handleSymbolChange(event) {
    setSymbol(event.target.value.toUpperCase());
  }

  function handleQuantityChange(event) {
    const value = parseInt(event.target.value);
    setQuantity(value);
  }

  function handlePriceChange(event) {
    setPurchasePrice(event.target.value);
  }

  return (
    <div>
      <div className="inputContainers">
        <input
          type="text"
          className="stock-symbol"
          placeholder="Enter Symbol"
          value={symbol}
          onChange={handleSymbolChange}
        />

        <input
          type="number"
          className="stock-quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />

        <input
          type="number"
          id="purchasePrice"
          className="purchase-price"
          placeholder="Purchase Price"
          value={purchasePrice}
          onChange={handlePriceChange}
        />

        <button className="add-stock-button" onClick={handleAddStock}>
          Add Stock
        </button>
      </div>
    </div>
  );
}

export default StockForm;
