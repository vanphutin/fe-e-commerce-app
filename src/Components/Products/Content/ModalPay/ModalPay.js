import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import QRPay from "./QRPay";

function ModalPay() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-warning align-center" onClick={handleShow}>
        Continue to checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Insufficient account balance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Please click the deposit button (QRPAY) to buy products at the most
            preferential prices!!
          </h5>

          <QRPay />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Finsh
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPay;
