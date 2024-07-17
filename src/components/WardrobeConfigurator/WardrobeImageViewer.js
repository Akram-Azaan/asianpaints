import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "./WardrobeConfigurator.module.scss";
import cx from "classnames";

const WardrobeImageViewer = ({ wardrobeDimensions }) => {
  const [slideWardrobe, setSlideWardrobe] = useState(true);
  const [showDoorPanel, setShowDoorpanel] = useState(true);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [woodFinish, setWoodFinish] = useState("laminate");
  const [showWoodFinish, setShowWoodFinish] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pincode: "",
    mobile: "",
    email: "",
    receiveUpdates: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const validationErrors = validate();
    // if (Object.keys(validationErrors).length === 0) {
    //   // Submit the form
    //   console.log("Form submitted:", formData);
    // } else {
    //   setErrors(validationErrors);
    // }
    // console.log(errors);
    console.log("Form submitted:", formData);

  };

  const showFinishes = () => {
    setShowWardrobe(false);
    setShowWoodFinish(true);
  };

  console.log(formData, "formDataformData");

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
            {showDoorPanel && (
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
                      setShowDoorpanel(false);
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
                      setShowDoorpanel(true);
                      setShowWardrobe(false);
                    }}
                  >
                    Back
                  </button>
                  <button className={styles.button} onClick={showFinishes}>
                    Next
                  </button>
                </div>
              </div>
            )}
            {showWoodFinish && (
              <div className={styles.rightBox}>
                <h4 className="mb-0">3. Select a wood finish</h4>
                <div className={styles.doorPanel}>
                  <div
                    className={cx(
                      styles.doorPanelItem,
                      woodFinish === "laminate" ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setWoodFinish("laminate");
                    }}
                  >
                    Laminate
                  </div>
                  <div
                    className={cx(
                      styles.doorPanelItem,
                      woodFinish === "acrylic" ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setWoodFinish("acrylic");
                    }}
                  >
                    Acrylic
                  </div>
                  <div
                    className={cx(
                      styles.doorPanelItem,
                      woodFinish === "pu" ? styles.bordered : ""
                    )}
                    onClick={() => {
                      setWoodFinish("pu");
                    }}
                  >
                    PU
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      setShowWardrobe(true);
                      setShowWoodFinish(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => {
                      setShowWardrobe(false);
                      setShowWoodFinish(false);
                      setShowDetails(true);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {showDetails && (
              <div className={styles.rightBox}>
                <h4 className="mb-0">
                  Your free quote is just a few details away!
                </h4>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Row className="h-100 justify-content-center g-4">
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.inputBox}>
                          <label className={styles.inputLabel}>Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                          />
                        </div>
                        {errors.name && (
                          <div className={styles.error}>{errors.name}</div>
                        )}
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.inputBox}>
                          <label className={styles.inputLabel}>Pincode</label>
                          <input
                            type="text"
                            name="pincode"
                            placeholder="Enter your pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className={styles.input}
                          />
                        </div>
                        {errors.pincode && (
                          <div className={styles.error}>{errors.pincode}</div>
                        )}
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.inputBox}>
                          <label className={styles.inputLabel}>
                            Mobile number
                          </label>
                          <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={styles.inputCountry}
                          />
                          <span className={styles.countryCode}>
                            +91
                          </span>
                        </div>
                        {errors.mobile && (
                          <div className={styles.error}>{errors.mobile}</div>
                        )}
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.inputBox}>
                          <label className={styles.inputLabel}>Email</label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                          />
                        </div>
                        {errors.email && (
                          <div className={styles.error}>{errors.email}</div>
                        )}
                      </Col>
                    </Row>
                  </div>
                  <div className="my-3">
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                    />
                    <span className="ms-2">
                      Yes, I would like to receive important updates and
                      notifications on WhatsApp
                    </span>
                  </div>
                  <h5 className={styles.terms}>
                    By proceeding, you are authorizing Beautiful Homes and its
                    suggested contractors to get in touch with you through
                    calls, sms, or e-mail.
                  </h5>

                  <div className={styles.buttonContainer}>
                    <button
                      className={styles.button}
                      onClick={() => {
                        setShowWoodFinish(true);
                        setShowDetails(false);
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className={styles.button}
                      // onClick={showFinishes}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WardrobeImageViewer;
