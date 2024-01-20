import { useState } from "react";

const Body = () => {
  const [Ans, setAns] = useState("");

  const Input = [
    {
      name: "Initial Price",
      place: "Initial Price ",
      id: "Initial",
      value: 0,
    },
    {
      name: "Quantity of Stocks",
      place: "Number of Stocks bought",
      id: "Quantity",
      value: 0,
    },
    {
      name: "Current Price",
      place: "Current Price of the Stocks",
      id: "Current",
      value: 0,
    },
  ];

  function add(val, key) {
    Input.forEach((ele) => {
      if (ele.id === key) {
        let a = parseInt(val);
        ele.value = a;
      }
    });
  }

  const handleChange = (e) => {
    let val = e.target.value;
    let key = e.target.id;

    add(val, key);
  };

  const profitorloss = (Initial, Current) => {
    console.log(typeof Initial);
    let Profit = 0;
    let Profitpercent = 0;
    let Loss = 0;
    let Losspercent = 0;

    if (Initial === Current) {
      setAns("No Pain No Gain & No Gain No Pain");
    } else if (Initial > Current) {
      Loss = Initial - Current;
      console.log(Loss);
      Losspercent = (Loss * 100) / Initial;
      console.log(Losspercent);
      setAns(
        "Hey, the loss is " + Loss + " and the percent is " + Losspercent + " %"
      );
    } else if (Initial < Current) {
      Profit = Current - Initial;
      Profitpercent = (Profit / Initial) * 100;
      setAns(
        "Hey, the profit is " +
          Profit +
          " and the percent is " +
          Profitpercent +
          " %"
      );
    }
  };

  const calculate = () => {
    let Initial = 0;
    let Current = 0;
    Input.forEach((ele) => {
      if (ele.id === "Initial") {
        Initial = ele.value;
      } else {
        if (ele.id === "Current") {
          Current = ele.value;
        }
      }
    });
    profitorloss(Initial, Current);
  };

  const handleSubmit = () => {
    calculate();
  };

  return (
    <>
      <div>
        <h1>Stock Profile & Loss Calculator</h1>
      </div>
      <div>
        {Input.map((ele) => {
          return (
            <>
              <h2>{ele.name}</h2>
              <input
                type="number"
                id={ele.id}
                placeholder={ele.place}
                onChange={handleChange}
              ></input>
            </>
          );
        })}
        <br />
        <br />
        <button onClick={handleSubmit}>Tell Me!!</button>
        <br />
        <br />
        <h2>{Ans}</h2>
      </div>
    </>
  );
};

export default Body;
