import { Fragment, useState, useEffect } from "react";
import "./Switch.scss";

const Switch = ({ value, onValueChange, options, customStyle }) => {
  const [selected, setSelected] = useState(value);
  console.log(options);

  useEffect(() => {
    if (onValueChange) onValueChange(selected);
  }, [selected]);

  const onSelect = (type) => {
    if (type === "left") {
      setSelected(options.left.value);
      return;
    }

    setSelected(options.right.value);
  };

  const getSwitchButtonClassName = (type) => {
    return `switch-button ${type} ${
      selected === options[type].value ? "on" : "off"
    } basic-text`;
  };
  const switchClassName = `switch-container basic-text ${customStyle}`;

  return (
    <div className={switchClassName}>
      <button
        className={getSwitchButtonClassName("left")}
        onClick={() => onSelect("left")}
      >
        {options.left.text}
      </button>
      <button
        className={getSwitchButtonClassName("right")}
        onClick={() => onSelect("right")}
      >
        {options.right.text}
      </button>
    </div>
  );
};

export default Switch;
