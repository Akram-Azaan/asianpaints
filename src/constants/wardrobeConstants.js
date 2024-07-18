import SLIDING_THUMB from "../assets/images/sliding.png";
import HINGED_THUMB from "../assets/images/hinged.png";
import LAMINATE_THUMB from "../assets/images/laminate.png";
import ACRYLIC_THUMB from "../assets/images/acrylic.png";
import PU_THUMB from "../assets/images/pu.png";

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
