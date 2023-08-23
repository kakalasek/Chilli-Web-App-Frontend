import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import api from "../../api/axiosConfig";

/* A skeleton for a modal for updating dates */
const DateUpdateModal = ({ title, plant, refresh, page }) => {
  /* Speical variables */
  let today = new Date().toISOString().split("T")[0];
  let dateOfPlanting = plant.dateOfPlanting;

  /* SHOW and CLOSE */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setDate(undefined);
    setShow(true);
  };

  /* Date */
  const [date, setDate] = useState(undefined);

  /* UPDATE */
  const handleUpdate = async (e, id) => {
    e.preventDefault();

    try {
      switch (
        title // Switch determening which date of the plant so update based on passed parameters
      ) {
        case "Date of first fruit":
          plant.dateOfFirstFruit = date;
          break;
        case "Date of first harvested fruit":
          plant.dateOfFirstHarvestedFruit = date;
          break;
        case "Date of disposal":
          plant.dateOfDisposal = date;
          break;
      }

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
              <label for="date" className="form-label">
                {title}
              </label>
              <input
                type="date"
                min={dateOfPlanting}
                max={today}
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
