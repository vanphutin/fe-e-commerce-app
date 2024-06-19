import { render } from "@testing-library/react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import qr from "../../../../assets/QRPAY/qr.jpg";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function QRPay() {
  return (
    <Accordion defaultActiveKey="0">
      <Card.Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomToggle eventKey="1">QR PAY</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          <div style={{ width: "450px" }}>
            <img src={qr} alt="" style={{ width: "100%" }} />
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
}
export default QRPay;
