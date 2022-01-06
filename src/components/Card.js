import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.coverImg}`}
        alt="book"
        className="card-image"
      />
      <div className="card-info">
        <img src="../images/star.png" className="card-rating" />
        <p>{props.stats.rating}</p>
        <p>({props.stats.reviewCount}) • </p>
        <p>{props.location}</p>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">From ${props.price} / person </p>
    </div>
  );
}
export default Card;
