import styled from "styled-components";

const levelData = [
  {
    color: "#d5d5d5",
    title:
      "The convenient choice for charging your electric vehicle at home overnight.",
    v: "120V",
    a: "Standard Household Outlet",
    b: "Adds 2-5 miles of range per hour",
    c: "Everyday charging at home, simply plug it in overnight and you're ready to go by morning.",
    image: "6.webp",
  },
  {
    color: "#cbeaeb",
    title:
      "A faster, more powerful charging solution for homes and businesses.",
    v: "240V",
    a: "Special 240V Outlet (like for an oven)",
    b: "Adds 10-30 miles of range per hour",
    c: "Home or workplace charging when you need a full charge in just a few hours.",
    image: "7.webp",
  },
  {
    color: "#d5d5d5",
    title: "The fastest way to charge, perfect for when you're on the go.",
    v: "480V+ (Direct Current)",
    a: "Specialized DC Fast Charging Equipment",
    b: "Adds 150-350+ miles of range in under an hour",
    c: "Public charging stations, enabling long-distance travel with minimal downtime.",
    image: "8.webp",
  },
];

export const VehicleCharger = ({ level }: { level: number }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        width={180}
        src={`/images/ev-charger-tab/${levelData[level].image}`}
        style={{
          zIndex: 1,
          marginTop: level === 0 ? "-5px" : "0px",
          marginBottom: level === 0 ? "-60px" : "-65px",
        }}
      />
      <InfoContainer
        style={{
          backgroundColor: levelData[level].color,
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          level {level + 1}
        </p>
        <InfoText style={{ marginTop: "12px" }}>
          {levelData[level].title}
        </InfoText>
        <img src="/images/ev-charger-tab/2.webp" width={40} alt="Voltage indicator" />
        <InfoText style={{ marginBottom: "12px" }}>
          {levelData[level].v}
        </InfoText>
        <img src="/images/ev-charger-tab/3.webp" width={30} alt="Amperage indicator" />
        <InfoText style={{ marginBlock: "12px" }}>
          {levelData[level].a}
        </InfoText>
        <img src="/images/ev-charger-tab/4.webp" width={30} alt="Power indicator" />
        <InfoText style={{ marginBlock: "12px" }}>
          {levelData[level].b}
        </InfoText>
        <img src="/images/ev-charger-tab/5.webp" width={30} alt="Charging time indicator" />
        <InfoText style={{ marginTop: "12px" }}>{levelData[level].c}</InfoText>
      </InfoContainer>
    </div>
  );
};

const InfoContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000 !important;
  flex: 1;
`;
const InfoText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #000000;
`;
