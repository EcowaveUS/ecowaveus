import { useEffect, useState } from "react";
import { InfoCard } from "../cards/InfoCard";
import { LogoNavbar } from "./LogoNavbar";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Box } from "@mui/material";
import { CommonButton } from "../shared/common/CommonButton";
import { CardInfo } from "../../constants/data";

export const Header = () => {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);

  const [isfixed, setIsfixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 180) {
        setIsfixed(true);
      } else {
        setIsfixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: 0,
          backgroundColor: "rgba(9, 18, 66, 0.30)",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#E4ECF6",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              height: "56px",
              "@media (max-width:1024px)": {
                width: "95%",
                justifyContent: "space-between",
              },
              "@media (max-width:768px)": {
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                height: "auto",
              },
            }}
          >
            <LogoNavbar />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "25px",
                "@media (max-width:1024px)": {
                  display: "none",
                },
                
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
            {/* <Box
              sx={{
                display: "none",
                "@media (max-width:1024px)": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "25px",
                },
              }}
            >
              <InfoCard
                title="Call Us"
                content="(978) 500 - 4081"
                icon={<SvgPhoneIcon />}
              />
              <HambuguerMenu>
                <AiOutlineMenu size={40} onClick={showSidebar} />
              </HambuguerMenu>
            </Box> */}
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            position: isfixed ? "fixed" : "relative",
            top: isfixed ? 0 : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            height: "68px",
            padding: "15px 0",
            backgroundColor: "#022241",
            borderBottom: isfixed ? "1px solid rgba(9, 18, 66, 0.30)" : "none",
            transition: "all 0.3s ease",
            zIndex: 99,
            [theme.breakpoints.down(1024)]: {
              display: "none",
            },
          })}
          className="navbar"
        >
          <Navbar />
          <CommonButton
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "12px 20px",
              color:'#252529',
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "1%",
              borderRadius: "50px",
            }}
          >
            Book Appt
          </CommonButton>
        </Box>
      </Box>
      <SideBar showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
};


// const HambuguerMenu = styled.div`
//   background-color: #003b76;
//   border-radius: 55%;
//   padding: 0.5rem;
//   cursor: pointer;
//   align-items: center;
// `;
