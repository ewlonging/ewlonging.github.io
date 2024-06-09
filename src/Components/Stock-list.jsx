import React, { useState, useEffect } from "react";
import "./Stock-styling.css";

function StockList({ stocks }) {
  return (
    <div>
      {stocks.length === 0 && <p>No stocks available</p>}
      {stocks.length > 0 && (
        <div>
          {stocks.map((stock, index) => (
            <div key={stock.symbol} className="stock-item">
              <p>Symbol: {stock.symbol}</p>
              <p>Quantity: {stock.quantity}</p>
              <p>
                Purchase Price:{" "}
                {(stock.purchasePrice / stock.quantity).toFixed(2)}
              </p>
              <p>Current Price: {stock.currentPrice}</p>
              <p
                style={{
                  color:
                    stock.currentPrice > stock.purchasePrice ? "green" : "red",
                }}
              >
                Profit/Loss:{" "}
                {(
                  stock.currentPrice -
                  stock.purchasePrice / stock.quantity
                ).toFixed(2)}
              </p>
              {index !== stocks.length - 1 && <hr />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StockList;
