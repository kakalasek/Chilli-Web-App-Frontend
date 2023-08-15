import React, { useRef, useState } from "react";
import api from "../../api/axiosConfig";

const SeedListItem = ({ seed, refresh }) => {
  const { type, dateOfStoring, count, age } = seed;
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleDeleteSeed = async (id) => {
    try {
      const response = await api.delete(`/api/v1/seeds/${id}`);

      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3>{type}</h3>
      <hr />
      <p>
        <b>Date of storing:</b> {dateOfStoring}
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <b>Age:</b> {age}
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <b>Count:</b> {count}
        {visible && (
          <button
            style={{ float: "right" }}
            className="btn btn-danger"
            onClick={() => handleDeleteSeed(seed.id)}
          >
            REMOVE
          </button>
        )}
      </p>
    </div>
  );
};

export default SeedListItem;
