import SLIDING_THUMB from "../assets/images/sliding.png";
import HINGED_THUMB from "../assets/images/hinged.png";
import LAMINATE_THUMB from "../assets/images/laminate.png";
import ACRYLIC_THUMB from "../assets/images/acrylic.png";
import PU_THUMB from "../assets/images/pu.png";
import ProcessIcon1 from "../assets/images/ProcessIcon1.png";
import ProcessIcon2 from "../assets/images/ProcessIcon2.png";
import ProcessIcon3 from "../assets/images/ProcessIcon3.png";
import ProcessIcon4 from "../assets/images/ProcessIcon4.png";
import ProcessIcon5 from "../assets/images/ProcessIcon5.png";
import ReasonsIcon1 from "../assets/images/ReasonsIcon1.png";
import ReasonsIcon2 from "../assets/images/ReasonsIcon2.png";
import ReasonsIcon3 from "../assets/images/ReasonsIcon3.png";
import ReasonsIcon4 from "../assets/images/ReasonsIcon4.png";
import ReasonsIcon5 from "../assets/images/ReasonsIcon5.png";
import ReasonsIcon6 from "../assets/images/ReasonsIcon6.png";

export const SALESFORCE_TOKEN_URL =
  "https://test.salesforce.com/services/oauth2/token";
export const SALESFORCE_LEAD_URL =
  "https://1ap--devnew.sandbox.my.salesforce.com/services/apexrest/Lead/";

export const SALESFORCE_CLIENT_ID = process.env.REACT_APP_SALESFORCE_CLIENT_ID
export const SALESFORCE_CLIENT_SECRET =process.env.REACT_APP_SALESFORCE_CLIENT_SECRET
export const SALESFORCE_USERNAME = process.env.REACT_APP_SALESFORCE_USERNAME
export const SALESFORCE_PASSWORD =process.env.REACT_APP_SALESFORCE_PASSWORD

export const SLIDING_DOOR = "Sliding door";
export const HINGED_DOOR = "Hinged door";

export const CAMERA_ANGLE_1 = SLIDING_THUMB;
export const CAMERA_ANGLE_2 = SLIDING_THUMB;

export const DOOR_LIST = [
  {
    value: SLIDING_DOOR,
    label: SLIDING_DOOR,
    thumb: SLIDING_THUMB,
  },
  {
    value: HINGED_DOOR,
    label: HINGED_DOOR,
    thumb: HINGED_THUMB,
  },
];

export const LAMINATE = "Laminate";
export const ACRYLIC = "Acrylic";
export const PU = "PU";

export const WOOD_FINISH_OPTIONS = [
  {
    id: 1,
    value: LAMINATE,
    label: LAMINATE,
    subTitle: "Economy",
    thumb: LAMINATE_THUMB,
    desc: "Lorem ipsum dolor sit amet consectetur. Id ac tristique eu eget non. In tempus aenean libero lectus vulputate duis laoreet. Ac leo lacus dis orci. Libero malesuada lorem dolor quisque amet.",
  },
  {
    id: 2,
    value: ACRYLIC,
    label: ACRYLIC,
    subTitle: "Premium",
    thumb: ACRYLIC_THUMB,
    desc: "Lorem ipsum dolor sit amet consectetur. Id ac tristique eu eget non. In tempus aenean libero lectus vulputate duis laoreet. Ac leo lacus dis orci. Libero malesuada lorem dolor quisque amet.",
  },
  {
    id: 3,
    value: PU,
    label: PU,
    subTitle: "Luxury",
    thumb: PU_THUMB,
    desc: "Lorem ipsum dolor sit amet consectetur. Id ac tristique eu eget non. In tempus aenean libero lectus vulputate duis laoreet. Ac leo lacus dis orci. Libero malesuada lorem dolor quisque amet.",
  },
];

export const PDF_PROCESS = [
  {
    id: 1,
    value: ProcessIcon1,
    desc: "Understand your requirements",
  },
  {
    id: 2,
    value: ProcessIcon2,
    desc: "Reimagine with a 3D design layout",
  },
  {
    id: 3,
    value: ProcessIcon3,
    desc: "Material selection within budget",
  },
  {
    id: 4,
    value: ProcessIcon4,
    desc: "Execute the Design",
  },
  {
    id: 5,
    value: ProcessIcon5,
    desc: "Step into your Beautiful Home",
  },
];

