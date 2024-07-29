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

export const WARDROBE_DIMENSIONS = [
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