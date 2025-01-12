import React, { useState } from "react";
import GerminationModal from "../germinationModal/GerminationModal";
import DateUpdateModal from "../dateUpdateModal/DateUpdateModal";
import api from "../../api/axiosConfig";

/* List item made for plant */
const PlantListItem = ({ plant, refresh, page }) => {
  const {
    type,
    sprouted,
    germination,
    dayOfFirstHarvestedFruit,
    dayOfFirstFruit,
    dayOfDisposal,
    dayFromPlanting,
    dateOfPlanting,
    dateOfFirstHarvestedFruit,
    dateOfFirstFruit,
    dateOfDisposal,
    count,
  } = plant;

  /* Visibility */
  const [visible, setVisible] = useState(false);

  /* Germination label color */
  const getGerminationGrade = (germination) => {
    if (germination >= 80) return "text-success";
    else if (germination < 80 && germination >= 40) return "text-warning";
    else return "text-danger";
  };

  /* Mouse */
  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  /* DELETE */
  const handleDeletePlant = async (id) => {
    try {
      const response = await api.delete(`/api/v1/plants/${id}`);

      refresh(page);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3>{type}</h3>
      <hr />
      <p>
        <b>Count:</b> {count}
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <b>Sprouted:</b> {sprouted}
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <b>Germination:</b>{" "}
        <i className={getGerminationGrade(germination)}>
          {germination.toFixed(2)}%
        </i>
        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <GerminationModal plant={plant} refresh={refresh} page={page} />
      </p>

      <table className="table">
        <tr>
          <th>Date of planting</th>
          <th>{dateOfPlanting}</th>
          <th>Day from planting</th>
          <th>{dayFromPlanting}</th>
        </tr>
        <tr>
          <th>Date of first fruit</th>
          <th>{dateOfFirstFruit}</th>
          <th>Day of first fruit</th>
          <th>{dayOfFirstFruit}</th>
          <th>
            <DateUpdateModal
              title="Date of first fruit"
              plant={plant}
              refresh={refresh}
              page={page}
            />
          </th>
        </tr>
        <tr>
          <th>Date of first harvested fruit</th>
          <th>{dateOfFirstHarvestedFruit}</th>
          <th>Day of first harvested fruit</th>
          <th>{dayOfFirstHarvestedFruit}</th>
          <th>
            <DateUpdateModal
              title="Date of first harvested fruit"
              plant={plant}
              refresh={refresh}
              page={page}
            />
          </th>
        </tr>
        <tr>
          <th>Date of disposal</th>
          <th>{dateOfDisposal}</th>
          <th>Day of disposal</th>
          <th>{dayOfDisposal}</th>
          <th>
            <DateUpdateModal
              title="Date of disposal"
              plant={plant}
              refresh={refresh}
              page={page}
            />
          </th>
        </tr>
      </table>
      <div style={{ "text-align": "right" }}>
        {visible && (
          <button
            className="btn btn-danger"
            onClick={() => handleDeletePlant(plant.id)}
          >
            REMOVE
          </button>
        )}
      </div>
    </div>
  );
};

export default PlantListItem;
