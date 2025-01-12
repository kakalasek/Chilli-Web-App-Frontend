import React from "react";
import List from "../list/List";
import PlantListItem from "../plantListItem/PlantListItem";
import PlantsModal from "../plantsModal/PlantsModal";

/* Page for plants that have not yet been disposed */
function Plants({ plants, refresh, sort, page, setPage }) {
  return (
    <>
      <PlantsModal refresh={refresh} sort={sort} page={page} />
      <List
        items={plants}
        resourceName="plant"
        itemComponent={PlantListItem}
        refresh={refresh}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Plants;
