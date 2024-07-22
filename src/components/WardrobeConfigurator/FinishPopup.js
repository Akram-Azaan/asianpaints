import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as InfoIcon } from "../../assets/images/Info.svg";
import { Modal } from "../../common/Modal";
import "./FinishPopup.scss";
import { WOOD_FINISH_OPTIONS } from "../../constants/wardrobeConstants";

const FinishPopup = () => {
  const [openHelpModal, setOpenHelpModal] = useState(false);
  return (
    <>
      <div className={`info-icon`}>
        <InfoIcon onClick={() => setOpenHelpModal(!openHelpModal)} />
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
            {WOOD_FINISH_OPTIONS.map((finish) => {
              return (
                <Col lg={4} sm={6} xs={12} key={finish.id}>
                  <div className="FinishCardInfo">
                    <img src={finish.thumb} alt={finish.label} />
                    <h3>
                      {finish.label} ({finish.subTitle})
                    </h3>
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
