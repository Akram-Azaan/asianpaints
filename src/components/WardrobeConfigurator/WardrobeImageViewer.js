import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./WardrobeConfigurator.module.scss";
import cx from "classnames";
import FinishPopup from "./FinishPopup";
import WARDROBE_IMAGE from "../../assets/images/wardrobe.png";

const WardrobeImageViewer = ({ wardrobeDimensions }) => {
  const [slideWardrobe, setSlideWardrobe] = useState(true);
  const [showDoorPanel, setShowDoorpanel] = useState(true);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [woodFinish, setWoodFinish] = useState("laminate");
  const [showWoodFinish, setShowWoodFinish] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [showShades, setShowShades] = useState(false);
  const [selectedDimension, setSelectedDimension] = useState(wardrobeDimensions[0]?.label || '');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    pincode: "",
    mobile: "",
    email: "",
    receiveUpdates: false,
  });

  const handleRadioChange = (e) => {
    setSelectedDimension(e.target.value);
  };

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
    setShowDetails(false);
    setShowPackage(true);
    setShowShades(true);
  };

  const showFinishes = () => {
    setShowWardrobe(false);
    setShowWoodFinish(true);
  };

  const visualizeAgain = () => {
    setShowDoorpanel(true);
    setShowWardrobe(false);
    setShowWoodFinish(false);
    setShowDetails(false);
    setShowPackage(false);
    setShowShades(false);
  };

  return (
    <>
      <div className={styles.wardrobeContainer}>
        <Row className={`h-100 justify-content-between align-items-center`}>
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
              <div className={styles.imageView}>
                <img src={WARDROBE_IMAGE} alt={`Wardrobe`} />
              </div>
              {showShades && (
                <div className={styles.shadesBox}>
                  <h4>Available top laminate shades</h4>
                  <div className={styles.shades}>
                    <div className={styles.shadeItem}>
                      <div className={styles.shadeColor}></div>
                      <div className={styles.shadeTitle}>Green</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
          <Col
            lg={5}
            md={5}
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
                            name="wardrobe_dimension"
                            value={dimension.label}
                            checked={selectedDimension === dimension.label}
                            onChange={handleRadioChange}
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
                <div
                  className={`d-flex align-items-center justify-content-center text-center`}
                >
                  <h4 className="mb-0 me-3">3. Select a wood finish</h4>
                  <FinishPopup />
                </div>
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
                          <span className={styles.countryCode}>+91</span>
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
                        setShowPackage(false);
                      }}
                    >
                      Back
                    </button>
                    <button type="submit" className={styles.button}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
            {showPackage && (
              <div className={styles.packageRightBox}>
                <h4 className={styles.packageTitle}>Economy Package</h4>
                <p className={styles.packageDescription}>
                  High-end interior solutions for the ultimate wardrobe
                  experience.
                </p>
                <h2 className={styles.packagePrice}>₹ 2,51,527.00</h2>
                <div className={styles.buttonContainer}>
                  <button className={styles.button} onClick={() => {}}>
                    Download PDF
                  </button>
                  <button className={styles.button} onClick={visualizeAgain}>
                    Visualize again
                  </button>
                </div>
                <div className={styles.specifications}>
                  <div className={styles.specificationItem}>
                    <span className={styles.specificationLabel}>
                      Core material
                    </span>
                    <span className={styles.specificationValue}>HDF</span>
                  </div>
                  <div className={styles.specificationItem}>
                    <span className={styles.specificationLabel}>
                      Door panel
                    </span>
                    <span className={styles.specificationValue}>
                      Sliding door
                    </span>
                  </div>
                  <div className={styles.specificationItem}>
                    <span className={styles.specificationLabel}>
                      Dimensions
                    </span>
                    <span className={styles.specificationValue}>
                      7 x 10 ft.
                    </span>
                  </div>
                  <div className={styles.specificationItem}>
                    <span className={styles.specificationLabel}>
                      Wood finish
                    </span>
                    <span className={styles.specificationValue}>Laminate</span>
                  </div>
                </div>
                <p className={styles.terms}>
                  *This is only an indicative price based on our clients'
                  average spends. The final price can be higher or lower
                  depending on factors like finish material, number of
                  furniture, civil work required (painting, flooring, plumbing,
                  etc.), design elements, and wood type. Don't worry, our
                  designers can help you understand this better.
                </p>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WardrobeImageViewer;
