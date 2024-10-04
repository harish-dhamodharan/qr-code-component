import { FC } from "react";
import CardProps from "./Card.interface";
import "./Card.css";

const qrcode = require("./../../assets/images/qr-code.png");

const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <div className="Card">
      <div className="Card__image">
        <img
          height={288}
          width={288}
          className="image"
          src={qrcode}
          alt="QR code"
        />
      </div>
      <div className="information">
        <p className="Card__title">{title}</p>
        <p className="Card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