export const PDF_REASONS = [
  {
    id: 1,
    value: ReasonsIcon1,
    desc: "Customised Design",
  },
  {
    id: 2,
    value: ReasonsIcon2,
    desc: "On Time Completion",
  },
  {
    id: 3,
    value: ReasonsIcon3,
    desc: "Upto 10 Years Warranty",
  },
  {
    id: 4,
    value: ReasonsIcon4,
    desc: "3D Visualization",
  },
  {
    id: 5,
    value: ReasonsIcon5,
    desc: "Easy EMI Options",
  },
  {
    id: 5,
    value: ReasonsIcon6,
    desc: "On Budge",
  },
];

export const WARDROBE_TYPE_WITH_DIMENSIONS = [
  {
    id: HINGED_DOOR,
    dimensions: [
      { id: 1, label: "6.25 x 6 ft", height: 6.25, width: 6 },
      { id: 2, label: "7 x 5 ft", height: 7, width: 5 },
      { id: 3, label: "7 x 6 ft", height: 7, width: 6 },
      { id: 4, label: "7 x 7 ft", height: 7, width: 7 },
      { id: 5, label: "7 x 8 ft", height: 7, width: 8 },
      { id: 6, label: "8 x 5 ft", height: 8, width: 5 },
      { id: 7, label: "8 x 6 ft", height: 8, width: 6 },
      { id: 8, label: "8 x 7 ft", height: 8, width: 7 },
      { id: 9, label: "8 x 8 ft", height: 8, width: 8 },
    ],
  },
  {
    id: SLIDING_DOOR,
    dimensions: [
      { id: 1, label: "6.25 x 6 ft", height: 6.25, width: 6 },
      { id: 2, label: "6.25 x 6.5 ft", height: 6.25, width: 6.5 },
      { id: 3, label: "6.25 x 7.25 ft", height: 6.25, width: 7.25 },
      { id: 4, label: "7 x 6 ft", height: 7, width: 6 },
      { id: 5, label: "7 x 6.5 ft", height: 7, width: 6.5 },
      { id: 6, label: "7 x 7.25 ft", height: 7, width: 7.25 },
      { id: 7, label: "8 x 6 ft", height: 8, width: 6 },
      { id: 8, label: "8 x 6.5 ft", height: 8, width: 6.5 },
      { id: 9, label: "8 x 7.25 ft", height: 8, width: 7.25 },
    ],
  },
];

