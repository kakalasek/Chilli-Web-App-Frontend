import React from "react";
import List from "../list/List";
import PlantListItem from "../plantListItem/PlantListItem";

function Archive({ archive, refresh, sort, page, setPage }) {
  return (
    <>
      <List
        items={archive}
        resourceName="plant"
        itemComponent={PlantListItem}
        refresh={refresh}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Archive;
