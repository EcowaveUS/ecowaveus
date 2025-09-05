import React from "react";
import styled from "styled-components";

export const SolarOpportunity = ({
  opportunity,
  order,
}: {
  order: number;
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
      <img
        height={order === 2 ? 170 : 100}
        src={opportunity.image}
        style={{ marginTop: order === 2 ? "-36px" : "0" }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: opportunity.title }}
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#000000",
          textAlign: "center",
          marginTop: order === 2 ? "-36px" : "0",
        }}
      />
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