export const WARDROBE_DATA = [
  {
    id: 1,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "6.25 x 6 ft",
    height: 6.25,
    width: 6,
    price: 124013,
  },
  {
    id: 2,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "7 x 5 ft",
    height: 7,
    width: 5,
    price: 115745,
  },
  {
    id: 3,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "7 x 6 ft",
    height: 7,
    width: 6,
    price: 138894,
  },
  {
    id: 4,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "7 x 7 ft",
    height: 7,
    width: 7,
    price: 162043,
  },
  {
    id: 5,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "7 x 8 ft",
    height: 7,
    width: 8,
    price: 185192,
  },
  {
    id: 6,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "8 x 5 ft",
    height: 8,
    width: 5,
    price: 132280,
  },
  {
    id: 7,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "8 x 6 ft",
    height: 8,
    width: 6,
    price: 158736,
  },
  {
    id: 8,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "8 x 7 ft",
    height: 8,
    width: 7,
    price: 185192,
  },
  {
    id: 9,
    doorType: HINGED_DOOR,
    finishType: LAMINATE,
    label: "8 x 8 ft",
    height: 8,
    width: 8,
    price: 211648,
  },

  {
    id: 10,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "6.25 x 6 ft",
    height: 6.25,
    width: 6,
    price: 150263,
  },
  {
    id: 11,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "7 x 5 ft",
    height: 7,
    width: 5,
    price: 140245,
  },
  {
    id: 12,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "7 x 6 ft",
    height: 7,
    width: 6,
    price: 168294,
  },
  {
    id: 13,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "7 x 7 ft",
    height: 7,
    width: 7,
    price: 196343,
  },
  {
    id: 14,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "7 x 8 ft",
    height: 7,
    width: 8,
    price: 224392,
  },
  {
    id: 15,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "8 x 5 ft",
    height: 8,
    width: 5,
    price: 160280,
  },
  {
    id: 16,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "8 x 6 ft",
    height: 8,
    width: 6,
    price: 192336,
  },
  {
    id: 17,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "8 x 7 ft",
    height: 8,
    width: 7,
    price: 224392,
  },
  {
    id: 18,
    doorType: HINGED_DOOR,
    finishType: ACRYLIC,
    label: "8 x 8 ft",
    height: 8,
    width: 8,
    price: 256448,
  },

  {
    id: 19,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "6.25 x 6 ft",
    height: 6.25,
    width: 6,
    price: 170438,
  },
  {
    id: 20,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "7 x 5 ft",
    height: 7,
    width: 5,
    price: 159075,
  },
  {
    id: 21,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "7 x 6 ft",
    height: 7,
    width: 6,
    price: 190890,
  },
  {
    id: 22,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "7 x 7 ft",
    height: 7,
    width: 7,
    price: 222705,
  },
  {
    id: 23,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "7 x 8 ft",
    height: 7,
    width: 8,
    price: 254520,
  },
  {
    id: 24,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "8 x 5 ft",
    height: 8,
    width: 5,
    price: 181800,
  },
  {
    id: 25,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "8 x 6 ft",
    height: 8,
    width: 6,
    price: 218160,
  },
  {
    id: 26,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "8 x 7 ft",
    height: 8,
    width: 7,
    price: 254520,
  },
  {
    id: 27,
    doorType: HINGED_DOOR,
    finishType: PU,
    label: "8 x 8 ft",
    height: 8,
    width: 8,
    price: 290880,
  },

  {
    id: 28,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "6.25 x 6 ft",
    height: 6.25,
    width: 6,
    price: 132288,
  },
  {
    id: 29,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "6.25 x 6.5 ft",
    height: 6.25,
    width: 6.5,
    price: 145856,
  },
  {
    id: 30,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "6.25 x 7.25 ft",
    height: 6.25,
    width: 7.25,
    price: 162816,
  },
  {
    id: 31,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "7 x 6 ft",
    height: 7,
    width: 6,
    price: 142464,
  },
  {
    id: 32,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    hlabel: "7 x 6.5 ft",
    height: 7,
    width: 6.5,
    price: 159424,
  },
  {
    id: 33,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "7 x 7.25 ft",
    height: 7,
    width: 7.25,
    price: 172992,
  },
  {
    id: 34,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "8 x 6 ft",
    height: 8,
    width: 6,
    price: 162816,
  },
  {
    id: 35,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "8 x 6.5 ft",
    height: 8,
    width: 6.5,
    price: 179776,
  },
  {
    id: 36,
    doorType: SLIDING_DOOR,
    finishType: LAMINATE,
    label: "8 x 7.25 ft",
    height: 8,
    width: 7.25,
    price: 200128,
  },

  {
    id: 37,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "6.25 x 6 ft",
    height: 6.25,
    width: 6,
    price: 169455,
  },
  {
    id: 38,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "6.25 x 6.5 ft",
    height: 6.25,
    width: 6.5,
    price: 186835,
  },
  {
    id: 39,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "6.25 x 7.25 ft",
    height: 6.25,
    width: 7.25,
    price: 208560,
  },
  {
    id: 40,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "7 x 6 ft",
    height: 7,
    width: 6,
    price: 182490,
  },
  {
    id: 41,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    hlabel: "7 x 6.5 ft",
    height: 7,
    width: 6.5,
    price: 204215,
  },
  {
    id: 42,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "7 x 7.25 ft",
    height: 7,
    width: 7.25,
    price: 221595,
  },
  {
    id: 43,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "8 x 6 ft",
    height: 8,
    width: 6,
    price: 208560,
  },
  {
    id: 44,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "8 x 6.5 ft",
    height: 8,
    width: 6.5,
    price: 230285,
  },
  {
    id: 45,
    doorType: SLIDING_DOOR,
    finishType: ACRYLIC,
    label: "8 x 7.25 ft",
    height: 8,
    width: 7.25,
    price: 256355,
  },

  {
    id: 46,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "6.25 x 6 ft",
    height: 6.25,
    width: 6,
    price: 195000,
  },
  {
    id: 47,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "6.25 x 6.5 ft",
    height: 6.25,
    width: 6.5,
    price: 215000,
  },
  {
    id: 48,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "6.25 x 7.25 ft",
    height: 6.25,
    width: 7.25,
    price: 240000,
  },
  {
    id: 49,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "7 x 6 ft",
    height: 7,
    width: 6,
    price: 210000,
  },
  {
    id: 50,
    doorType: SLIDING_DOOR,
    finishType: PU,
    hlabel: "7 x 6.5 ft",
    height: 7,
    width: 6.5,
    price: 235000,
  },
  {
    id: 51,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "7 x 7.25 ft",
    height: 7,
    width: 7.25,
    price: 255000,
  },
  {
    id: 52,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "8 x 6 ft",
    height: 8,
    width: 6,
    price: 240000,
  },
  {
    id: 53,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "8 x 6.5 ft",
    height: 8,
    width: 6.5,
    price: 265000,
  },
  {
    id: 54,
    doorType: SLIDING_DOOR,
    finishType: PU,
    label: "8 x 7.25 ft",
    height: 8,
    width: 7.25,
    price: 295000,
  },
];
