import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalInfo.scss";

const ModalInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Info
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6} md={4}>
              <div className="info-fullname">
                <label htmlFor="">Full Name</label>
                <input type="text" />
              </div>
              <div className="info-mail">
                <label htmlFor="">Email Address</label>
                <input type="text" />
              </div>
              <div className="info-username ">
                <label htmlFor="">User Name</label>
                <input type="text" />
              </div>
              <div className="info-password">
                <label htmlFor="">Password</label>
                <input type="text" value="********" disabled />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="info-phone">
                <label htmlFor="">Phone</label>
                <input type="text" />
              </div>
              <div className="info-zipcode">
                <label htmlFor="">Zipcode</label>
                <input type="text" />
              </div>
              <div className="info-city">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="info-street">
                <label htmlFor="">Street</label>
                <input type="text" />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="info-geolocation">
                <label htmlFor="">Geolocation</label>
                <input type="text" />
              </div>
              <div className="info-role">
                <label htmlFor="">Role</label>
                <input type="text" value="user" disabled />
              </div>
              <div className="info-department">
                <label htmlFor="">Department</label>
                <input type="text" />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;
