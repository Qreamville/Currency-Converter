import React, { useState } from "react";
import "./converter.css";
import { currencies } from "../data";

const Converter = () => {
  const [choosePrimary, setChoosePrimary] = useState("AED");
  const [chooseSecondary, setChooseSecondary] = useState("AED");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("0");
  const [date, setDate] = useState("");

  const currency = currencies.map((item, _index) => {
    return (
      <option value={item} key={_index}>
        {item}
      </option>
    );
  });

  const handleConvert = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("apikey", "a5oZzE1XP980dYZgtuXSN05olf1g6Y45");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${chooseSecondary}&from=${choosePrimary}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setResult(JSON.parse(result)["result"]))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="converter">
      <h2>Currency Converter</h2>
      <form onSubmit={handleConvert}>
        <label htmlFor="currency-from">From</label>
        <select
          name="currency-from"
          onChange={(e) => setChoosePrimary(e.target.value)}
          value={choosePrimary}
        >
          {currency}
        </select>
        <label htmlFor="currency-to">To</label>
        <select
          name="currency-to"
          onChange={(e) => setChooseSecondary(e.target.value)}
          value={chooseSecondary}
        >
          {currency}
        </select>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          value={amount ?? ""}
          min="1"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Convert</button>
      </form>
      <div className="results">
        <p>Last updated: {date}</p>
        <label htmlFor="results">Result</label>
        <input type="number" disabled={true} value={result} />
      </div>
    </div>
  );
};

export default Converter;
