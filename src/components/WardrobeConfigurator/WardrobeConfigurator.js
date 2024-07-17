import React, { useState } from "react";
import WardrobeImageViewer from "./WardrobeImageViewer";

const wardrobeDimensions = [
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

const WardrobeConfigurator = () => {
  return (
    <>
      <WardrobeImageViewer wardrobeDimensions={wardrobeDimensions} />
    </>
  );
};

export default WardrobeConfigurator;
