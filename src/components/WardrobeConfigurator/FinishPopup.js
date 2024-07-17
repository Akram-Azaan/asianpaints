import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as HelpIcon } from "../../assets/images/Help.svg";
import { Modal } from "../../common/Modal";
import "./FinishPopup.scss";

const FinishList = [
  {
    id: 1,
    label: "Laminate (Economy)",
    desc: "Lorem ipsum dolor sit amet consectetur. Id ac tristique eu eget non. In tempus aenean libero lectus vulputate duis laoreet. Ac leo lacus dis orci. Libero malesuada lorem dolor quisque amet.",
  },
  {
    id: 2,
    label: "Acrylic (Premium)",
    desc: "Lorem ipsum dolor sit amet consectetur. Id ac tristique eu eget non. In tempus aenean libero lectus vulputate duis laoreet. Ac leo lacus dis orci. Libero malesuada lorem dolor quisque amet.",
  },
  {
    id: 3,
    label: "PU (Luxury)",
    desc: "Lorem ipsum dolor sit amet consectetur. Id ac tristique eu eget non. In tempus aenean libero lectus vulputate duis laoreet. Ac leo lacus dis orci. Libero malesuada lorem dolor quisque amet.",
  },
];

const FinishPopup = () => {
  const [openHelpModal, setOpenHelpModal] = useState(false);
  return (
    <>
      <div className={`help-icon`}>
        <HelpIcon onClick={() => setOpenHelpModal(!openHelpModal)} />
      </div>
      {openHelpModal && (
        <Modal
          show={openHelpModal}
          title="Wood finishes"
          handleClose={() => setOpenHelpModal(!openHelpModal)}
          className="finish-modal"
          centered
        >
          <Row className="gx-5">
            {FinishList.map((finish) => {
              return (
                <Col lg={4} sm={6} xs={12} key={finish.id}>
                  <div className="FinishCardInfo">
                    <h3>{finish.label}</h3>
                    <p>{finish.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Modal>
      )}
    </>
  );
};
export default FinishPopup;
