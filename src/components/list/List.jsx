import React from "react";

const List = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {items.map((item) => (
          <div className="border border-success border-3 rounded m-2 p-2 bg-success text-dark bg-opacity-25">
            <ItemComponent key={item.id} {...{ [resourceName]: item }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;