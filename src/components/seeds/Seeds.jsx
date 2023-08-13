import React from "react";
import List from "../list/List";
import SeedListItem from "../seedListItem/SeedListItem";
import SeedsModal from "../seedsModal/SeedsModal";

function Seeds({ seeds }) {
  return (
    <>
      <SeedsModal />
      <List items={seeds} resourceName="seed" itemComponent={SeedListItem} />
    </>
  );
}

export default Seeds;
