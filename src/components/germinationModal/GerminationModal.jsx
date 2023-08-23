import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import api from "../../api/axiosConfig";

/* Modal specifically made for germination */
const GerminationModal = ({ plant, refresh, page }) => {
  /* SHOW and CLOSE */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSprouted(0);
    setShow(true);
  };

  /* Sprouted */
  const [sprouted, setSprouted] = useState(0);

  /* UPDATE */
  const handleUpdate = async (e, id) => {
    e.preventDefault();

    try {
      plant.sprouted = sprouted;

      const response = await api.put(`/api/v1/plants/${id}`, plant);

      refresh(page);
    } catch (err) {
      console.log(err);
    }
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
              handleUpdate(e, plant.id);
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
                max={plant.count}
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
