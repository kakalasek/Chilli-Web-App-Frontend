import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import api from "../../api/axiosConfig";

const PlantsModal = ({ refresh }) => {
  let today = new Date().toISOString().split("T")[0];

  const [show, setShow] = useState(false);

  const [type, setType] = useState("");
  const [dateOfPlanting, setDateOfPlanting] = useState(undefined);
  const [count, setCount] = useState(1);

  const handleAddPlant = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/v1/plants", {
        type,
        dateOfPlanting,
        count,
      });

      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setType("");
    setDateOfPlanting(undefined);
    setCount(1);
    setShow(true);
  };

  return (
    <>
      <button
        className="btn btn-outline-danger offset-md-3"
        onClick={handleShow}
      >
        ADD
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="form"
            onSubmit={(e) => {
              handleAddPlant(e);
              handleClose();
            }}
          >
            <div className="mb-3">
              <label for="type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="dateOfPlanting" className="form-label">
                Date of planting
              </label>
              <input
                type="date"
                max={today}
                className="form-control"
                id="dateOfPlanting"
                required
                value={dateOfPlanting}
                onChange={(e) => setDateOfPlanting(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="count" className="form-label">
                Count
              </label>
              <input
                type="number"
                min={1}
                className="form-control"
                id="count"
                required
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" form="form">
            ADD
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlantsModal;
