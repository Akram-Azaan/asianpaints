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