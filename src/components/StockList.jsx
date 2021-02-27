import axios from "axios";
import React, { useEffect, useState } from "react";
import ChartList from "./ChartList";

/**
 * Component to choose the stock to diplay charts.
 * Sends number of pages and selected stock to the ChartList
 */
export default function StockList() {
  // list of stocks available for display
  const [stocks, setStocks] = useState([]);

  // number of pages for the choosen stock
  const [pages, setPages] = useState(0);

  // chosen stock to display
  const [stock, setStock] = useState("TSLA");

  useEffect(() => {
    // get the list of stocks
    axios("/stock-list/")
      .then(res => {
        setStocks(res.data);
      })
      .catch(err => console.err(err));
    // get number of pages for the choosen stock
    axios(`count-pages/${stock}/`)
      .then(res => setPages(res.data))
      .catch(err => console.error(err));
  }, [stock]);

  // API handle select
  function handleSelect(e) {
    setStock(e.target.value);
    axios(`count-pages/${stock}/`)
      .then(res => setPages(res.data))
      .catch(err => console.error(err));
  }

  return (
    <>
      <label htmlFor="stocks">Select stock: </label>
      <select name="stocks" id="stock-list" onChange={handleSelect}>
        {stocks.map((stock, i) => {
          return (
            <option value={stock} key={i}>
              {stock}
            </option>
          );
        })}
      </select>
      <hr />
      {pages && <ChartList stock={stock} pages={pages} />}
    </>
  );
}
