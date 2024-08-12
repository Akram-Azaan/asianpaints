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


export const FINISH_SHADES_LIST = [
  // HINGED_DOOR 8 x 8 ft
  {
    id: 121126,
    display_name: "Acrylic Avorio",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50054/9c445b72_50054.jpg?Expires=1723387426&Signature=RfuVEoPIX~3X~zUDGBDxdPyTFYpsQIoDtbnREkQK5Fjlxle6AJCQOqtifq9oNmoJylVUAACLBbxnQbs0JB2p3GotGOgZPr62tQsbKxuw3DQVcWXBlWCFdFMuUkOR-ctPDRDKxpBB~qCE071TmxLP~wF36b5820Pe2f~9IVGFq-bZdV4TH8g8PBk4nVteLgNPoCRcbgzSHIXKuPI9GcmdS-qbxdByWSD~shd89GqdE1zuKT3SR1edyJaZKiXM~iyMxGs7vaVP~7DJcvoyk3BLZ8XNtxoHE5x6vQ1m6gKbayoCN5JW-Ad-47rQmLNTzg6d9JTaWk2H~HQF4rja4eNVHg__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "2",
    color_code: null,
    seq_no: 1,
    render_id: 779148,
    scenetexturerender_id: 50054,
    scenetexture: 121126,
    scene: 3575,
    main_render_id: 766752,
  },
  {
    id: 121128,
    display_name: "Acrylic Bianco",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50055/40699b1f_50055.jpg?Expires=1723387426&Signature=SwU72Cn3boAYEDKtS~yNNiW~52hJ02pbtjsXkE2-gjTg35cAOz4Uea~FN78myRppPiMYQDdRVCWcfwIaNW-pBhUiUOqMxvaW36I-SPo-FcmhnnNNIkHDxKu9uEjftZ1ZnLstEtO~YeOD92jeVugrXi1KJPhBsvgnlB5KqoYs9hwQpANxttz0d6pOdLLLTTBuUDdCC~cgMaN1jS9SYOOf2KEI6gRSP9H5LRd6Swcp9is12wkzp-Hrf9~kKIQ4OGqju1Zc4vuKSWlOziYYnS8Ob58j04SbKqnJPgi9sguDm790Tj9SK9hlWJHiftGAhA9IzBU1sDiEnEveS6A6pzvLWg__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#FDFDFF",
    seq_no: 1,
    render_id: 779149,
    scenetexturerender_id: 50055,
    scenetexture: 121128,
    scene: 3575,
    main_render_id: 766753,
  },
  {
    id: 121129,
    display_name: "Acrylic Revival Green",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50056/8b4a4836_50056.jpg?Expires=1723387426&Signature=ouiDb6-FWzY5fQvC8KvysJVg~plKNHlBl019jojvVkUWX79ouPePP9oGM7d2VdQBcImhZRqBpyzFuP6liTm2KPQ1i8SFUs6RZtXU1~EECw~LfVTuei023eNPwRbbcWUqS9zL6WgPJt-Fz2iFuxGevZIhBobUIb6EkG2nLbIRQct4d0KErlrm2j55am8MVAFJkhWGJwyoAUhb4e2PfFjP8IQQ~XlJXHKRavzYJbPD1FPiJRYeAHgWr-BZerbjqcDjIEy3MR-fr6LdchoDRUEzTx6DYiAIIC8u8kvMELJWbyngq9dWbn9bSznf1ECLqfWGNABJmt1Auzwb8bs3BDXPmw__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#A2C6C8",
    seq_no: 1,
    render_id: 779150,
    scenetexturerender_id: 50056,
    scenetexture: 121129,
    scene: 3575,
    main_render_id: 766754,
  },
  {
    id: 121133,
    display_name: "Acrylic Feather Blue",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50057/e917128f_50057.jpg?Expires=1723387426&Signature=0JuUeDOm6acjc-6KGCZn7h~GMEpjwDwpHAN4v6a05EtQUhA0dDvLRtmdJK~8re0AWgC7GGT4iQPeJT3Q5AEbpvOOCvTS-7Eox6WB6yq9lK9VrmihX4NTtbCXHfDM1fBjKN29tC080JzUc4OHgBaDuzzJDwGJW~S4XjzRTpvbJYFnDL8hiNqMA2N0GbMT1Uv-oL76B1B3NKB1JsuOz8pR4vHy799hDeZW1fx875NDU6htZkMvIOl1dEryYm-nagtDPnCLQ01~RHxmyz8gMGNzn094Sla30aEzqs7H~LQ9mLzVd8b67CKPyjdKXMTflnLtEvColMxu5tBhL-5t5OkhFw__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#B3D3E7",
    seq_no: 1,
    render_id: 779151,
    scenetexturerender_id: 50057,
    scenetexture: 121133,
    scene: 3575,
    main_render_id: 766755,
  },
  {
    id: 121135,
    display_name: "Acrylic Grigio Met 86",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50058/2fdf1080_50058.jpg?Expires=1723387426&Signature=TwSGq3Mjn3tesnwZwne~CNuG-z3-WBfRNO8rDe773z456S0N4SJmT139Y3JE9kybWYN1IAr87AdKTGagDUwkbwln2JxxzEW9cgBx-Gn50kvtFR5PLutD7FvwmVeddECystlhaWssbMQzx9t7RbfwqTc0cZ5TLjQMU8yozchu-hUJrKxNcBzWCazioOfOQBjxVoViy8giRbTVsGbTE858cqS3AjHaTgz7rS8nWHUHOmlVm552prGOS6sro2r4T~igIL5yZtYTXPKaiNF4p4Da5yo~gBS9vDda7BijgNsf~jtpSTd7Y5-k4IlAB55eFS2QVwCwCcwT3zrxR0Vam~mHGQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#ADB4BD",
    seq_no: 1,
    render_id: 779152,
    scenetexturerender_id: 50058,
    scenetexture: 121135,
    scene: 3575,
    main_render_id: 766756,
  },
  {
    id: 121130,
    display_name: "Acrylic Beige Met",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50059/0379b788_50059.jpg?Expires=1723387426&Signature=ueJdkEws45c4CRdyFg0GADKrPCbI-vfUt55U-6zf082N2QUoonDP4OX1vP68WCqavnW4l0QAzHT87Q3UgrrMUp5Qth7VIAtwwhOtaoG1n7X9mAYq~-HaOdB7WJC6tNoMiyXnx53Dvk7lQJsepaiPXMdgAK~HxBzRdLUWK7DpC8XL1ComJSBNFcJ5wwHCXUPYdvPNWbYr6toLxGOG2g3r4ZHJQ12-V7dyxLl7LFC-NZZz9R1o0ArHcZfweIXY0P-8F9wIfGN4M0CoWUS5gTcTUsZYRJ~p4oQbrvKOnwfMg-c8o2W59OujyRBtliuBv20LMCQ~xysi7MbpV6IkxhIymg__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#9E8B80",
    seq_no: 1,
    render_id: 779153,
    scenetexturerender_id: 50059,
    scenetexture: 121130,
    scene: 3575,
    main_render_id: 766757,
  },
  {
    id: 121270,
    display_name: "Helsinki Oak",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50060/8d3236f9_50060.jpg?Expires=1723387426&Signature=aYPgAQ6FTxlrYLWW2rjSDhndKxw76g8sgrivWfttZxkmBjTHQcReg9HnnN6dQO1iBwVt7yea4a13HD-2oS~YkqbO2NOdV7TE9CdWWoBwQ-Ekmt96qKGA56v5VMH3Vu01l694-FuYtBzEyH8K-dxt~CIkePQnBBAcBN5ws4DDlxXJILrBAQC8auXUHdXDauSUv-xub03p~vbvhc4UvTgsIcChHPMZXZu5WAvk9h-gQWrI2U~LFWAHP6r2WSx0SnJDEZa2eQX~4C1wWSbQ6TnmmAbARwBWuFifdACXoKctaM61lL-W0pDLGW1SPNUacqfbQ83dUaTU4DRE39dPnbRqLA__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "1",
    color_code: null,
    seq_no: 1,
    render_id: 779154,
    scenetexturerender_id: 50060,
    scenetexture: 121270,
    scene: 3575,
    main_render_id: 766758,
  },
  {
    id: 121271,
    display_name: "Refresh Oak",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50061/ff15b999_50061.jpg?Expires=1723387426&Signature=LILYRg2HCinMfA6RxjBMVatN4qwwhtfdpDssJAvbRBcQvBM4GPly2vglD~N7KPo9osFuL9e9ql8RuyH37zIG5luNth~sOsWCT5VRt7lRIDhGUM8pP1PDVS9Agg5rmqEFL3ygkEr2Nkf1ROPeFwFFV3~5PKymI7QvQOGjOxdYethIhLCgRlZwm5gdfvooy92uXP~zxHwrlHOTl~gMdaOUVo3MZJ~j0abx7uuuiQEJDQaTaP~H3MiTwfvn446tx6G84exAvKBwcqKBKjyA821Rw~suz2Ki~FOU0PWumrQa7vHG-q6lXyJr8JhG9iwqKScuAu2smkQWX1x377s4DWPlGw__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "1",
    color_code: null,
    seq_no: 1,
    render_id: 779155,
    scenetexturerender_id: 50061,
    scenetexture: 121271,
    scene: 3575,
    main_render_id: 766759,
  },
  {
    id: 121277,
    display_name: "Glossy Laminate Brown",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50062/502b1da7_50062.jpg?Expires=1723387426&Signature=xlV0Yohsle8g5JtERNEaSamuVdsFzfgGkVYdLIqQty4hVDXtoKORUCJq0j3Gtrga9N~jkbxStCCgGAWli3-jcOGND-UhLE8ZMZaWkmwxCpFn0MW488K9he89vf3wD1v0UV9wBRqoobiLfIOiprNJFcu0Tyo1uCF1rMzkkTYOJ2EdC5pZefiq6c35lNXuj5EWXpj4ABlQp1kP5E9JtC2lz3P8NCEBLMUpiZKTN6geSYyDVJ6loZ5MSrW4nhcjIAkj89mC4SfQLAjYxYV4DDGcPt64VVsCeb07s6oy~Uns5S4z7CJ04rasVU~IvBsrRIsju-tv-RZ2-~hPS38L5WFAuw__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#88776D",
    seq_no: 1,
    render_id: 779156,
    scenetexturerender_id: 50062,
    scenetexture: 121277,
    scene: 3575,
    main_render_id: 766760,
  },
  {
    id: 121275,
    display_name: "Glossy Laminate Shore",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50063/dfc6c125_50063.jpg?Expires=1723387426&Signature=DJkH7VBkHR-6amqI7ptyWlNcjZmIKLMBwWdcbWnVP3KNgJ9PFobZYKGoqdA~GdnytQFVz3b3dqvbOHGGP5g51QvwfVjbqLkNjYx37swJ~PXdLa4E2BOXAnU2d3gz51YVQ2kV9E~usEr7AW7RCzX0ynfeZv95AqMrQjyWhuu7igjnk3RKMxOYGryCRHO5eIwzzr2NrnNOyRt0VVRcl~hsQSCOQu9DQApvKA1VUoRqL9ECBKYOZlER5SbzBfXwKBQB5s54elHut2LZ6akYzhHytPWHbyk9xVRfo1PQCwINL4orJOlDpKb75odKaqHf4WDVA3S9fbA8-KPt-LCEEX8qiA__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#568CA2",
    seq_no: 1,
    render_id: 779157,
    scenetexturerender_id: 50063,
    scenetexture: 121275,
    scene: 3575,
    main_render_id: 766761,
  },
  {
    id: 121276,
    display_name: "Glossy Laminate Blue Galaxy",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50064/d04d3deb_50064.jpg?Expires=1723387426&Signature=BN3o8f5hlv1NwiQe6gbOX-eEs60nYUaDUbnGs9ParsrlomLYswnBYYnD5zKR09scbNVmE~wzfMrL7bnkVgINhVP83Qig3UoJsm4ogSVV5cDvP1Ht3zIpVYDjCnEMOKMpTmHUMQpl3ZzDI3rSFlyorm66Gj0KluWa5gOf-poS1pPEy6iR70DakkiUlqJe8PSkE7iuYoITY-TtMQTD0plLF8lwU-hFtnldm2xf0TfC4x~83td82uHtLZqRTZSc8Dt~KZAMeuzbzFGXQPd3-dFNS9vcX3yFNJux76yzam8PMrLjQmEHWH9BZcxT3LkHH-wC28fEmgl1LCMYvAYAIlTuFA__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#3E5D7C",
    seq_no: 1,
    render_id: 779158,
    scenetexturerender_id: 50064,
    scenetexture: 121276,
    scene: 3575,
    main_render_id: 766762,
  },
  {
    id: 121298,
    display_name: "Matt Laminate Tan",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50065/78f1cf18_50065.jpg?Expires=1723387426&Signature=dUKRRlYlkgcKGJsJhP-yWpnUEzuO5Iml5Z3I3cdb6r0e-SBB-4CBwTiKDwESEif3t5BnObvQAn-Hg~gVqgeuqf1pRmVXP~iJxwrPgXQSxv8PwXNE0hVYWPqOqd--EbeTHk4RoER4azb65ECyCehn4rmTQGjRiHIGhwRSJ6hVSZMqguRQRcQK0BKK-i7aH8i3iXSUd7xeMWbg-A~L2qk9Wu1qkaUqhRYop5dOJNNftd4ML21bDYRXilKoTHhbC3wETrVQ9OaWeIW~2Diw~9XvOOyvGqkpM9MLEcFCQyOnGrnl07Ja9l0NyIsWg-CXAXDoBKVJZcfOthOHZb54Cs4-lQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#A8846B",
    seq_no: 1,
    render_id: 779159,
    scenetexturerender_id: 50065,
    scenetexture: 121298,
    scene: 3575,
    main_render_id: 766763,
  },
  {
    id: 121426,
    display_name: "PU Glossy Pearl White",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50066/69645ad8_50066.jpg?Expires=1723387426&Signature=uzYBSYdejr7AcSRMRTW0In~1WzEl~ynm6OlWkqPVjGS2ud9wNJQVCNp8DvpHcEf9cjyvkc25doE5ijAQ9gCG-lZeYSBOZlwGQbi-bnAcnPzUZWHtwhiuOPMqwGO6323DUYFzNkHX7ZDFjqk-Lkggsdf6u4nK5UyL1k~yy~pgWkGrQ1g~lVhCmX~jiih22feXh07rPCqhupv8TFbNoGMIqMEYwE0vdM7BI0bRAtjXJghOrk5OFrwMDZidf9ES3Vnxif5vu26GZ6L~lLfWEYpNCYugfWgeMXrJiDxGiRFAsLj9tDzJ-9MvKRaZf5ehm3dG1SiXiY9MhDY~qCNb5qf0QA__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#FFFEDE",
    seq_no: 1,
    render_id: 779175,
    scenetexturerender_id: 50066,
    scenetexture: 121426,
    scene: 3575,
    main_render_id: 766779,
  },
  {
    id: 121427,
    display_name: "PU Glossy Mangroove Green",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50067/40f10e45_50067.jpg?Expires=1723387426&Signature=OQdH78ebIE9IOBuATShzmzTVAmJ~xK1webtJG5D~JQLfoYS6LbDBNbMnQ--vyHAyrY~i7CECtuFbrP-u5-jmQ0kN-kcY8pGBuJmo1JmVjnHR~IOk2xNQrAqy5CsFerDUFOWVPg31prLETNOdGduNwaVcKZpnFXvxiYcW~lUT0Cm~Iy27Uo0WLMkQq59IVu4J86jK1dawnbRXNWvrl-Am0Y3r3aP7xJqSG0CWCZJkuLvm8jLG~RNv-KugSiG1HQs9He8IMuPhKuJ16dzYJ26rqJFbIr0yUXghJ5~vgvPESGC0G~H3e7WzA6MWsdDVa1F8oyAbjRYSn5YbdlcOTjTjuw__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#CADBC1",
    seq_no: 1,
    render_id: 779176,
    scenetexturerender_id: 50067,
    scenetexture: 121427,
    scene: 3575,
    main_render_id: 766780,
  },
  {
    id: 121428,
    display_name: "PU Glossy Steel Mesh",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50068/a1faacaf_50068.jpg?Expires=1723387426&Signature=m-YF4Efya154jSBRv99qHCazXNHlZCmGbrQhBL6ftk6Ng6D~9wBtn2-EuProwZRaoHLvxvD1A~JiuPoIJpMpgvGzoEj4Esok~rgYBiwwI01jsW-o7Mx6FcY-v5skmWonU1sc-uFt5y43KDs2L36V7dcEenLEe~Emod0D0zvMTWnhm5B2NusyLVBRmx-Hb52SckQa9AMyKTUzy414pVYDOrV6CkrqEA3iL6N~fKwCakHX7pao7zFUy0~WTfuWy11OawX59ZGWXqQZwEZ2HkMbVCyMlzG-~mAWE9q6yFuiTMA5y~Acsn2rk5ktHosiA-w9ArtBjXrTKFcbrWl2AccVhA__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#8DAFB8",
    seq_no: 1,
    render_id: 779177,
    scenetexturerender_id: 50068,
    scenetexture: 121428,
    scene: 3575,
    main_render_id: 766781,
  },
  {
    id: 121429,
    display_name: "PU Glossy Hidden Value",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50069/90a63c4b_50069.jpg?Expires=1723387426&Signature=LS-3z5g9QC6JOcEN4PPwcDY0cRQAMjsuS1oKyHRYNeXg6IMeBA0AxNyR2eN~Ss7WIYcIl1aI5BewS9YTjfDvrMogv1KHki4PC5WiIO4Ypy-8J-WtvFzMRDDN-xu1qyoiq6KpZM0UMl6gw-VT1K38qGA0WQkHo04VAUAW1lPCp8Q5j1-0g21fT2eT7~yzpo4FDlxQc9IV1h6c6EJhHHpvsRWlxAjW~0f4uojuVG8s1F422r5eFLO5aFd2gRM2NOq6BXYpqDkek4xuJn-r5nDAqlRBtFuNkSwE-5MRbUlFtHKtKnGKUxbKhpXOmDaEGRnduHhPN0qDXUC6r9JXUOdENw__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#B8968F",
    seq_no: 1,
    render_id: 779178,
    scenetexturerender_id: 50069,
    scenetexture: 121429,
    scene: 3575,
    main_render_id: 766782,
  },
  {
    id: 121437,
    display_name: "PU Glossy Bottled Grape",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50070/1dd4bda6_50070.jpg?Expires=1723387426&Signature=la-6umQjken9Ipt1eRsUoAORozJv2MofCMQlN4KbVMlstRmKOFJsGF8fu~6KgCsbkziVk-vD78NXLL-VNmsVT1rQG4rV2O5OJuwdF8M0kIjUaFP1uNetQMM~oZLPbvycyTpKpX5uRNmExqaQRL1npPgbbXCswMjCccVrASVDmzn8HyvMCSysw~01339~uXgyW~nrUcZB0uoJrE~eMIzteeAnVb~9fchr9-v-L9tjW5zm20cuB4DkCSwBSzN0DJ98kaG1~DgWQ-LlkQ0nRgaK8VdBrFW1p5dZ0b9TlBuHNUa4i66BBoUf~Mql0piwiVSI4gusFDTaQNZU8XVWZ0mjpg__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#AF6871",
    seq_no: 1,
    render_id: 779179,
    scenetexturerender_id: 50070,
    scenetexture: 121437,
    scene: 3575,
    main_render_id: 766783,
  },
  {
    id: 121458,
    display_name: "PU Glossy Teal Dream",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23404/50071/dfd9d734_50071.jpg?Expires=1723387426&Signature=yyXDZO4GM0xh5gSQ0zKHVR-dCvaUTmaYrlf3vMV7CIBjwc7MwogI64DMn~MDYo0RcStqRa5up-Vox4UzG1eY-5blB6R2rKyPMXSQGzpoRf9ZV5QBMmvw4GNQA~xc9qCQvFIKrloYuKpiT0ouGNE4mlFXaeq1ScGLoSKP9h00NrMtnUGofdU4KehiJl445ZXrSSszoGbGMRm15RclL3ddjYgTRJbJI1yjwkLy9GJlyQvDMy4akednO~~ElLZwz2R0u7Pn6xQHHNofbxUAVqmgFfou62Ii6VROiCnKyhUW~L7XWsETiooO5X283IBSMPNdfdWNOEoDpC-R9Ce486~cmg__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#0A3F3C",
    seq_no: 1,
    render_id: 779180,
    scenetexturerender_id: 50071,
    scenetexture: 121458,
    scene: 3575,
    main_render_id: 766784,
  },
];

