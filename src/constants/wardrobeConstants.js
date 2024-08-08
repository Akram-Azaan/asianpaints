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
    id: SLIDING_DOOR,
    dimensions: [
      { id: 1, doorType: SLIDING_DOOR, tokenUrl:"6.25 x 6 ft", size: "6.25 x 6 ft", },
      { id: 2, doorType: SLIDING_DOOR, tokenUrl:"6.25 x 6.5 ft", size: "6.25 x 6.5 ft", },
      { id: 3, doorType: SLIDING_DOOR, tokenUrl:"6.25 x 7.25 ft", size: "6.25 x 7.25 ft", },
      { id: 4, doorType: SLIDING_DOOR, tokenUrl:"7 x 6 ft", size: "7 x 6 ft", },
      { id: 5, doorType: SLIDING_DOOR, tokenUrl:"7 x 6.5 ft", size: "7 x 6.5 ft", },
      { id: 6, doorType: SLIDING_DOOR, tokenUrl:"7 x 7.25 ft", size: "7 x 7.25 ft", },
      { id: 7, doorType: SLIDING_DOOR, tokenUrl:"8 x 6 ft", size: "8 x 6 ft", },
      { id: 8, doorType: SLIDING_DOOR, tokenUrl:"8 x 6.5 ft", size: "8 x 6.5 ft", },
      { id: 9, doorType: SLIDING_DOOR, tokenUrl:"8 x 7.25 ft", size: "8 x 7.25 ft", },
    ],
  },
  {
    id: HINGED_DOOR,
    dimensions: [
      { id: 11, doorType: HINGED_DOOR, tokenUrl:"6.25 x 6 ft", size: "6.25 x 6 ft", },
      { id: 12, doorType: HINGED_DOOR, tokenUrl: "7 x 5 ft", size: "7 x 5 ft", },
      { id: 13, doorType: HINGED_DOOR, tokenUrl: "7 x 6 ft", size: "7 x 6 ft", },
      { id: 14, doorType: HINGED_DOOR, tokenUrl: "7 x 7 ft", size: "7 x 7 ft", },
      { id: 15, doorType: HINGED_DOOR, tokenUrl: "7 x 8 ft", size: "7 x 8 ft", },
      { id: 16, doorType: HINGED_DOOR, tokenUrl: "8 x 5 ft", size: "8 x 5 ft", },
      { id: 17, doorType: HINGED_DOOR, tokenUrl: "8 x 6 ft", size: "8 x 6 ft", },
      { id: 18, doorType: HINGED_DOOR, tokenUrl: "8 x 7 ft", size: "8 x 7 ft", },
      { id: 19, doorType: HINGED_DOOR, tokenUrl: "801120dc-2eb5-34e1-849b-936e923bd2a3", size: "8 x 8 ft", },
    ],
  },
];

