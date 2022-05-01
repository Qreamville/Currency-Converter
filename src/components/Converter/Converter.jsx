import React, { useState } from "react";
import ExchangeRate from "../ExchangeRate/ExchangeRate";

const Converter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [choosePrimary, setChoosePrimary] = useState("BTC");
  const [chooseSecondary, setChooseSecondary] = useState("BTC");

  const currency = currencies.map((item, _index) => {
    return (
      <option key={_index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <div className="bg-danger">
      <h2>converter</h2>
      <div className="input">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={""}
                  readOnly
                />
              </td>
              <td>
                <select
                  name="currency-options-1"
                  className="currency-options"
                  onChange={(e) => setChoosePrimary(e.target.value)}
                  value={choosePrimary}
                >
                  {currency}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={""}
                  readOnly
                />
              </td>
              <td>
                <select
                  name="currency-options-1"
                  className="currency-options"
                  onChange={(e) => setChooseSecondary(e.target.value)}
                  value={chooseSecondary}
                >
                  {currency}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExchangeRate />
    </div>
  );
};

export default Converter;
