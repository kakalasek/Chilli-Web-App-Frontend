import React, { useEffect, useState } from "react";
import List from "../list/List";
import SeedListItem from "../seedListItem/SeedListItem";
import SeedsModal from "../seedsModal/SeedsModal";

function Seeds({ seeds, refresh, sort, page, setPage }) {
  return (
    <>
      <SeedsModal refresh={refresh} sort={sort} page={page} />
      <List
        items={seeds}
        resourceName="seed"
        itemComponent={SeedListItem}
        refresh={refresh}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Seeds;
