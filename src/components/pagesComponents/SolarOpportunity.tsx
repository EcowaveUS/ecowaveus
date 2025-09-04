import React from "react";
import styled from "styled-components";

export const SolarOpportunity = ({
  opportunity,
}: {
  opportunity: { image: string; title: string; texts: string[] };
}) => {
  return (
    <div
      style={{
        borderRadius: "16px",
        padding: "24px 24px 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#000000 !important",
        backgroundColor: "#fff",
        gap: "12px",
      }}
    >
      <img height={100} src={opportunity.image} />
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#000000",
          textAlign: "center",
        }}
      >
        {opportunity.title}
      </p>
      {opportunity.texts.map((text, _index) => (
        <React.Fragment key={_index}>
          <img src="/images/green-bullet-points.png" width={20} />
          <InfoText>{text}</InfoText>
        </React.Fragment>
      ))}
    </div>
  );
};

const InfoText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #000000;
`;
