import { InfoCard } from "../cards/InfoCard";
import { LogoNavbar } from "./LogoNavbar";
import { Navbar } from "./Navbar";
import { Box } from "@mui/material";
import { CardInfo } from "../../constants/data";
import useScrollPosition from "../../custom-hooks/UseScrollPosition";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import { SideBar } from "./SideBar";
import { useState } from "react";

import actionsClose from "/src/assets/icons/Actions-close.png";
import actionsPhone from "/src/assets/icons/Actions-phone.png";
import actions from "/src/assets/icons/Actions.png";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const isFixed = useScrollPosition(180);
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth <= 1024 ? (
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            backgroundColor: "#fff",
            zIndex: 100,
          }}
        >
          {!sidebar && (
            <Box
              onClick={showSidebar}
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src={actions}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          )}
          <LogoNavbar />
          {!sidebar && (
            <Box
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src={actionsPhone}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          )}
          {sidebar && (
            <Box
              onClick={showSidebar}
              sx={{
                width: "32px",
                height: "32px",
              }}
            >
              <img
                src={actionsClose}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#E4ECF6",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "56px",
              padding: "0 20px",
            }}
          >
            <LogoNavbar />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "25px",
              }}
            >
              {CardInfo.map((card, index) => {
                return (
                  <InfoCard
                    key={index}
                    title={card.title}
                    content={card.content}
                    icon={card.icon}
                  />
                );
              })}
            </Box>
          </Box>
          <Navbar isFixed={isFixed} />
        </Box>
      )}
      <SideBar showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
};
