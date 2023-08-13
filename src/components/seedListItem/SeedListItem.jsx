import React, { useState } from "react";

const SeedListItem = ({ seed }) => {
  const { type, dayOfStoring, count, age } = seed;
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3 className="text-danger">{type}</h3>
      <hr />
      <p>
        <b>Day of storing:</b> {dayOfStoring}
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <b>Age:</b> {age}
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <b>Count:</b> {count}
        {visible && (
          <button style={{ float: "right" }} className="btn btn-danger">
            REMOVE
          </button>
        )}
      </p>
    </div>
  );
};

export default SeedListItem;
