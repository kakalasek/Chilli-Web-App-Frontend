import React from "react";
import List from "../list/List";
import PlantListItem from "../plantListItem/PlantListItem";
import PlantsModal from "../plantsModal/PlantsModal";

function Plants({ plants }) {
  return (
    <>
      <PlantsModal />
      <List items={plants} resourceName="plant" itemComponent={PlantListItem} />
    </>
  );
}

export default Plants;
