import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import slide1 from "../IMG/1.jpg";
import slide2 from "../IMG/2.jpg";
import slide3 from "../IMG/3.jpg";
import slide4 from "../IMG/4.jpg";
import slide5 from "../IMG/5.jpg";
import slide6 from "../IMG/6.jpg";
import slide7 from "../IMG/7.jpg";
import slide8 from "../IMG/8.jpg";
import slide9 from "../IMG/9.jpg";
import slide10 from "../IMG/10.jpg";
import slide11 from "../IMG/11.jpg";
import slide12 from "../IMG/12.jpg";

const imgs = [
  {
    src: slide1,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide2,
    altText: "",
    caption: "",
    header: " ",
  },
  {
    src: slide3,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide4,
    altText: "",
    caption: "",
    header: "",
  },

  {
    src: slide5,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide6,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide7,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide8,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide9,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide10,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide11,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: slide12,
    altText: "",
    caption: "",
    header: "",
  },
];

function Img() {
  return <UncontrolledCarousel items={imgs} />;
}

export default Img;