export const CARCUSS_FINISH = [
  {
    id: 121329,
    display_name: "White",
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    thumb:
      "https://media.imagine.io/media/public/cfg/render_texture_thumbnail/2297/5539/1888/23403/50053/ae43df0c_50053.jpg?Expires=1723452385&Signature=qYM9iUYNwbH2vnLnPwD~mOlOn3USMi4mLAHs6evx4SDkHfR5zFWv4wN26-YxXJJDxTaJGZQ57EfbALqgH6ep1twF7rSVCGWJbxNVsdSgL52N12gNpFtA65po5YYBxL3wXxvvFsbOUqFWy0vd3L-crk6w-TbTpBhNv9sYODWd94bpcoDr~34NkHGAgEicT-HBL-QiF3Ks0eJbvAhz6T5l~la5j8voC-ooCum7PtHc-R2Ng5-uxKQ~Lu5eLt9yB8ezcYGq6d4VXUiiD~YD2TvFLaXu0JdIQZwF9sjHPJ5bB2Wv07bzSL06Ir4yCUyf3lCNnZQdkOX2f-jZ0Jo5ZOrZyg__&Key-Pair-Id=K3MIEF79PIHRTH",
    is_enable: true,
    is_base: false,
    texture_type: "3",
    color_code: "#FFFFFF",
    seq_no: 1,
    render_id: 779147,
    scenetexturerender_id: 50053,
    scenetexture: 121329,
    scene: 3575,
    main_render_id: 766751,
  },
];

