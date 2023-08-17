import React from "react";
import List from "../list/List";
import PlantListItem from "../plantListItem/PlantListItem";
import PlantsModal from "../plantsModal/PlantsModal";

function Plants({ plants, refresh, sort, page }) {
  return (
    <>
      <PlantsModal refresh={refresh} sort={sort} page={page} />
      <List
        items={plants}
        resourceName="plant"
        itemComponent={PlantListItem}
        refresh={refresh}
        page={page}
      />
    </>
  );
}

export default Plants;
