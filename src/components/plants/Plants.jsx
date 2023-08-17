import React from "react";
import List from "../list/List";
import PlantListItem from "../plantListItem/PlantListItem";
import PlantsModal from "../plantsModal/PlantsModal";

function Plants({ plants, refresh, sort }) {
  return (
    <>
      <PlantsModal refresh={refresh} sort={sort} />
      <List
        items={plants}
        resourceName="plant"
        itemComponent={PlantListItem}
        refresh={refresh}
      />
    </>
  );
}

export default Plants;