export const PDF_IMAGES = [
  // HINGED_DOOR 8 x 8 ft
  {
    id: 54550,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    name: "Helsinki Oak",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/57d50d36-1aa2-3d03-a7a7-f35cb7e77cb4/54550/913de4fe_0.png?Expires=1723704546&Signature=j9j9r2O6LrpFKojhEG4Ubv1GwBB3SawBzX2Fmq2KvoLmALwbLYKTLjViBqbXGsWsNYe2O-4O9h7N3lSjuPHT5VmWwQDTusPo35Y8HETYBfKS8BolrSEQ4DgliMmuz0N7KGLm2~Av46pY7I8mNoogV3RIdkxPmL-JjFgQO6ENUBxDjsL8iutbDlw~OFXQsmNJDCsiYPqt2IAN-W8ziPTGsPFUjhnQm7cyZU0jFUgFwafZq~rYrE58eEfSqEIOQs~AJPMxRUDQXIpSMaIUmrHKew-Wuq2W~pmnWrZC0Ueo4AjqK1gASwVmqx8GxGKwtnnNffIOL0elkdG7H~2MA6qtrw__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/57d50d36-1aa2-3d03-a7a7-f35cb7e77cb4/54550/0faa8a91_0.JPEG?Expires=1723704546&Signature=ut2VkHhPcXZRM64Lt3tH9H4X2055VuHkQIh8DMCI3IKhj0lVWNRPBGFLU1AMwCvivqX3COmchvA3uBYoz2js6RQsdyIqXkMef~q06z0lYOH952Nl8bpRl6MChnkrqzg7qhsNBDl60SVfqN2ce8t51VRicxN8kj1q15frtbILOnwjszYRbSQn6lpDOtOFizPcilnFwd8aefnIRR8rF6~YvwLIzpbpE6HmOZC5DY0IJeuV0lXTNY1NGmTDIucSsg~HkkjbnjQ9vXiU6r9s1uHGj0wqwSAllPplkDJfddqn8GQYFjyJHg13V6F-QByizxOCblCs-dyyTEws~PSytyr1lw__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54550,
  },
  {
    id: 54561,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    name: "Refresh Oak",
    image:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/high_res/3575/212a01e7-16d8-32b9-b98f-dfe70ebb5fe4/54561/9e0ffd72_0.png?Expires=1723704547&Signature=NlhKChfnyI4d3ZVSLCnjCIrDW5RXCp3C2RVeIIIxFLXFI9rULmTbCrHEnUchx69vXYx8TY0et4mdl3OD0J5OPHIDKEq5TXsJ7tDn0EzrkVe186YboTR0t~2gnsqLIpYWQp3ahREew5M~drQl8m0qp8ygWv0PrCNEFHY88OVkfHuZTP~VJe0G7SULYNNONK6N3T7ZNV0gBSBiZy6138gtbPSI0zECgQgsFmUfrM9rv22PHGrR4apnaKVjXdpAS1NI6EgLnyS0sonOzP4CP9uFMWqBIBKabaqrTbNmxbb29ftqBiEVsgNMO8PaTADEDM6HneZHST0ea5ozX-tyGLnAFw__&Key-Pair-Id=K3MIEF79PIHRTH",
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/212a01e7-16d8-32b9-b98f-dfe70ebb5fe4/54561/30e8ba62_0.png?Expires=1723704547&Signature=XbjFfuXqvyktKN7-63jzvCPirWrbHR0tFkMSMPNwc1XMLIrVhkEq5MHne7diu5EHAi7G1FfLVzaMtS4QeZxjr-3ZKpZIO7bwDgmUAc2gWr8gjFvwSMoa5-nO79p4ODEJtXqWuf~q2FKitxIEbTEwz97MLAJ1rrIMK3xfPa9bBfJqgb9HiGGjoQncpZl5V-o0V6bQao84EbxDop4LgxdGrAt~7FVC-J-WWpH~TpGQkyTEd8PAd-GeSpo0UrSwhhoA9Em7sMtvRnGGQF4lRElhEODlmkyOamSTG468FFzAj-eI4T5qE-8shhteKXI-Etp93DxoKUfAf46AF7djEdZ37w__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/high_res/3575/212a01e7-16d8-32b9-b98f-dfe70ebb5fe4/54561/8ded5cd1_0.JPEG?Expires=1723704547&Signature=MCPO8MSsltm~WS8C0f5WzaJO-9GbBUkKblM1xl-lQXQzG3dzeFug5J6QPHBPTGAOtpqRRkz4-ZoN14IuYt7PDQXV70POkk4bMtB4S~MQHkGZRt6bjAwY9CqCzy71hHFyQIt9w4W9rEnTl2n60A4B9F6WHg9Ea0gWzbz8dM4A6sMWzk0ZkZa-KxvwZS2o2A3ltJ71Kz9OqvK2Tahy8qiZuS9ESXrRqXMCDwNWUyvwCYZk7zGJRj19TRHNWdebPhfV2UCDzHCfaWsISvgRu3mbBIaxoaht9-G0Y5r7U9MFm5SqEx6FrXBSLerLYWWASraM-k9f5pRZu-77KxI7pvTTKQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/212a01e7-16d8-32b9-b98f-dfe70ebb5fe4/54561/073263d5_0.JPEG?Expires=1723704547&Signature=ApumMScU3CzhmUuwnSHzwWbdsVye3pQm434F9Qgot5lwE1TS7Rp7pFdqnkCea3MqcEAgAYuIBYd1I9thbHCXXSmWe~05zU9ZDdxptu2n03c28VP1-ccvFYwUZ7-yWRNnXxjjFvzHZOpc0tjf0KhfiRh221tCLF-TTr2LNIapJiZ7166dK75R6E5rZaTgn1RiuOqfHx2h5VsVpEIfeq9MKtGR3HDB8birMmRYBAHRIdqtXKhBX12ywstnHfFd8EGXo7SGS82T4ZcXyajLgh4-EILIg30KuzeQxh2EAoNwdwM2Rh67OcVUwAsfXWKNShCFSlh-hdFYW5UJCCE1UijEJQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54561,
  },
  {
    id: 54560,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    name: "Glossy Laminate Brown",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/b9d92a58-7e36-3f02-94f0-c6a092a08e59/54560/40cddf4d_0.png?Expires=1723704547&Signature=XciqtVcLVseAP5tS-HVMDsNffMxLAvvyHHeKdg9zIgBI3j-WMDSrWobNsZidFkb48bmlLqMwNxun00RDj0eJx6O8JE4rer74IYeSGZopp1QtPKKItOONh86tCRqzKQaP~wGJwMFxHwhyA6b-Zlrndykq4FM~25YBK4vyNYlTgqPqPuTkpLCmjy4X-DB7loeoCMS-VLvEfDwefDWoWwJdyWDihdNN5YS9eT2FYuZPYrRiHPgTtpAUb7qpeZXrS3c07qLWkZkCtuXraGziHO8jpBgHOP50dylt4qS31fuWFFhiEZl8u89CmUWOvdsmZ0V4AH5~IZQTAUmTKZRhID-l9w__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/b9d92a58-7e36-3f02-94f0-c6a092a08e59/54560/427cf9d9_0.JPEG?Expires=1723704547&Signature=DLG27UrAUzGrqRpLunbgf8M~w7pbO~-qOnT1Xq3Ngbh8AYr1YB2wDrdYfJeqgOsVLE5xE9kdaPAKh6ysp~g9RfEA6RBlcY7VbnedHCoeiwdg-8C2C4MMCZD2sG1ryUqlKP1DJNpmU53BYFXiwoy1BAkJaPOQgQeS~FRL2xu92Sj9zWX-0Wp4Y2h9gkP0B9gmjagVjdcv~gewRLrOF34lf3nutU7-~FoYDaVKmJo79hrmrue2rDIUr99reRmd6ezwqtWUMg1k9kDEfe2IFDu8jltqsk8KZTGtHGwwgW2SXEkhO46zQvkpx8vjim~e8IsePntSDW8PwTC7vmUGhTjiIg__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54560,
  },
  {
    id: 54491,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    name: "Glossy Laminate Shore",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/d43a7cb8-44d9-3b83-a371-4d7e55079b58/54491/8b13a34c_0.png?Expires=1723704547&Signature=RxGQZM-84iBdjzQr7FSBMDa9IeuSnJw4j2uG1GkUYq2QYVnzTo2r2~XrsM87FwbEHOWoHn1huA3K3bWL051wrEVEJ1PrOR4hG0K-CpjCgMhlS1JFFkIlSuZde9kmylXTlhBJBwkuR-pgwxf9tBTj9BHQYs8ItXMNTfzWRY09CGCm7rc695d7KtoRIfOLFWXedFLzdQtE7JjY1~1jOHiUnX1rSsk1t1NIgiO5o4ee2Yyv9xbIbpXWIUSR1BNTzLvPZ-f29EkzJk2UFhGegJ72ThfLn135~ZCuX1RaqEv5qhTx5t3M9ENpylf3QISbl2NmjdQDrgtROiif6DOGS4qLCw__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/d43a7cb8-44d9-3b83-a371-4d7e55079b58/54491/23170ad0_0.JPEG?Expires=1723704547&Signature=4szOroDyjoumGV0ctqUMkWUB328t-8V0QIn1pHMUYIXgeWxTLLeIPaw5GWXRPAb1LXHRezmhsZ0VVEFJCx5gVJEJR1B2vDza~eBb0h4ZglNpiRDpTHMOawprVIGaR2LmncBVZ4CNYMz5LzT54unftmCSRIJoiE9GEK~iM5iRPQ3mEe6GPsfAfMKHt9kCWiiX199Ou0DtrNUgk6ZC5WJ299pdxQZVUDih~ZV78dzqBbfJ4XDx9AkKz6ps-z1Tb3QLaJMGu5xHeEfQAzjZVU46BubgHcEBafNk9wrqHrjrP1IWEom9tXlJ4Onstcn8ArfbFRuhUmnefv2nvviGeD8dXA__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54491,
  },
  {
    id: 54493,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    name: "Glossy Laminate Blue Galaxy",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/6cac12f7-5f53-3472-a44f-d64baaa453bd/54493/9d98abdc_0.png?Expires=1723704548&Signature=qgPlPSdlOimW90XfBtW3C2yK-u-u5QMfYm3xjBJX7bq0K-xqOjSuLaJbG9L2wWtAsPu7~Ea-VedMN9oe0WJXC3bQsyb2NarO42qhB2yiM4jg3cf4W8PW120VUzdGKJ23MvKwJhibSpyE0OFEDI2~YsUDMceP7ck8ZI6QGdf2rXLh9zpRO23bR8DUH6oVDXGZwFVen7B-WF9RlrdQQsB4hblj1ztobiOwRl8bwEK2TqMKyMSTqNcCrOOOlWxdf4nvXe4jAbh6M5r95zbCyAi2SlKCwHfYrw75Bx8xSXBwPL~Mskv15b99-x721akAvKJ33LRNxtk9VDXbjNr3jUba-w__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/6cac12f7-5f53-3472-a44f-d64baaa453bd/54493/015f094e_0.JPEG?Expires=1723704548&Signature=5TNVs8HzmuhAf4bFCGYiagClxov6BWZWNeAAr~yy6B8hrCFpcOA4Ex4Mj693kXwsdGcY4xIl6Gembr~4yvpVxGWZd8j-ApFsODK3bgO0UCHh1O1mc~TjB8c2F1iditMWY0dGODgp8Mal5GJQiX1DX3PjrTGlrw4knmLMHnZXLERNBGt49btzjlCJG6bSG80ujEv5hj66fIMrLekFBc4hKlPoV06XKrl5lxdfV13JrZW2ybXPWkbEsCsCJmQJ2uWTysySf0dx5dfNGUXvoa5uSMWUrgKFNLiz4Rhdech~~3MnFHvkRpR26CMVAbAOxanf30BK-wjnNiHJCSL7fpNb6A__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54493,
  },
  {
    id: 54559,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: LAMINATE,
    name: "Matt Laminate Tan",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/c44b55c3-c083-31aa-a7cc-a22eda569feb/54559/4a60205e_0.png?Expires=1723704548&Signature=4CH7UyUXTTyQ7tzGdyeWOSasPS1uzaWW38Rlc1Y2uC8PabAQKiWOVX-JvhTAN5~qYQfmCPO7mbPE1GkTTijuVHzDgfwttuWRaTnbzRUTGoW27f4VrkHKhN4zTC2UNMb9b6W~R-qa-7wI~lUZhc0ORCln-UnfxSZbd9xeF~6aUrS5-jNADNBCqJn1gKoYj6rbqAr6h0gVlmQ83Rwt6IiWJ1x2drKBRTwpkxxzWp9ScR221F3uY6L2rBoz1U4BqqzcKWo3Gxo8PigTqAvDRnoqSqPjtYkgPqXYFz91nSYiH0ibxNBXfH9YCl2jn5W1nNuFtbKXKEC3u1-aECq37fbp2Q__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/c44b55c3-c083-31aa-a7cc-a22eda569feb/54559/c60d0df1_0.JPEG?Expires=1723704548&Signature=SlaF5R37IVkMLk1J7wywjSWQZiFj~zFqjLCW1gBc36LKQd20YOcpmoz6gnaG3-K0UPbJreeEZVxImo9cqZEq-Zqt3Oru2ogXv9iWs6fTkr5~bojCpxGBhJbbO3VmADrvBcAUKofWHYGpyWdsidevTIRpOTw0yBBb2yY-1mvpvGoFCDgHtyIY9424zEXuqOh21oiHLX8q-6kXR73i73VOr~-viWqo7BdpfllqOS~Kikv6Bc7VcDfRYs-dSN09PmcjfNtANtb4rPdvNTtAqYC1xFWdXT4aHhHaIKU9~iBd8LVgNolLQN10ga-UntzKohmixZ4XmNOudpi3W328RAiKKQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54559,
  },
  {
    id: 54499,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    name: "Acrylic Avorio",
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/108028c4-f634-3af2-9aec-6c2133ad1d13/54499/54269683_0.png?Expires=1723709235&Signature=pHT9jjJCbZNJgqq0VGmMqOw7u3mRsTJLPeEeiYgr49fD-Os6RyfCDmVqueWdBqo6i1261~trtCnX~xmp15wJJpErT0bZ3OIA5rIyPljXJiE6VRciydwTdv05qFECNK14ngh3kAjCrCWHv7s--prC6htbYu0xGISKz214AQC1ltypDNnXU~iz72j0gJWEN~IRNfwYDDPV0qgPgnojq5CcVsRDKekFp7sFajDm2GvpWs09wgfekj1rnqCrg~BcsIhCoToWl6cfI4UGb4CYaZSG4daElw3JN9LCIJDMyibjHAOaEQ4ftfO~AUq-Bw9H1YThSmMTTRFmh-RCtNrv0ez7Dw__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/108028c4-f634-3af2-9aec-6c2133ad1d13/54499/bf8f42e9_0.JPEG?Expires=1723709235&Signature=vxLAsXoT5e1Mno874Nq2QpsDliz7t87Z1hLp2qxE2GGfGgHduVbI8K7QiHoABtRYp1iuvFPFVNawlacmmVAQYVZLSzRl4jJJaDOjxewW0na-0tsAlxdpRYqo5IE-ZMWT-SQGJU46BxDrc4AmP6pJBHIuOvzIMHlwbO0JhLWfAm6LlzPJNeYLtpgqMAwkDDW42xSrqPime8wbL-xo~L2JXZaCMsKu3LkIFIRyHZDnSY7jCN7kkgYAtN8QRdQijCI3HMcevlEVJGhPDdZK-7vHOqbkk26ibyy3l2w6a4uTJo4Pd73CbSUs6o~BRgrAsYPpTU42lsHZJbK63cT8fCgChg__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54499,
  },
  {
    id: 54500,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    name: "Acrylic Bianco",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/5175dea1-14c5-38b7-8c49-ff8eb81c3215/54500/f44be595_0.png?Expires=1723709236&Signature=iPkLFogMEWoIv49sutPkzpFlY2P9kWlXDSePhlq2X-Hhia0sjZiEm5HkulVcAA3~SN6P4SN39B~~2qr7GAEwRDcws3FCKHN50ChnioGS9QylJDL5Kqep05x7BFiq0owCOvmXiMUrJy13Gym~xmLoutJ2KydfswrWUCsiWmqViukRH8kI6RXgT-lsulXMMTpANvCb5TVegUE-psPlhok4WPbGNxKG4a~a3oboNBzy2hn9vVyBKjBCNRnBK0gXRCcYPrh9zlhY~B3s9y0TpJmRPMJJReretYr7F23PO0uZeb1Z-MOXegyqDhD69LN-2iGVojpCNTNyp00JLw6sjnYFNg__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/5175dea1-14c5-38b7-8c49-ff8eb81c3215/54500/1ca98b2b_0.JPEG?Expires=1723709236&Signature=MXk9ZkEabM3XMbW~ZlmsqZmOuubmvDtGS0G9A8AnCITanT9ekHxD6D9BSX8CvrFRK3wR1q3y6PEcrneaZFOf3dzp-jkZQn-xHamPFl8-3SXP-LuapfghYsFa12gAcm641xqA5bY9Vxvav9o2AyURudSvmRqbh~ZqgfMrY4OF6BTcjsu7qBtCAiNdPh4PHUeowdO6JzYMF~wPAKPAP4OapdC-2d32k8R2IMLyxlKby0ar8YwCcZRJduXj0RnpxmoPPZurj4fg4WeBDJBwUabsczFfLhM5wazme2RiAR6hB~QdvrBXWIjfUWym3ZQM5TB7u2j6wnVEEYm6mxJlVzUiKg__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54500,
  },
  {
    id: 54572,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    name: "Acrylic Revival Green",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/c60ec805-bf99-3c15-a5e7-7a07e1598e5a/54572/e433d283_0.png?Expires=1723709236&Signature=0GHndfllj642mDMvous9x4Cw3zDGX0s1DX4humxxXJSvszi5wPdVbTmh6Y3Q7YbZIoJ5YO5c9x4yjh4U-qTGAA5YNKsonp0nNwewKpgp5q2zmSaDv-bTI8BbvNkUh4oWvCXA3~wlLRJgt53OaGbA4VUlCUZgQ~w4ErCG~DtZ9Y-bQKV~K9FO0vfmyeOuwR-H8qKh2W6f3XK8rp3Dbp921G3pHY1v99G1GqmqZbVa2qgRx2GN2DeNvkU-HFAPrDF-3Si06u2F3pNwY2tM7VkAPxNuVfRWDN-dJ4VlReVgxOE~w770fS6oaAnxrcvQfq4O1RRYEVaqA4xH4ajSZzFhyw__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/c60ec805-bf99-3c15-a5e7-7a07e1598e5a/54572/acbfc684_0.JPEG?Expires=1723709236&Signature=5HTFfadd7FGRGE4gmmpSKzdz5y0VvBVb5N-0xGkjacN77muD4SyEm2VPbhJP2J8sO9NRq~JltCeo5SI4KImfjsTzfEa-iLDumM7PJzLKe9QY8QfEsVHDBc4M05qQVQ5zkJiq3k0T7ZtW96rdlXSCG0tS0LN4Mt8LqZj0Iu7OZaZd2gxtnO00Mw3~zkRDNWjoBszEr2cM0nclLBCknS1P4bW9H-ukf~lMTR6dV5ze~0MADpl6XgTDyHD-qslENNpIQ8z0dMH7JHFAD0-LmegQw0CFvOT-BNzbPehhD19aw1WirNcztYw57UIDLI77rNVHxJTrEXQeQkMvVY769snWMA__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54572,
  },
  {
    id: 54575,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    name: "Acrylic Feather Blue",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/38ff4d44-1f51-3bae-8877-e8c71bdcd796/54575/402cf0aa_0.png?Expires=1723709236&Signature=cnAd8gqVc3InkpcgeY-lpiP7Ju6CpUjMsorQU4FAKX5qK3h5IOPPh8w4K4bmTv8F8mdJdAevnbd6gX7UvG--FbcxNEV2w8l1DQFfN6kDaxDNj5hiuPYlUjxuvwVVMWwJT0FBBfFORhA3h0l1yZ0HNiDd163RaaC40oksJgP5OFVBTn-IqurEtQw2iDt5ARN-diNhiAcGonftnkq9DUJNR2rodSKw-DNXJaNzKplgCvzrmxreTDlYnfuRkC7GZaBpxog4VqJb5PcKe~7eUq-vaWgEKpTtAyMCN8Wjl2oRQLBszDQIJ-KDkST5DUiiax7L-y188BU0d9AsYbtBCYCQsg__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/38ff4d44-1f51-3bae-8877-e8c71bdcd796/54575/6f7faff1_0.JPEG?Expires=1723709236&Signature=vQvT-Gb~TjFTwjhiSQZrom5Rhv-j57Xt~zDz6UsTZNWwti0teUTh2ksJU8YNn-M4bXS2hFfxs2vaFB5W9RFFaoUUZAk~Mldn2BYmW784wcJKBJmlKSESgm3a6cicJQhRhGOwhEki1IXL4LlBp6Z1Uql4PCXuK8E1j1bAKJhQjFA4cqDURAKq5rzQ6DQinwKMfQ5DzUrxJSdWzzehJhtjbzjqIr5EubhJuJhLVq1x60x65RlQwyW1X3Z0S8Xe0atvOPfIqtDL8kQwbqnog0xGEIRYIU5iuVONQYHpzmjPSAnjlnfbrLHkzfgOL3Gk3J1LyItLu0xbY88fAHvIbKUvRw__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54575,
  },
  {
    id: 54580,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    name: "Acrylic Grigio Met 86",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/a05936ef-66bd-384e-9166-fef62427c777/54580/1265c10b_0.png?Expires=1723709237&Signature=m8T5yKH9UuZtuWCB4w2cspcUdnJGWwU-36TTXG3DQ896TreTFGRmwUqi64kmQ3Cnv0bnkye27GOTdIHM5G04Zfrkkz~2DAUnRtDP5uqNGFaFCM~gfff1IPEzZpjWpugdzcxYfZZI1SU8neLui394V~la4Van84fBXnMkr08MgLZf3MeYv0LVMz0MNWY9UDczKjrCNDW-7Dtt4NAzOAgH3hSsEUQIzJimb03r7sy4byynD936bJlvF36wXfljvoI7c-pLfsv85sWjh6vbs1VZZEsU1HcGLrfH7CPHDX8kCdY4LIDgp1Ev8UwaFQYl2cstJmrx6Z1E0MIivYAanWYwww__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/a05936ef-66bd-384e-9166-fef62427c777/54580/d87b3b20_0.JPEG?Expires=1723709237&Signature=jxcEVk9NMOta6gmO933LTGVuPK6N8wlZVikwZxN8cA3y~2JCPVPvL1cwh0xzZy5q-YCSs2RAIkcudGCZK3ippybXEDEWnucaBNk18ZRPDiC74Y-OotykizBblaxfeaybTPH21-pT3IUViNyiX9Ie9aL9veLSPA3ssLXTf9zCXhYQ621CbgknDItXhrQpIZhkduRuDoMI6u2Sl7FQm6QqRsn4SzuYBrxE8SiFAx3WmQWaTgMsg6RQompO~gPEzgPOtoI6JjQCjU~JrLSt~HPSEBZ84NFEV37tdGSlKI~8XvAh3i9Vt7HQELLph0-PA4MB3hlHM2ajZ-XhTKJ7KUxENw__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54580,
  },
  {
    id: 54581,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: ACRYLIC,
    name: "Acrylic Beige Met",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/16673f60-0595-3791-b1ca-39eeabd0e60e/54581/98919ed0_0.png?Expires=1723709237&Signature=MpOwveLiNDdh1Cd-1Bnm9Y01ksUSg3mY6bNofSUdCnTrS7~flPqgn33CfnhSL60-7Yx~gYlppIvmvc3spx0xvvx6yP6qdk4rtvefWIWuEk3ZWftZlXVWhw98VIGhBwKOBh9y-7QT64eGPHNc0GZRxT~4qOmZI4nquZ1wipWf8OyQJk2DGV4ggowJeZH6ADaAnwIDFXshP1LmKGJG4toYGWYo5WIWdoEmEu-B5FwJYiRCQDr8Z80JBXb5zQxJhYI4txG8LYKqk0X~GRNCiNbDFA0jpmsFeQcLjdYPEcXSHm5p-gJems8SxVpmGARVcs3xR2UYxZkoClg1l~XhD6uAUg__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/16673f60-0595-3791-b1ca-39eeabd0e60e/54581/ddc21457_0.JPEG?Expires=1723709237&Signature=WfP3qgk4mJT9yvl7DnoUrXt0zkS59jHliXpsbiHxCXynbvE7X-P-O5syzVTHuSyUDAzG2aeYgLRcJM3pYGIl2W~vyIsDMACxvcmhHgUi36YY0f3k3atiKFkPeckzm6g-p2KTT6UTCeOs7HSKWuwRZpEYrXWV9hlQAYhFTm~dofj~rs78ztMSGoHgyxQhf1Acna4~JEbEM1hQJ~y~xUEPnSB1qgq1wR00buWw~Nsqoap8xRP3ZGKjIFAdMPyxTHd81hdkDMkNRyqo7or2Nao~6V1ZfRHDZ1vMyDJcwMhPU7CExjmJOn9jzFeC06TwtHxSH05ycx2nJIRZFkPp48xTnA__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54581,
  },

  {
    id: 54566,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    name: "PU Glossy Pearl White",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/689b3f6a-4461-337d-98ff-830f014eb9a6/54566/8f8db034_0.png?Expires=1723709778&Signature=heBSk9VbHkOyUHk7S1X7SFBoJXOFGJ26bj66uLXsAHHeI-SwQW3jcIn~aTF~LKFqv5QwFJSyr1jxBf~f4pC3paUxrxat6BGBx32U0HRhug8PWw7IBQHEBH0pDXjaW3NrOl7~o5NQea0QiJOvZtCpahvCjO6iuSwQ-F8GYZynQamWJu4-dvxSNtpbqqjAMLx8puH2G57H9J60b-kyOBQinAjp1vyT5iYNFmuM9FbOwAvmOwMxnS5GgZU7GWU2rKHWzvnRem~14rxgN9CMBGW1~PhCM2--BoPhC1Ye6Ho79-GidjFOttnJKJ5-v1JgwXS4Wfcydxr~6MpU0bQdWbutGQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/689b3f6a-4461-337d-98ff-830f014eb9a6/54566/220ef29b_0.JPEG?Expires=1723709778&Signature=uNqWVzo5NquUru1X9cC2NIJBgDNFuphZW6d0ddl7hlX7iFU8Yj4mFrkZWcsoSWEJYENS-5Eg4yOsQitXhUmNmqanAD6xn7rzJVfpD9sb0pk0U9GQSf65r6t1NjEchV15d0yOUIyV0uEJeh1PlDksnuI0J8nXGNx-GBS5oOFqtZ9JrVNp7UJjfJuimBge9ZgltCYRwo86mc90-MaYzhA8k~dZ7EXRkXz4NJhak~0oK-G2CsdO-eqI-R7t7mtwrGsk8hOfxqlLCJ1kNL8wUK0piTkAnNpUepdprVA3WjHCFuVC6~73anaIL1WJrMOizZQFiNGeE~MOAjezrIAclwdIsQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54566,
  },
  {
    id: 54567,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    name: "PU Glossy Mangroove Green",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/fa1e3fc7-4ebd-31ce-b035-e548ff946184/54567/60773c37_0.png?Expires=1723709778&Signature=z~tX5FzIH4RzH2Rlj4f9u7N2DjT1HD5PjYURjt77T1OqC-GNg03lEXfK0rKrDYc2LQUUV0obI5Y9q0~rArE8tgZ6fuXm-poPp7FGosBYTYf3nq0WzsMNjcZAoLCyo6lcKKj7DgV9SPJZhtsvrPBkNV0odw36DmrTlGzN2AlRbqvh2XKc4taAmusqolWqUgHmoXhJUKWOJQ1t-WRrc4yAwT7BDC6tgnVISdQYcdQVMehaYVubsShDqGtzJhXaEI7ZXA7DEhdTOsqACN5lMsI5ws15fbnrFSQE9b-w0C9Ip2QsOJM7~26WMM3VNhq928w0W2mP9YMbxozO~2blm8cHUQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/fa1e3fc7-4ebd-31ce-b035-e548ff946184/54567/16a2b4f3_0.JPEG?Expires=1723709778&Signature=onl3j6H2WioWVqlVMtAzTa44mnjHhe4q9gxkigMF~mv0waLHi5jYaalEoLmQMf3aKiowkO9UxMroFirhDLRC7XMWN6TWcAXwuNMwdcsucVPT36mJgbpiM8ZEaXPByEvVy4NCBwHYb4gR-ePPMXgpuGFr1XyEww~fZc5KejtpNqO5Yt01AeITMBuTFu2VSntjK-iyXzgSEd4PloYblwUKJDLYJ0HLvPCXx4mrev5eyCYQDPTWyo8tk~4YRzXHeRHlTdZCCOjafn9dnWJt9NDrKfJm7RC54y6R~o7v4OSc~xKAmZyq-ZWXVZ20j-jgAK8mgXAiGuurcW7DJxYw5vr2KQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54567,
  },
  {
    id: 54568,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    name: "PU Glossy Steel Mesh",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/f878e7dc-9c09-3e57-b138-c619e7858e5f/54568/cfecac79_0.png?Expires=1723709779&Signature=VLw4TxSlCRUcUoR2YGVMcGeRIW6ldEw1vnjqMTDYYipb99jhgWZ6P8Pxjvy7iFtJHYSf6gYJEqwzIJADHaBh9~kl7OQIzezaiREf-PAKYjF1taWs3eKKtgkyFxOqgbX07bDV-j2ui2GeDLu4wbnI2Rqq4EATRd3aKJ-WSqyjpwN5sTIyoIXj1B0tEWDtZfyLf7pNXDg9H5Px-e3R-7pgi~HUouiWYc2p5U5XeBL5CbuhwHjh~fIftpLYz5Jn2NlpD~MCNsWT513wDEUpZDvOPL0A-fIBcHJ0zMwPlIcyu4dHua8u4pdIxo2xZF2uAYPI6OdXfl-5cgwtcGxqZZZBuQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/f878e7dc-9c09-3e57-b138-c619e7858e5f/54568/3e282d88_0.JPEG?Expires=1723709779&Signature=f1PpUlSoTd8LJUXgFq~HtC3Y3v1xazId1evNfbcCNhrzueJPCLfR2zlB~zK0rYrSpS6HHh2kYRNaAzJLbm1d6bmWbgllEeFf-4NNu0EQdDDYMbZnNjZv4uwVFbgACVX~kiatdp67R3N8oHcVU3sa2TKFfn0MzwhDt6I-jvONM~kCDyhoFkhXwmRLtx~WqSYkVSCipSWjXzCwlQaqoDrBZwimJMEfchBV5DS6DB9Jjzdqk7GZmLQFaw4m7v9PycQ8ERXIAouqM9RTRgn8qc65D-23hwmTAHorZvzyYhTQR49diaePkZL5vAgIo6MG34eQJovLF4vQBNX1gP2eZBF2EQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54568,
  },
  {
    id: 54569,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    name: "PU Glossy Hidden Value",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/caf04450-f1f5-322f-bf3b-b0cad0fea812/54569/ee53f0cb_0.png?Expires=1723709779&Signature=dyNhc9P73QP9piTGI873BQqw~8TcBOABUyQFJs0mqsl4yddAYcqclA3ISgb9u0UMmqAi3bmCrt2fV3vPNcvfdlPlWbSHT6NkIkUD9j8-oIpg3GkNZTHBkhAc2kFt3STrbZt7K81e1MDFpGWPOJKP7PwuM4wbSyR19POL8RO1yPWZYpf3lWsEboqJUMhJwjt2fww028gVHCFPM0OZDgO8bXBNSHfIXnK-YRfDngGfVGvZKQMig2RDKrw7rGp63qCE3RYeXpo03mLkGQ0Apb~UCWcNu7JIrP8d5CGD5cW4bHloo7rJVAER3ME5m70TIFyLJ0uZ0uOdAU2NcEZZw3WStQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/caf04450-f1f5-322f-bf3b-b0cad0fea812/54569/3227d0c4_0.JPEG?Expires=1723709779&Signature=Aulbj4Iv8gX0i5cSE9PQz7STFVr7FcWwWsIynrWuRVuSzgd8L7GgifYJV-qNpHd49vcrfUQ6GLY1fOWUSJynTfmUyRQXyLBvURAKbf5Uc3keaUX2EGoPbm32-B5kDlTqhLRWTfrldMGiX6pPYalIzqc27dq3famEnsQoBclnqJm26UQlOBBQesLBHx5pG27ngCC-mnAFZpyihYBCRztW0iPBx-Jt1~KPuww4jx-WpEHYJbqyQS~YxJjRJ5UNGErZfc49~5dC-9jEXkVOxzw~qB90sO6Ce7~QTzFT6QdDD4uuZvmqhC-mcCv6w9K4AqcNmz-AGbIVjFgsoH0C3jBUuQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54569,
  },
  {
    id: 54546,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    name: "PU Glossy Bottled Grape",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/25a827ef-41ec-3ff0-8e51-f976ba4d1cc4/54546/d15f0807_0.png?Expires=1723709779&Signature=k6flGkxIp8u0IgbPsyR39eMmUOF1gl3yZqPtZ939IEzJhpPXO6op80xp4On4d1KskqqMBECTfpP-2QJMLBhzGtm0AAwcEDn8ldmu3eKHoE0XGkPD3PE1oSDSnnpW2urJG8NjyWoEjkbUIJn~wagpOcoav1Nk1wbSikvRALwclNyFFbFev3wbiu01oetraLJCUblsZXH~BoISENA-F6jnazP052VnUS~kwh~SvGHcP1Ul13rDUeFgFu9GU2A~28kQUDhHbfPcnIbwshtw73NHUvVxLksMbqe8w5Byd4usqCrMLR2F4bn2Bdsk2kmty688G8w7UdgtCXlZBBhPHzKYtA__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/25a827ef-41ec-3ff0-8e51-f976ba4d1cc4/54546/3ea4bbfd_0.JPEG?Expires=1723709779&Signature=whXtDLe583uKWZfFBW9FYTGvq1xFa~~9m4XkcYK9F2zAuimL~H5Dr9IWofhQUW4qGnw-WnXg6fGQrCYFaFk6Q17-Fe2ZkblJcCszjruB4IIwyyZmZNd8V8Kssm0qoYoPME4yFbc4Oj7--rbd3VFJdvy5O65kf-5g0KozRvZNSnRO~cKfSoiSXv4Pb9ChReKi3wn8bjDXN7FoZT6rVAQOdqOcDoXxCgnCEgHs5oHYhC0PjMCKulZp9561raTTnwWKevG6EfuE8B4qaR1V9dc1RQZrGadMk3r3fwgL2Ooqbxak6gt2WyQBJMN2s1VsTvHM1CqkZAkwpBIGqY4bv5MN5g__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54546,
  },
  {
    id: 54570,
    doorType: HINGED_DOOR,
    size: "8 x 8 ft",
    finishType: PU,
    name: "PU Glossy Teal Dream",
    image: null,
    image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/low_res/3575/7444aea5-bbef-3dba-897b-01039d32460d/54570/2dec9382_0.png?Expires=1723709780&Signature=eACzpMYyw26fz8By~fLqpKPV~dXTXI9zpP0E70RXjvdEyigbI1PtjHp7ryfOlUIykdfe3gBBi40NsEgCE5ZIZvIhOgnB4-92xmzjdsonSscK-~Wf2Pk73iBoQ6iCyeV00WZKFeYYhcsYx1uWDIHKaZD~0k84OBiG9HbbuWxotDiWVqG4h7M1ywtwMcNUuBdSSrIxlMsM1NnmDgXX3ipcQK8335NBmCh6E9YC-FWN8bZFjqvh731BthFhMz-ENDQHoLB0Gjp9QKskY4sLU1JTBrmRGclmPu9BvJ9klW9WDKyqz2X07RRx8bvNqmgQQz4SH2orXy~rZiHBm-oTnUVRXA__&Key-Pair-Id=K3MIEF79PIHRTH",
    jpg_image: null,
    jpg_image_low:
      "https://media.imagine.io/media/public/image_configurator_viewer/merge_renders/v2/jpg_files/low_res/3575/7444aea5-bbef-3dba-897b-01039d32460d/54570/df2a7445_0.JPEG?Expires=1723709780&Signature=N4W~6qlhLUlJ39AJrqfV7F~TV-vfkXWEVz6ilMZ1blag6LcWg~omxi3NJSTvx6t5CPPi00yo5MEp5yTdA1Q8xnKzWihAeDX3PAp~4vEsKKwlxZASSsYHiX1jtDXvIyOF5o-XC4efnGfpspkmyF4xmPq8WTwshidYZnpUAJaN-xwRdf1DCl5pTjfpZKi8pIr3svBRD0zBiGcLDEpKjnYfFz2vcs3cEWjZ3X5z4EAfe5Y3E71tyUQ9Ygbg0rqKtD4XZxZ3YmXQonivz9JtMF1E0yV1Nm933D-BLTN7UqLC46qA1Xc48Hxyt9rJjDBG8RQs-eFXbbOhgQEcn0qxOyjdpw__&Key-Pair-Id=K3MIEF79PIHRTH",
    parent: 54570,
  },
];