import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./WardrobeConfigurator.module.scss";
import cx from "classnames";
import FinishPopup from "./FinishPopup";
import WARDROBE_IMAGE from "../../assets/images/wardrobe.png";
import LOADING_GIF from "../../assets/images/loadingGif.gif";
import BeautifullHomesLogo from "../../assets/images/BeautifulHomesLogo.png";
import ProcessIcon1 from "../../assets/images/ProcessIcon1.png";
import ProcessIcon2 from "../../assets/images/ProcessIcon2.png";
import ProcessIcon3 from "../../assets/images/ProcessIcon3.png";
import ProcessIcon4 from "../../assets/images/ProcessIcon4.png";
import ProcessIcon5 from "../../assets/images/ProcessIcon5.png";
import ReasonsIcon1 from "../../assets/images/ReasonsIcon1.png";
import ReasonsIcon2 from "../../assets/images/ReasonsIcon2.png";
import ReasonsIcon3 from "../../assets/images/ReasonsIcon3.png";
import ReasonsIcon4 from "../../assets/images/ReasonsIcon4.png";
import ReasonsIcon5 from "../../assets/images/ReasonsIcon5.png";
import ReasonsIcon6 from "../../assets/images/ReasonsIcon6.png";
import PhoneIcon from "../../assets/images/phone.png";

import {
  DOOR_LIST,
  WOOD_FINISH_OPTIONS,
  WARDROBE_DIMENSIONS,
} from "../../constants/wardrobeConstants";

