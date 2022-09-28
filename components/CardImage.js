import React from "react";
import Card from "./Card";
export default function CardImage(props) {
  return <img src={props.img}className="card-img-top" alt="..." />;
}