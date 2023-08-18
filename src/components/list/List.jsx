import React, { useState, useEffect } from "react";

const List = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  refresh,
  page,
  setPage,
}) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(items);
  }, [items]);

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {itemList.map((item) => (
            <div className="border border-success border-3 rounded m-2 p-2 bg-success text-dark bg-opacity-25">
              <ItemComponent
                key={item.id}
                {...{ [resourceName]: item }}
                refresh={refresh}
                page={page}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn btn-outline-secondary offset-md-8"
        onClick={() => {
          setPage(page - 1);
          refresh(page - 1);
        }}
      >
        Previous
      </button>
      <label className="m-2">{page}</label>
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          setPage(page + 1);
          refresh(page + 1);
        }}
      >
        Next
      </button>
    </>
  );
};

export default List;
