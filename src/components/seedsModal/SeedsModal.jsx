import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import api from "../../api/axiosConfig";

const SeedsModal = ({ refresh }) => {
  let today = new Date().toISOString().split("T")[0];

  const [show, setShow] = useState(false);

  const [type, setType] = useState("");
  const [dateOfStoring, setDateOfStoring] = useState(undefined);
  const [count, setCount] = useState(1);

  const handleAddSeed = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/v1/seeds", {
        type,
        dateOfStoring,
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
    setDateOfStoring(undefined);
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
          <Modal.Title>Add a seed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="form"
            onSubmit={(e) => {
              handleAddSeed(e);
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
              <label for="dateOfStoring" className="form-label">
                Date of storing
              </label>
              <input
                type="date"
                max={today}
                className="form-control"
                id="dateOfStoring"
                required
                value={dateOfStoring}
                onChange={(e) => setDateOfStoring(e.target.value)}
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

export default SeedsModal;
