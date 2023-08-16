import React, { useEffect, useState } from "react";
import List from "../list/List";
import SeedListItem from "../seedListItem/SeedListItem";
import SeedsModal from "../seedsModal/SeedsModal";

function Seeds({ seeds, refresh, sort }) {
  return (
    <>
      <SeedsModal refresh={refresh} seeds={seeds} sort={sort} />
      <List
        items={seeds}
        resourceName="seed"
        itemComponent={SeedListItem}
        refresh={refresh}
      />
    </>
  );
}

export default Seeds;