export const WARDROBE_DATA = [

  {id: 1, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "6.25 x 6 ft", price: 132288,},
  {id: 2, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "6.25 x 6 ft", price: 169455,},
  {id: 3, doorType: SLIDING_DOOR, finishType: PU, size: "6.25 x 6 ft", price: 195000,},

  {id: 4, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "6.25 x 6.5 ft", price: 145856,},
  {id: 5, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "6.25 x 6.5 ft", price: 186835,},
  {id: 6, doorType: SLIDING_DOOR, finishType: PU, size: "6.25 x 6.5 ft", price: 215000,},

  {id: 7, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "6.25 x 7.25 ft", price: 162816,},
  {id: 8, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "6.25 x 7.25 ft", price: 208560,},
  {id: 9, doorType: SLIDING_DOOR, finishType: PU, size: "6.25 x 7.25 ft", price: 240000,},

  {id: 10, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "7 x 6 ft", price: 142464,},
  {id: 11, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "7 x 6 ft", price: 182490,},
  {id: 12, doorType: SLIDING_DOOR, finishType: PU, size: "7 x 6 ft", price: 210000,},

  {id: 13, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "7 x 6.5 ft", price: 159424,},
  {id: 14, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "7 x 6.5 ft", price: 204215,},
  {id: 15, doorType: SLIDING_DOOR, finishType: PU, size: "7 x 6.5 ft", price: 235000,},

  {id: 16, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "7 x 7.25 ft", price: 172992,},
  {id: 17, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "7 x 7.25 ft", price: 221595,},
  {id: 18, doorType: SLIDING_DOOR, finishType: PU, size: "7 x 7.25 ft", price: 255000,},

  {id: 19, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "8 x 6 ft", price: 162816,},
  {id: 20, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "8 x 6 ft", price: 208560,},
  {id: 21, doorType: SLIDING_DOOR, finishType: PU, size: "8 x 6 ft", price: 240000,},

  {id: 22, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "8 x 6.5 ft", price: 179776,},
  {id: 23, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "8 x 6.5 ft", price: 230285,},
  {id: 24, doorType: SLIDING_DOOR, finishType: PU, size: "8 x 6.5 ft", price: 265000,},

  {id: 25, doorType: SLIDING_DOOR, finishType: LAMINATE, size: "8 x 7.25 ft", price: 200128,},
  {id: 26, doorType: SLIDING_DOOR, finishType: ACRYLIC, size: "8 x 7.25 ft", price: 256355,},
  {id: 27, doorType: SLIDING_DOOR, finishType: PU, size: "8 x 7.25 ft", price: 295000,},

  {id: 28, doorType: HINGED_DOOR, finishType: LAMINATE, size: "6.25 x 6 ft", price: 124013,},
  {id: 29, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "6.25 x 6 ft", price: 150263,},
  {id: 30, doorType: HINGED_DOOR, finishType: PU, size: "6.25 x 6 ft", price: 170438,},

  {id: 31, doorType: HINGED_DOOR, finishType: LAMINATE, size: "7 x 5 ft", price: 115745,},
  {id: 32, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "7 x 5 ft", price: 140245,},
  {id: 33, doorType: HINGED_DOOR, finishType: PU, size: "7 x 5 ft", price: 159075,},

  {id: 34, doorType: HINGED_DOOR, finishType: LAMINATE, size: "7 x 6 ft", price: 138894,},
  {id: 35, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "7 x 6 ft", price: 168294,},
  {id: 36, doorType: HINGED_DOOR, finishType: PU, size: "7 x 6 ft", price: 190890,},

  {id: 37, doorType: HINGED_DOOR, finishType: LAMINATE, size: "7 x 7 ft", price: 162043,},
  {id: 38, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "7 x 7 ft", price: 196343,},
  {id: 39, doorType: HINGED_DOOR, finishType: PU, size: "7 x 7 ft", price: 222705,},

  {id: 40, doorType: HINGED_DOOR, finishType: LAMINATE, size: "7 x 8 ft", price: 185192,},
  {id: 41, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "7 x 8 ft", price: 224392,},
  {id: 42, doorType: HINGED_DOOR, finishType: PU, size: "7 x 8 ft", price: 254520,},

  {id: 43, doorType: HINGED_DOOR, finishType: LAMINATE, size: "8 x 5 ft", price: 132280,},
  {id: 44, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "8 x 5 ft", price: 160280,},
  {id: 45, doorType: HINGED_DOOR, finishType: PU, size: "8 x 5 ft", price: 181800,},

  {id: 46, doorType: HINGED_DOOR, finishType: LAMINATE, size: "8 x 6 ft", price: 158736,},
  {id: 47, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "8 x 6 ft", price: 192336,},
  {id: 48, doorType: HINGED_DOOR, finishType: PU, size: "8 x 6 ft", price: 218160,},

  {id: 49, doorType: HINGED_DOOR, finishType: LAMINATE, size: "8 x 7 ft", price: 185192,},
  {id: 50, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "8 x 7 ft", price: 224392,},
  {id: 51, doorType: HINGED_DOOR, finishType: PU, size: "8 x 7 ft", price: 254520,},

  {id: 52, doorType: HINGED_DOOR, finishType: LAMINATE, size: "8 x 8 ft", price: 211648,},
  {id: 53, doorType: HINGED_DOOR, finishType: ACRYLIC, size: "8 x 8 ft", price: 256448,},
  {id: 54, doorType: HINGED_DOOR, finishType: PU, size: "8 x 8 ft", price: 290880,},
];
