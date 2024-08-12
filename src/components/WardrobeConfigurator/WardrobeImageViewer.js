import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Col, Row } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./WardrobeConfigurator.module.scss";
import cx from "classnames";
import FinishPopup from "./FinishPopup";
import WARDROBE_IMAGE from "../../assets/images/wardrobe.png";
import LOADING_GIF from "../../assets/images/loadingGif.gif";
import BeautifullHomesLogo from "../../assets/images/BeautifulHomesLogo.png";
import PhoneIcon from "../../assets/images/phone.png";
import { LogoIcon } from "../../assets/images/LogoIcon.js";
import {
  createLeadInSalesforce,
  getScenesInPrototypeForPublic,
  getSceneViewBackgroundInfoPublic,
} from "../../api/configuratorApi";
import {
  DOOR_LIST,
  WOOD_FINISH_OPTIONS,
  PDF_PROCESS,
  PDF_REASONS,
  WARDROBE_TYPE_WITH_DIMENSIONS,
  WARDROBE_DATA,
  CAMERA_ANGLE_1,
  CAMERA_ANGLE_2,
  FINISH_SHADES_LIST,
  CARCUSS_FINISH,
  PDF_IMAGES,
} from "../../constants/wardrobeConstants";
import {
  adobeAnaDimensionBack,
  adobeAnaDimensionNext,
  adobeAnaLeadFormSubmition,
  adobeAnaSelectedDoorPanel,
  adobeAnaSelectedShades,
  adobeAnaSelectedTab,
  adobeAnaSelectedWoodFinish,
  adobeAnaWardrobeAction,
  objectToFormData,
} from "../../helpers/jsHelper";
import Loader from "../../common/Loader";
import CircularProgress from "../../common/CircularProgress.js";
import { getSceneLabelOptions } from "../Configurator/utils/index.js";
import { API_ROOT_URL } from "../../constants/apiConstant.js";
import axios from "axios";
import { errorToastV2 } from "../../helpers/toastHelper.js";
let APIData = [];

