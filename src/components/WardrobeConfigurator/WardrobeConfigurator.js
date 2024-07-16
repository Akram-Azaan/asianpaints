import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./WardrobeConfigurator.module.scss";
import cx from "classnames";

const wardrobeDimensions = [
  {
    id: 1,
    label: "7 x 10 ft.",
  },
  {
    id: 2,
    label: "6.25 x 7 ft.",
  },
  {
    id: 3,
    label: "6.25 x 8 ft.",
  },
  {
    id: 4,
    label: "7 x 6 ft.",
  },
  {
    id: 5,
    label: "7 x 7 ft.",
  },
  {
    id: 6,
    label: "7 x 8 ft.",
  },
  {
    id: 7,
    label: "8 x 6 ft.",
  },
  {
    id: 8,
    label: "8 x 7 ft.",
  },
  {
    id: 9,
    label: "8 x 8 ft.",
  },
];

const WardrobeConfigurator = () => {
  const [slideWardrobe, setSlideWardrobe] = useState(true);
  const [showWardrobe, setShowWardrobe] = useState(false);

  return (
    <>
      <div className={styles.wardrobeContainer}>
        <Row className={`h-100 justify-content-center`}>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className={styles.wardrobe}>
              <h2 className={styles.title}>
                Build your wardrobe and get cost estimation
              </h2>
              <div className={styles.buttons}>
                <div className={styles.roundbox}>
                  <div
                    className={cx(
                      styles.rounds,
                      slideWardrobe ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setSlideWardrobe(true);
                    }}
                  >
                    slide
                  </div>
                  <div
                    className={cx(
                      styles.rounds,
                      !slideWardrobe ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setSlideWardrobe(false);
                    }}
                  >
                    hing
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={`d-flex align-items-center justify-content-center text-center`}
          >
            {!showWardrobe && (
              <div className={styles.rightBox}>
                <h4 className="mb-0">1. Select a door panel</h4>
                <div className={styles.doorPanel}>
                  <div
                    className={cx(
                      styles.doorPanelItem,
                      slideWardrobe ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setSlideWardrobe(true);
                    }}
                  >
                    Sliding door
                  </div>
                  <div
                    className={cx(
                      styles.doorPanelItem,
                      !slideWardrobe ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setSlideWardrobe(false);
                    }}
                  >
                    Hinged door
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      setShowWardrobe(true);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {showWardrobe && (
              <div className={styles.rightBox}>
                <h4 className="mb-0">2. Select wardrobe dimension</h4>
                <div>
                  <Row className={`h-100 justify-content-center g-4`}>
                    {wardrobeDimensions.map((dimension) => (
                      <Col
                        key={dimension.id}
                        xs={4}
                        className={`d-flex align-items-center justify-content-center text-center`}
                      >
                        <label className={styles.label}>
                          <input
                            type="radio"
                            name="account_type"
                            value={dimension.label}
                            // checked
                            className={styles.input}
                          />
                          <span className={styles.labelText}>
                            {dimension.label}
                          </span>
                        </label>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      setShowWardrobe(false);
                    }}
                  >
                    Back
                  </button>
                  <button className={styles.button}>Next</button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WardrobeConfigurator;
