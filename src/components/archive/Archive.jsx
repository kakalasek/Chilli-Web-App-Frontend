import React, { useState } from "react";
import List from "../list/List";
import PlantListItem from "../plantListItem/PlantListItem";
import Dropdown from "react-bootstrap/Dropdown";

function Archive({ archive, refresh, sort, page, setPage }) {
  const [asc, setAsc] = useState(false);

  return (
    <>
      <Dropdown className="d-inline offset-md-9">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              sort(page, "germination", !asc);
              setAsc(!asc);
            }}
          >
            Germination
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              sort(page, "dateOfPlanting", !asc);
              setAsc(!asc);
            }}
          >
            Date of planting
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              sort(page, "dayOfFirstFruit", !asc);
              setAsc(!asc);
            }}
          >
            Day of first fruit
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              sort(page, "dayOfFirstHarvestedFruit", !asc);
              setAsc(!asc);
            }}
          >
            Day of first harvested fruit
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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
