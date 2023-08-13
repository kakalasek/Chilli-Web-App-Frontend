import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const DateUpdateModal = ({ title }) => {
  const [show, setShow] = useState(false);

  const [date, setDate] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setDate(undefined);
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
              <label for="date" className="form-label">
                {title}
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
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

export default DateUpdateModal;
