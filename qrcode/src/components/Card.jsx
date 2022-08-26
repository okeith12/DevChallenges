import React from "react";
import styled from "styled-components";
import qrCode from "../images/qr-code.png";

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-img-container">
          <img
            src={qrCode}
            alt="QR Code"
            style={{
              width: "275px",
              height: "275px",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className="card-info-container">
          <h3 className="card-info-title">
            Improve your front-end skills by building projects
          </h3>
          <p className="card-info-inf">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
