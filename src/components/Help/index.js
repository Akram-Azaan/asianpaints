import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as AnglesRoom } from "../../assets/images/angles-room.svg";
import { ReactComponent as ColorFinish } from "../../assets/images/color-finish.svg";
import { ReactComponent as FullScreenHotspot } from "../../assets/images/full-screen.svg";
import { ReactComponent as HelpIcon } from "../../assets/images/Help.svg";
import { ReactComponent as Hotspot } from "../../assets/images/hotspot.svg";
import { ReactComponent as Swatches } from "../../assets/images/swatches.svg";
import { ReactComponent as WoodFinishMobile } from "../../assets/images/wood-finish-mobile.svg";
import { ReactComponent as WoodFinish } from "../../assets/images/wood-finish.svg";
import { ReactComponent as ZoomInOut } from "../../assets/images/zoom-in-out.svg";
import { Modal } from "../../common/Modal";

const HelpList = [
  {
    icon: <Hotspot />,
    text: "Tap/click  on a hotspot to apply  selected wood-finish.",
  },
  {
    icon: (
      <>
        <WoodFinish className="d-sm-table d-none" />
        <WoodFinishMobile className="d-sm-none" />
      </>
    ),
    text: "Tap/click  again to remove the applied wood-finish.",
  },
  {
    icon: <ColorFinish />,
    text: "Tap/click to apply a colour/finish. Tap/click again to remove the same.",
  },
  {
    icon: <AnglesRoom />,
    text: "Tap/click to see different angles of the room.",
  },
  {
    icon: <Swatches />,
    text: "Show / Hide hotspots and applied swatches on the image.",
  },
  {
    icon: <FullScreenHotspot />,
    text: "View the image full screen without hotspots.",
  },
  {
    icon: <ZoomInOut />,
    text: "Double tap / click / pinch the image to zoom in/out ",
  },
];

export default function Help({className}) {
  const [openHelpModal, setOpenHelpModal] = useState(false);
  return (
    <>
      <div className={`help-icon ${className}`}>
        <HelpIcon onClick={() => setOpenHelpModal(!openHelpModal)} />
      </div>
      {openHelpModal && (
        <Modal
          show={openHelpModal}
          title="Help"
          handleClose={() => setOpenHelpModal(!openHelpModal)}
          className="help-modal"
          centered
        >
          <Row>
            {HelpList.map((data, i) => {
              return (
                <Col lg={4} sm={6} xs={12} key={i}>
                  <div className="help-modal-info">
                    {data.icon}
                    <p>{data.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Modal>
      )}
    </>
  );
}
