import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SeedsModal = () => {
  const [show, setShow] = useState(false);

  const [type, setType] = useState("");
  const [dateOfStoring, setDateOfStoring] = useState(undefined);
  const [count, setCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setType("");
    setDateOfStoring(undefined);
    setCount(0);
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
              e.preventDefault();
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
                min={0}
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
