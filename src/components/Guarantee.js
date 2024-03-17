import React from "react";
import { BsSend, BsCheck2Circle } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";

const Guarantee = () => {
  const perks = [
    {
      name: "Instant Delivery",
      icon: <BsSend size={60} />,
      description:
        "Get your assets delivered to your email in seconds and download them right away.",
    },
    {
      name: "Guaranteed Quality",
      icon: <BsCheck2Circle size={60} />,
      description:
        "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
    },
    {
      name: "For the Planet",
      icon: <BiLeaf size={60} />,
      description:
        "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
  ];

  return (
    <div className="perks-container">
      {perks.map((perk, index) => (
        <div key={index} className="perk">
          <div className="perk-icon">{perk.icon}</div>
          <h3 className="perk-name">{perk.name}</h3>
          <p className="perk-description">{perk.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Guarantee;
