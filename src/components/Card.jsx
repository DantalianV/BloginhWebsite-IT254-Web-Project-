import React from "react";
import './Card.css';
import { useNavigate } from "react-router-dom";

export default function Card({ img, title, desc }) {
  const navigate = useNavigate();

  function handelButtonClick() {
    navigate('/blog');
  }

  return (
    <div className="card">
      <div className="card_body">
        <img className="card_img" src={img} alt={img} />
        <h2 className="card_title">{title}</h2>
        <p className="card_desc">{desc}</p>
      </div>
      <button className="card_btn" onClick={handelButtonClick}>Select</button>
    </div>
  );
}