const WardrobeImageViewer = ({ doorPanelOptions, setDoorPanelOptions }) => {
  const [showDoorPanel, setShowDoorpanel] = useState(true);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [woodFinish, setWoodFinish] = useState(
    WOOD_FINISH_OPTIONS[0]?.label || ""
  );
  const [showWoodFinish, setShowWoodFinish] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [showShades, setShowShades] = useState(false);
  const [errors, setErrors] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pincode: "",
    mobile: "",
    email: "",
    receiveUpdates: false,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRadioChange = (e) => {
    setDoorPanelOptions({
      ...doorPanelOptions,
      dimension: e.target.value,
    });
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
    // console.log("Form submitted:", formData);
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

  const handleDoorClick = (door) => {
    setDoorPanelOptions({
      ...doorPanelOptions,
      door: door.label,
    });
  };

  // const pdfContentRef = useRef(null);

  useEffect(() => {
    pdfContent();
  }, [doorPanelOptions, woodFinish,formData]);

  const pdfContent = () => {
    // Remove any existing hidden div to avoid duplications
    const existingDiv = document.getElementById("pdf-content");
    if (existingDiv) {
      existingDiv.remove();
    }

    // Create a new hidden div
    const hiddenDiv = document.createElement("div");
    hiddenDiv.id = "pdf-content";
    hiddenDiv.style.position = "absolute";
    hiddenDiv.style.left = "-9999px"; // Move off-screen
    hiddenDiv.style.width = "100%";
    hiddenDiv.style.height = "100%";
    hiddenDiv.style.overflow = "visible";

    // Add the hidden div to the body
    document.body.appendChild(hiddenDiv);

    // Insert your HTML content into the hidden div
    hiddenDiv.innerHTML = `
      <div id="page-1" class="${styles.pdfContainer}">
        <div class="${styles.pdfHeader}">
          <h2>Wardrobe estimate</h2>
          <img src="${BeautifullHomesLogo}" alt="logo" />
        </div>
        <div class="${styles.pdfBody}">
          <h3>Dear ${formData?.name}</h3>
          <div class="${styles.pdfBodyDetails}">
            <div>
              <p>
                Here is the quote that you requested. Please <br />
                review and reach out to us, for any questions.
              </p>
            </div>
            <div>
              <p>
                Mobile no: <span>${formData?.mobile}</span>
              </p>
              <p>
                Email: <span>${formData?.email}</span>
              </p>
            </div>
          </div>
          <div class="${styles.pdfWardrobeDetails}">
            <div class="${styles.pdfWardrobeDetailsHeader}">
              <span class="${styles.firstBox}">
                <p>Package :</p>
                <h3>Economy</h3>
              </span>
              <span class="${styles.secondBox}">
                <p>Estimated cost: </p>
                <h3>₹ 2,51,527.00</h3>
              </span>
            </div>
            <div class="${styles.pdfWardrobeDetailsBody}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="wardrobe" />
              </div>
              <div class="${styles.detailsBox}">
                <div class="${styles.detailsBoxItem}">
                  <span>Core material</span>
                  <span>HDF</span>
                </div>
                <div class="${styles.detailsBoxItem}">
                  <span>Door panel</span>
                  <span>${doorPanelOptions?.door || "N/A"}</span>
                </div>
                <div class="${styles.detailsBoxItem}">
                  <span>Dimensions (approx.)</span>
                  <span>${doorPanelOptions?.dimension || "N/A"}</span>
                </div>
                <div class="${styles.detailsBoxItem}">
                  <span>Wood finish</span>
                  <span>${woodFinish || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
          <p>
            *This is only an indicative price based on our clients' average
            spends. The final price can be higher or lower depending on
            factors like finish material, number of furniture, civil work
            required (painting, flooring, plumbing, etc.), design elements,
            and wood type. Don't worry, our designers can help you understand
            this better.
          </p>
        </div>
      </div>
  
      <div id="page-2" class="${styles.pdfContainer}">
        <div class="${styles.pdfBody}">
          <h2 class="${styles.headingCenter}">
            Available top ${woodFinish} shades
          </h2>
          <div class="${styles.pdfWardrobeShades}">
            <div class="${styles.shadeBox}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="shade" />
              </div>
              <h4>Shade 1</h4>
            </div>
            <div class="${styles.shadeBox}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="shade" />
              </div>
              <h4>Shade 2</h4>
            </div>
            <div class="${styles.shadeBox}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="shade" />
              </div>
              <h4>Shade 3</h4>
            </div>
            <div class="${styles.shadeBox}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="shade" />
              </div>
              <h4>Shade 4</h4>
            </div>
            <div class="${styles.shadeBox}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="shade" />
              </div>
              <h4>Shade 5</h4>
            </div>
            <div class="${styles.shadeBox}">
              <div class="${styles.imageBox}">
                <img src="${WARDROBE_IMAGE}" alt="shade" />
              </div>
              <h4>Shade 6</h4>
            </div>
          </div>
        </div>
      </div>
  
      <div id="page-3" class="${styles.pdfContainer}">
        <div class="${styles.pdfBody}">
          <h4>Beautiful homes - Your one-stop for interior design needs</h4>
          <p class="${styles.para}">
            Our team of experienced designers can help you choose the perfect
            traditional or modern style to enhance the interior of your home
            according to your requirements. You can book an online
            consultation with us or visit our store for personalized
            recommendations. We are available in all major cities including
            Mumbai, Delhi, Amritsar, Ernakulam, Raipur, Ooty, Pune, Ahmedabad,
            Hyderabad, Bangalore, Kolkata, and Chennai.
          </p>
          <h4>Our Process</h4>
          <div class="${styles.ourProcess}">
            <div class="${styles.processBox}">
              <img src="${ProcessIcon1}" alt="process 1" />
              <h4>Understand your requirements</h4>
            </div>
            <div class="${styles.processBox}">
              <img src="${ProcessIcon2}" alt="process 2" />
              <h4>Reimagine with a 3D design layout</h4>
            </div>
            <div class="${styles.processBox}">
              <img src="${ProcessIcon3}" alt="process 3" />
              <h4>Material selection within budget</h4>
            </div>
            <div class="${styles.processBox}">
              <img src="${ProcessIcon4}" alt="process 4" />
              <h4>Execute the Design</h4>
            </div>
            <div class="${styles.processBox}">
              <img src="${ProcessIcon5}" alt="process 5" />
              <h4>Step into your Beautiful Home</h4>
            </div>
          </div>
          <div class="${styles.pdfReasonBox}">
            <h2>Reasons to choose us</h2>
            <div class="${styles.pdfReasonsCards}">
              <div class="${styles.reasonCard}">
                <img src="${ReasonsIcon1}" alt="reason 1" />
                <h3>Customised Design</h3>
              </div>
              <div class="${styles.reasonCard}">
                <img src="${ReasonsIcon2}" alt="reason 2" />
                <h3>On Time Completion</h3>
              </div>
              <div class="${styles.reasonCard}">
                <img src="${ReasonsIcon3}" alt="reason 3" />
                <h3>Upto 10 Years Warranty</h3>
              </div>
              <div class="${styles.reasonCard}">
                <img src="${ReasonsIcon4}" alt="reason 4" />
                <h3>3D Visualization</h3>
              </div>
              <div class="${styles.reasonCard}">
                <img src="${ReasonsIcon5}" alt="reason 5" />
                <h3>Easy EMI Options</h3>
              </div>
              <div class="${styles.reasonCard}">
                <img src="${ReasonsIcon6}" alt="reason 6" />
                <h3>On Budget</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="${styles.pdfQueryBox}">
          <p>
            For any queries call us on
            <span>
              1800-209-5678 <img src="${PhoneIcon}" alt="phone" />
            </span>
          </p>
        </div>
      </div>
    `;
  };

  const handleDownloadPdf = async () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const addPageToPdf = async (elementId, addNewPage = true) => {
      const input = document.getElementById(elementId);
      if (!input) {
        console.error(`Element with ID ${elementId} not found`);
        return;
      }

      try {
        const canvas = await html2canvas(input, { scale: 1.5 });
        const imgData = canvas.toDataURL("image/png");
        const imgProps = pdf.getImageProperties(imgData);
        const imgWidth = imgProps.width;
        const imgHeight = imgProps.height;
        const ratio = imgWidth / pdfWidth;
        const pageHeight = pdfHeight * ratio;

        const totalPages = Math.ceil(imgHeight / pageHeight);

        for (let i = 0; i < totalPages; i++) {
          const srcY = i * pageHeight;
          const srcHeight = Math.min(pageHeight, imgHeight - srcY);

          const canvasPage = document.createElement("canvas");
          canvasPage.width = imgWidth;
          canvasPage.height = srcHeight;
          const ctx = canvasPage.getContext("2d");

          ctx.drawImage(
            canvas,
            0,
            srcY,
            imgWidth,
            srcHeight,
            0,
            0,
            imgWidth,
            srcHeight
          );

          const imgDataPage = canvasPage.toDataURL("image/png");
          if (i > 0 || addNewPage) pdf.addPage();
          pdf.addImage(
            imgDataPage,
            "PNG",
            0,
            0,
            pdfWidth,
            (srcHeight * pdfWidth) / imgWidth
          );
        }
      } catch (error) {
        console.error(`Failed to capture element with ID ${elementId}`, error);
      }
    };

    await addPageToPdf("page-1", false); // First page without adding a new page
    await addPageToPdf("page-2");
    await addPageToPdf("page-3");

    pdf.save("wardrobeEstimate.pdf");
  };

  return (
    <>
      <div className={styles.wardrobeContainer}>
        <Row className={`h-100 justify-content-between align-items-center`}>
          <Col lg={6} md={6} sm={12} xs={12}>
            {isMobile && showPackage && (
              <div className={styles.packageRightBox}>
                <h4 className={styles.packageTitle}>Economy Package</h4>
                <p className={styles.packageDescription}>
                  High-end interior solutions for the ultimate wardrobe
                  experience.
                </p>
                <h2 className={styles.packagePrice}>₹ 2,51,527.00</h2>
              </div>
            )}
            {!(showDetails && isMobile) && (
              <div className={styles.wardrobe}>
                <h2 className={styles.title}>
                  Build your wardrobe and get cost estimation
                </h2>
                <div className={styles.buttons}>
                  <div className={styles.roundbox}>
                    {DOOR_LIST.map((door, index) => (
                      <div
                        key={index}
                        className={cx(styles.rounds, {
                          [styles.bordered]:
                            doorPanelOptions?.door === door.label,
                        })}
                        onClick={() => handleDoorClick(door)}
                      >
                        <img src={door.thumb} alt={door.label} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.imageView}>
                  <img src={WARDROBE_IMAGE} alt={`Wardrobe`} />
                </div>
                {showShades && (
                  <div className={styles.shadesBox}>
                    <h4>Available top {woodFinish} shades</h4>
                    <div className={styles.shades}>
                      <div className={styles.shadeItem}>
                        <div className={styles.shadeColor}></div>
                        <div className={styles.shadeTitle}>Green</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            xs={12}
            className={`d-flex align-items-center justify-content-center text-center`}
          >
            {showDoorPanel && (
              <div className={styles.rightBox}>
                <h4 className="mb-0">1. Select a door panel</h4>
                <div className={styles.doorPanel}>
                  {DOOR_LIST.map((door, index) => (
                    <div
                      key={index}
                      className={cx(styles.doorPanelItem, {
                        [styles.bordered]:
                          doorPanelOptions?.door === door.label,
                      })}
                      onClick={() => handleDoorClick(door)}
                    >
                      <div className={styles.doorPanelImage}>
                        <img src={door.thumb} alt={door.label} />
                      </div>
                      <div className={styles.doorPanelTitle}>{door.label}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button1}
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
                    {WARDROBE_DIMENSIONS.map((dimension) => (
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
                            checked={
                              doorPanelOptions?.dimension === dimension.label
                            }
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
                    className={styles.button2}
                    onClick={() => {
                      setShowDoorpanel(true);
                      setShowWardrobe(false);
                    }}
                  >
                    Back
                  </button>
                  <button className={styles.button1} onClick={showFinishes}>
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
                  {WOOD_FINISH_OPTIONS.map((finish) => (
                    <div
                      key={finish.id}
                      className={cx(
                        styles.doorPanelItem,
                        finish.label === woodFinish ? styles.bordered : ""
                      )}
                      onClick={() => {
                        setWoodFinish(finish.label);
                      }}
                    >
                      <div className={styles.doorPanelImage}>
                        <img src={finish.thumb} alt={finish.label} />
                      </div>
                      <div className={styles.doorPanelTitle}>
                        {finish.label}
                      </div>
                      <p className="mb-0">({finish.subTitle})</p>
                    </div>
                  ))}
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button2}
                    onClick={() => {
                      setShowWardrobe(true);
                      setShowWoodFinish(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className={styles.button1}
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
                  <Row className="h-100 justify-content-center g-4">
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <div className={styles.inputBox}>
                        <label className={styles.inputLabel}>Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          autoComplete="off"
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
                          autoComplete="off"
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
                          autoComplete="off"
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
                          autoComplete="off"
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
                  <div className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                    />
                    <span className={styles.checkboxLabel}>
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
                      className={styles.button2}
                      onClick={() => {
                        setShowWoodFinish(true);
                        setShowDetails(false);
                        setShowPackage(false);
                      }}
                    >
                      Back
                    </button>
                    <button type="submit" className={styles.button3}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
            {loadingScreen && (
              <div className={styles.loadingScreen}>
                <div className={styles.gif}>
                  <img src={LOADING_GIF} alt="loading" />
                </div>
                <p>
                  Please allow us a moment as
                  <br />
                  we generate an estimate for your <span>wardrobe!</span>
                </p>
              </div>
            )}
            {showPackage && (
              <div className={styles.packageRightBox}>
                {!isMobile && (
                  <>
                    <h4 className={styles.packageTitle}>Economy Package</h4>
                    <p className={styles.packageDescription}>
                      High-end interior solutions for the ultimate wardrobe
                      experience.
                    </p>
                    <h2 className={styles.packagePrice}>₹ 2,51,527.00</h2>
                  </>
                )}
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button3}
                    onClick={handleDownloadPdf}
                  >
                    Download PDF
                  </button>
                  <button className={styles.button1} onClick={visualizeAgain}>
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
                      {doorPanelOptions?.door}
                    </span>
                  </div>
                  <div className={styles.specificationItem}>
                    <span className={styles.specificationLabel}>
                      Dimensions
                    </span>
                    <span className={styles.specificationValue}>
                      {doorPanelOptions?.dimension}
                    </span>
                  </div>
                  <div className={styles.specificationItem}>
                    <span className={styles.specificationLabel}>
                      Wood finish
                    </span>
                    <span className={styles.specificationValue}>
                      {woodFinish}
                    </span>
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
        {/* <div ref={pdfContentRef}></div> */}
      </div>
    </>
  );
};

export default WardrobeImageViewer;