const WardrobeImageViewer = ({
  isImageViewer = true,
  doorPanelOptions,
  setDoorPanelOptions,
  loader,
  setLoader,
  selectedStoreLocal,
  allStoreList,
  modelId,
  isRender,
}) => {
  const [showDoorPanel, setShowDoorpanel] = useState(true);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [woodFinish, setWoodFinish] = useState(
    WOOD_FINISH_OPTIONS[0]?.label || ""
  );
  const [wardrobePackage, setWardrobePackage] = useState(
    WOOD_FINISH_OPTIONS[0]?.subTitle || ""
  );
  const [showWoodFinish, setShowWoodFinish] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [showShades, setShowShades] = useState(false);
  const [errors, setErrors] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    pincode: "",
    mobile: "",
    email: "",
    receiveUpdates: true,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [price, setPrice] = useState(null);
  const [cameraAngles, setCameraAngles] = useState([]);
  const [currentAngle, setCurrentAngle] = useState({});
  const [downloading, setDownloading] = useState(false);
  const [allScenes, setAllScenes] = useState([]);
  const [outerLoader, setOuterLoader] = useState(true);
  const [selectedStore, setSelectedStore] = useState();
  const [colorFinish, setColorFinish] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [selectedTextures, setSelectedTextures] = useState([]);
  const [threeSixtyImages, setThreeSixtyImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shadeList, setShadeList] = useState([]);
  const [selectedCurcass, setSelectedCurcass] = useState([]);
  const [scene_id, setScene_id] = useState(null);
  const [activeShade, setActiveShade] = useState({});
  const [pdfShadesImages, setPdfShadesImages] = useState([]);
  const [pdfRenderImages, setPdfRenderImages] = useState([]);

  const sceneBackgroundInfo = async (paylaod) => {
    const res = await getSceneViewBackgroundInfoPublic(paylaod);
    // setSceneBackgroundInfoData(res);
    return res;
  };

  useEffect(() => {
    async function loadAndCheckStoreData() {
      if (allStoreList?.length) {
        setOuterLoader(true);
        const scenes = await getScenesInPrototypeForPublic({
          token: modelId,
          is_render: isRender,
        });
        setAllScenes([...scenes]);
        if (scenes?.length) {
          const sceneId = scenes[0]?.id;
          // console.log(sceneId, "sceneIdsceneId");
          setScene_id(sceneId);
          // let filteredData = allStoreList?.filter(
          //   (val) => parseInt(val?.scene?.id) === parseInt(sceneId)
          // );
          // if (!filteredData?.length && selectedStoreLocal) {
          //   filteredData = [selectedStoreLocal];
          // }
          // const sortedData = filteredData.sort(
          //   (a, b) => new Date(b?.updated_at) - new Date(a?.updated_at)
          // );
          // sortedData?.length && setSelectedStore(sortedData[0]);

          const labelData = await getSceneLabelOptions({
            sceneId: sceneId,
            token: modelId,
            storeId: allStoreList[0]?.id,
          });

          const sceneViewsData = await sceneBackgroundInfo({
            storeId: allStoreList[1]?.id,
            token: modelId,
            scene: sceneId,
          });

          // console.log(sceneViewsData, "sceneViewsData");
          setCameraAngles(sceneViewsData);
          setCurrentAngle(cameraAngles[0]);
          const panelFinishes = labelData.filter(
            (item) => item.name === "Panel Finish"
          );
          setColorFinish(panelFinishes);
        }
      }
    }
    loadAndCheckStoreData();
  }, [doorPanelOptions, selectedStoreLocal, allStoreList]);
  // console.log(colorFinish[0]?.textures, woodFinish);

  const getShadelist = () => {
    const shades = FINISH_SHADES_LIST.filter((type) => {
      return (
        type.doorType === doorPanelOptions?.door &&
        type.size === doorPanelOptions?.dimension &&
        type.finishType === woodFinish
      );
    });
    const selectedShadesList = shades ? shades : null;
    return selectedShadesList;
  };

  const getCurcassList = () => {
    const curcass = CARCUSS_FINISH.filter((type) => {
      return (
        type.doorType === doorPanelOptions?.door &&
        type.size === doorPanelOptions?.dimension
      );
    });
    const selectedCurcass = curcass ? curcass : null;
    return selectedCurcass;
  };
  // console.log(selectedCurcass, "getCurcassList");

  useEffect(() => {
    const shades = getShadelist();
    setShadeList(shades);
    setActiveShade(shadeList[0]);
    const curcass = getCurcassList();
    setSelectedCurcass(curcass);
  }, [doorPanelOptions, woodFinish,showShades]);

  useEffect(() => {
    const fetchTextures = async () => {
      const imageTextures = await getDefaultTextures();
      setSelectedTextures(imageTextures);
    };
    fetchTextures();
  }, [doorPanelOptions, selectedCurcass, activeShade]);

  const handleFilterAllImage = () => {
    return allImages || [];
  };

  // useEffect(()=>{
  //   handleFilterAllImage()
  // },[allImages])

  function removeDuplicateImage(list) {
    const uniqueSeqNos = {};
    const uniqueArray = [];
    list?.forEach((item) => {
      if (!uniqueSeqNos[item?.seq_no]) {
        uniqueSeqNos[item?.seq_no] = true;
        uniqueArray.push(item);
      }
    });
    return uniqueArray;
  }

  const getDefaultTextures = () => {
    let defaultTextures = [];
    defaultTextures.push(selectedCurcass[0]);
    defaultTextures.push(activeShade);
    return defaultTextures;
    // console.log(defaultTextures,"defaultTextures")
  };

  useEffect(() => {
    async function loadAndCheckImages() {
      // console.log(allScenes, "allScenes");
      const mergeData = {
        scene: scene_id,
        textures: selectedTextures,
        is_render: true,
        ext: "png",
        store: allStoreList[1]?.id,
      };
      // console.log(mergeData, "mergeData");
      setLoader(true);
      const res = await getAllMergeData({
        mergeData,
        textureIds: selectedTextures,
        resetFrame: false,
        sceneView: currentAngle?.id,
        total: cameraAngles?.length,
      });
      // console.log(res, "res");
      setAllImages(res?.data?.data?.images);
      setLoader(false);
    }
    loadAndCheckImages();
  }, [showShades, selectedTextures, allStoreList, currentAngle]);

  const getAllMergeData = async ({
    mergeData,
    textureIds,
    resetFrame,
    sceneView,
    total,
  }) => {
    const lastCall = +total;
    const allTextures = textureIds || selectedTextures;
    const textures = allTextures?.map((val) => val?.id);
    const renders = allTextures?.map((val) => val?.render_id);
    const sceneTextureRender = allTextures?.map(
      (val) => val?.scenetexturerender_id
    );
    const data = {
      textures: textures,
      renders: renders,
      is_render: true,
      scenetexture_render: sceneTextureRender,
      scene_view: sceneView,
      scene: mergeData?.scene,
      store: mergeData?.store,
      ext: "png",
    };
    const formData = objectToFormData(data, { separateArrayItems: true });
    if (!outerLoader) {
      showLoader();
    }
    try {
      let url =
        API_ROOT_URL + "/configurator/api/v2/merge/v2/?token=" + modelId;
      const response = await axios.post(url, formData);
      const data = response?.data?.data;
      APIData = [...APIData, ...removeDuplicateImage(data?.images)];
      if (data && APIData.length > 0 && lastCall) {
        let imagesToSet = JSON.parse(JSON.stringify(APIData));
        setAllImages(imagesToSet);
        if (!isImageViewer) {
          const images = [];
          APIData.forEach((image) => {
            images.push(image.image || image.image_low);
          });
          setThreeSixtyImages(images);
          if (!data?.images?.length) {
            loadedImage();
          }
        } else {
          loadedImage();
        }
        if (+currentFrame >= imagesToSet?.length || resetFrame) {
          setCurrentFrame(0);
        }
      }
      return response;
    } catch (err) {
      errorToastV2("Something went wrong. Please try again.");
      loadedImage();
    }
  };

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  const loadedImage = (e) => {
    hideLoader();
    setOuterLoader(false);
  };

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

    if (!formData.firstname) newErrors.name = "Name is required";
    // if (!formData.lastname || formData.lastname === 'NA') newErrors.name = 'Last name is required';

    // Pincode validation
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else {
      const pincodeRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
      if (!pincodeRegex.test(formData.pincode)) {
        newErrors.pincode = "Enter valid Pincode";
      }
    }

    // Mobile number validation
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else {
      const mobileRegex = /^[7-9][0-9]{9}$/;
      if (!mobileRegex.test(formData.mobile)) {
        newErrors.mobile = "Enter valid Mobile number";
      }
    }

    // Email validation
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

    if (name === "name") {
      const [firstname, ...lastnameArray] = value.split(" ");
      const lastname =
        lastnameArray.length > 0 ? lastnameArray.join(" ") : "NA";

      setFormData({
        ...formData,
        firstname,
        lastname,
      });
    } else if (name === "pincode") {
      if (value.length <= 6) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === "mobile") {
      if (value.length <= 10) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData, "formDataformData");
    // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    // const validationErrors = await validate();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   // console.log(validationErrors);
    //   return;
    // }

    try {
      const updatedPrice = await getPrice();
      // console.log(updatedPrice, "updatedPrice");
      const formattedPrice = formatIndianCurrency(updatedPrice);
      setPrice(formattedPrice);
      setShowDetails(false);
      setLoadingScreen(true);
      // await delay(10000);
      // const response = await createLeadInSalesforce(formData, updatedPrice);
      // console.log("Lead created successfully:", response);
      setLoadingScreen(false);
      setShowPackage(true);
      setShowShades(true);

      // adobeAnaLeadFormSubmition(
      //   formData.pincode,
      //   response.CRMleadId,
      //   response.returnCode
      // );
    } catch (error) {
      console.error("Error creating lead:", error);
    }
  };

  const showFinishes = () => {
    adobeAnaDimensionNext(doorPanelOptions.dimension);
    setShowWardrobe(false);
    setShowWoodFinish(true);
    cameraAngles.length > 0 && setCurrentAngle(cameraAngles[0]);
  };

  const visualizeAgain = () => {
    adobeAnaWardrobeAction("visualize again", wardrobePackage);
    setShowDoorpanel(true);
    setShowWardrobe(false);
    setShowWoodFinish(false);
    setShowDetails(false);
    setShowPackage(false);
    setShowShades(false);
    setDoorPanelOptions({
      door: DOOR_LIST?.[0].label,
      dimension: WARDROBE_TYPE_WITH_DIMENSIONS[0].dimensions[0].size,
    });
    setWoodFinish(WOOD_FINISH_OPTIONS[0]?.label || "");
    setFormData({
      firstname: "",
      lastname: "",
      pincode: "",
      mobile: "",
      email: "",
      receiveUpdates: true,
    });
    // window.location.reload();
  };

  const handleDoorClick = (door) => {
    // adobeAnaSelectedTab(door.label);
    // setDoorPanelOptions({
    //   ...doorPanelOptions,
    //   door: door.label,
    // });
    const newDoor = door.label;
    const firstDimension = WARDROBE_TYPE_WITH_DIMENSIONS.find(
      (d) => d.id === newDoor
    ).dimensions[0].size;
    setDoorPanelOptions({
      door: newDoor,
      dimension: firstDimension,
    });
  };

  const handleCameraAngleClick = (angle) => {
    // console.log(angle)
    adobeAnaSelectedTab(angle?.name);
    setCurrentAngle(angle);
  };

  useEffect(() => {
    // Define the async function inside the useEffect
    const getPdfImages = async () => {
      const matchingType = PDF_IMAGES.filter((type) => {
        return (
          type.doorType === doorPanelOptions?.door &&
          type.size === doorPanelOptions?.dimension &&
          type.finishType === woodFinish
        );
      });
      // Update state after processing
      setPdfRenderImages(matchingType);
    };
    // Call the async function
    getPdfImages();
  }, [doorPanelOptions, woodFinish]);  // Dependencies array

  const pdfContent = async (shadeImages) => {
    // Remove any existing hidden div to avoid duplications
    const existingDiv = document.getElementById("pdf-content");
    if (existingDiv) {
      existingDiv.remove();
    }

    const createPdfShadesImages = async () => {
      // console.log(selectedCurcass, "getCurcassList");
      // console.log(shadeList, "shadeListshadeList");
    
      let combinedResults = [];
    
      const curcassTexture = selectedCurcass[0]; // Since there's only one item in selectedCurcass
    
      for (let j = 0; j < shadeList.length; j++) {
        let selectedPdfTextures = [];
    
        // Combine the single selectedCurcass item with each shadeList[j]
        const shadeTexture = shadeList[j];
    
        // Create selectedPdfTextures for each shadeList item
        selectedPdfTextures.push(curcassTexture);
        selectedPdfTextures.push(shadeTexture);
    
        const mergeData = {
          scene: scene_id,
          textures: selectedPdfTextures,
          is_render: true,
          ext: "png",
          store: allStoreList[1]?.id,
        };
    
        // Call getAllMergeData for each combination
        const res = await getAllMergeData({
          mergeData,
          textureIds: selectedPdfTextures,
          resetFrame: false,
          sceneView: cameraAngles[0]?.id,
          total: cameraAngles?.length,
        });
    
        // console.log(res, "res");
    
        // Push the result to combinedResults
        combinedResults.push(res?.data?.data);
      }
      // console.log(combinedResults, "combinedResults");
      // Update setPdfShadesImages with the combined results
      setPdfShadesImages(combinedResults.flat());
    };
    
    // Call the function
    await createPdfShadesImages();
    // console.log(pdfShadesImages, "pdfShadesImages");

    // console.log(pdfShadesImages[0]?.images[0]?.image_low, "pdfShadesImages");
    
    // Create a new hidden div
    const hiddenDiv = document.createElement("div");
    hiddenDiv.id = "pdf-content";
    hiddenDiv.style.position = "absolute";
    hiddenDiv.style.left = "-9999px"; // Move off-screen
    hiddenDiv.style.width = "100%";
    hiddenDiv.style.height = "100%";
    hiddenDiv.style.overflow = "visible";

    const pdfImagesBoxHtml = shadeImages?.map((item,i) => {
      return `
        <div class="${styles.shadeBox}" key="${item?.id}">
          <div class="${styles.imageBox}">
            <img src="${item?.image}" alt="shade" />
          </div>
          <h4>${item?.name}</h4>
        </div>
      `;
    }).join("");

    // console.log(pdfImagesBoxHtml,"pdfImagesBoxHtmlpdfImagesBoxHtml")

    const processBoxHtml = PDF_PROCESS.map((process) => {
      return `
        <div class="${styles.processBox}" key="${process.id}">
          <img src="${process.value}" alt="process ${process.id}" />
          <h4>${process.desc}</h4>
        </div>
      `;
    }).join("");

    const reasonBoxHtml = PDF_REASONS.map((reasons) => {
      return `
        <div class="${styles.reasonCard}" key="${reasons.id}">
          <img src="${reasons.value}" alt="reason ${reasons.id}" />
          <h3>${reasons.desc}</h3>
        </div>
      `;
    }).join("");

    const logoIconHtml = ReactDOMServer.renderToString(<LogoIcon />);

    // Add the hidden div to the body
    document.body.appendChild(hiddenDiv);

    // Insert your HTML content into the hidden div
    hiddenDiv.innerHTML = `
      <div id="page-1" class="${styles.pdfContainer}">
        <div class="${styles.pdfHeader}">
          <h2>Wardrobe estimate</h2>
          ${logoIconHtml}
        </div>
        <div class="${styles.pdfBody}">
          <h3>Dear ${formData?.firstname} ${
      formData?.lastname !== "NA" ? ` ${formData.lastname}` : ""
    }</h3>
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
                <h3>${wardrobePackage || "N/A"}</h3>
              </span>
              <span class="${styles.secondBox}">
                <p>Estimated cost: </p>
                <h3>${price}</h3>
              </span>
            </div>
            <div class="${styles.pdfWardrobeDetailsBody}">
              <div class="${styles.imageBox}">
                <img src="${pdfRenderImages[0]?.image}" alt="wardrobe" />
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
            ${pdfImagesBoxHtml}
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
            ${processBoxHtml}
          </div>
          <div class="${styles.pdfReasonBox}">
            <h2>Reasons to choose us</h2>
            <div class="${styles.pdfReasonsCards}">
              ${reasonBoxHtml}
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
    setDownloading(true);
    await pdfContent(pdfRenderImages);
    adobeAnaWardrobeAction("download pdf", wardrobePackage);
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
        // Ensure images are fully loaded
        // const images = input.querySelectorAll('img');
        // let imageLoadPromises = [];
  
        // images.forEach((img) => {
        //   if (!img.complete) {
        //     const imgLoadPromise = new Promise((resolve) => {
        //       img.onload = resolve;
        //       img.onerror = resolve;
        //     });
        //     imageLoadPromises.push(imgLoadPromise);
        //   }
        // });
  
        // await Promise.all(imageLoadPromises);
  
        // Capture the canvas
        const canvas = await html2canvas(input, {
          scale: 2,
          logging: true,
          useCORS: true // Enable cross-origin resource sharing
        });
  
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
    setDownloading(false);
  };

  const filteredDimensions = WARDROBE_TYPE_WITH_DIMENSIONS.filter(
    (type) => type.id === doorPanelOptions?.door
  )[0].dimensions;

  const formatIndianCurrency = (number) => {
    // Convert the number to a string with fixed 2 decimal places
    let [integerPart, decimalPart] = number.toFixed(2).split(".");

    // Convert integer part to Indian numbering system
    let lastThreeDigits = integerPart.slice(-3);
    let otherDigits = integerPart.slice(0, -3);
    if (otherDigits !== "") {
      lastThreeDigits = "," + lastThreeDigits;
    }
    const formattedInteger =
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;

    return `₹ ${formattedInteger}.${decimalPart}`;
  };

  const getPrice = () => {
    const matchingType = WARDROBE_DATA.find((type) => {
      return (
        type.doorType === doorPanelOptions?.door &&
        type.size === doorPanelOptions?.dimension &&
        type.finishType === woodFinish
      );
    });
    const wardrobePrice = matchingType ? matchingType.price : null;
    return wardrobePrice;
  };

  return (
    <>
      <div className={styles.wardrobeContainer}>
        <Row className={`h-100 justify-content-between align-items-center`}>
          <Col lg={6} md={6} sm={12} xs={12}>
            {isMobile && showPackage && (
              <div className={styles.packageRightBox}>
                <h4 className={styles.packageTitle}>
                  {wardrobePackage} Package
                </h4>
                <p className={styles.packageDescription}>
                  High-end interior solutions for the ultimate wardrobe
                  experience.
                </p>
                <h2 className={styles.packagePrice}>{price}</h2>
              </div>
            )}
            {!(showDetails && isMobile) && (!isMobile || !loadingScreen) && (
              <div className={styles.wardrobe}>
                <h2 className={styles.title}>
                  Build your wardrobe and get cost estimation
                </h2>
                <div className={styles.buttons}>
                  <div className={styles.roundbox}>
                    <div
                      className={cx(styles.rounds, {
                        [styles.bordered]:
                          currentAngle?.name === cameraAngles[0]?.name,
                      })}
                      onClick={() => handleCameraAngleClick(cameraAngles[0])}
                    >
                      <img src={CAMERA_ANGLE_1} alt={cameraAngles[0]?.name} />
                    </div>
                    <div
                      className={cx(styles.rounds, {
                        [styles.bordered]:
                          currentAngle?.name === cameraAngles[1]?.name,
                      })}
                      onClick={() => handleCameraAngleClick(cameraAngles[1])}
                    >
                      <img src={CAMERA_ANGLE_2} alt={cameraAngles[1]?.name} />
                    </div>
                  </div>
                </div>
                <div className={styles.imageView}>
                  {loader && (
                    <div>
                      <CircularProgress />
                    </div>
                  )}
                  {/* {!loader && <img src={WARDROBE_IMAGE} alt={`Wardrobe`} />} */}
                  {!loader && allImages?.length && (
                    <img
                      src={handleFilterAllImage()[currentFrame]?.image_low}
                    />
                  )}
                </div>
                {showShades && (
                  <div className={styles.shadesBox}>
                    <h4>Available top {woodFinish} shades</h4>
                    <div className={styles.shades}>
                      {shadeList?.map((item, index) => (
                        <div
                          className={cx(styles.shadeItem, {
                            [styles.bordered]: item?.id === activeShade?.id,
                          })}
                          key={item?.id}
                          onClick={() => {
                            adobeAnaSelectedShades(
                              woodFinish,
                              item?.display_name
                            );
                            setActiveShade(item);
                          }}
                        >
                          <div
                            className={styles.shadeColor}
                            style={{
                              backgroundColor: item?.color_code,
                              backgroundImage: `url(${item?.thumb})`,
                            }}
                          ></div>
                          <div className={styles.shadeTitle}>
                            <h4>{item?.display_name}</h4>
                          </div>
                        </div>
                      ))}
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
                      adobeAnaSelectedDoorPanel(doorPanelOptions?.door);
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
                  <Row className={`h-100 justify-content-start g-4`}>
                    {filteredDimensions.map((dimension) => (
                      <Col
                        key={dimension.id}
                        xs={4}
                        className={`d-flex align-items-center justify-content-center text-center`}
                      >
                        <label className={styles.label}>
                          <input
                            type="radio"
                            name="wardrobe_dimension"
                            value={dimension.size}
                            checked={
                              doorPanelOptions?.dimension === dimension.size
                            }
                            onChange={handleRadioChange}
                            className={styles.input}
                          />
                          <span className={styles.labelText}>
                            {dimension.size}.
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
                      adobeAnaDimensionBack();
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
                        setWardrobePackage(finish.subTitle);
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
                      adobeAnaSelectedWoodFinish(woodFinish);
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
                          type="number"
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
                          type="number"
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
                    <h4 className={styles.packageTitle}>
                      {wardrobePackage} Package
                    </h4>
                    <p className={styles.packageDescription}>
                      High-end interior solutions for the ultimate wardrobe
                      experience.
                    </p>
                    <h2 className={styles.packagePrice}>{price}</h2>
                  </>
                )}
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button3}
                    onClick={handleDownloadPdf}
                  >
                    {downloading ? "downloading PDF..." : "Download PDF"}
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
      </div>
    </>
  );
};

export default WardrobeImageViewer;
