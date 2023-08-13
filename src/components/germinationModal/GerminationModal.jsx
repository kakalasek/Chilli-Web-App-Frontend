import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const GerminationModal = (props) => {
  const [show, setShow] = useState(false);

  const [sprouted, setSprouted] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSprouted(0);
    setShow(true);
  };

  return (
    <>
      <button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        UPDATE
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleClose();
            }}
          >
            <div className="mb-3">
              <label for="sprouted" className="form-label">
                How many seeds have sprouted?
              </label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="sprouted"
                required
                value={sprouted}
                onChange={(e) => setSprouted(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" form="form">
            UPDATE
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GerminationModal;
