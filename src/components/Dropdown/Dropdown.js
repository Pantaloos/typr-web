import React, { useState, useEffect } from "react";
import "./Dropdown.scss";

const Dropdown = ({
  multiSelect = false,
  items,
  initialTitle,
  onValueChange,
}) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    if (onValueChange) {
      if (selection[0]) {
        onValueChange(selection[0].value, selection[0].text);
      }
    }
  }, [selection, onValueChange]);

  function handleOnClick(item) {
    if (!selection.some((current) => current.value === item.value)) {
      if (!multiSelect) {
        setSelection([item]);
        setTitle(item.text);
        setOpen(false);
      }
    }
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p className="up-down-signs">{open ? "<" : ">"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
