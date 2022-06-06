import Dropdown from "components/Dropdown/Dropdown";
import React from "react";

const App = () => {
  const items = [
    {
      id: 1,
      value: "60 Seconds",
    },
    {
      id: 2,
      value: "90 Seconds",
    },
    {
      id: 3,
      value: "120 Seconds",
    },
  ];

  return (
    <div className="container">
      <Dropdown
        initialTitle="Select Time"
        items={items}
        onValueChange={(value) => console.log(value)}
      ></Dropdown>
    </div>
  );
};

export default App;
