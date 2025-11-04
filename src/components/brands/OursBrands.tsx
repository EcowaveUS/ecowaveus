import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Theme, useMediaQuery } from "@mui/material";

interface Props {
  images: string[];
  color?: string;
}

export const OursBrands: React.FC<Props> = ({ images, color = "white" }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isWide = useMediaQuery(`(min-width: 1371px)`);

  return (
    <Box
      component={"div"}
      bgcolor={color}
      paddingY={isDesktop ? "32px" : "20px"}
    >
      {isWide ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={isDesktop ? "12px" : "6px"}
          alignItems={"center"}
        >
          {images.map((image, _idx) => (
            <Box
              key={_idx}
              component={"div"}
              paddingY={isDesktop ? "12px" : "6px"}
              paddingX={isDesktop ? "24px" : "13px"}
            >
              <img
                style={{ filter: "grayscale(100%)" }}
                src={image}
                alt={`brand-${_idx}`}
                height={isDesktop ? "60px" : "33px"}
                width={"auto"}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <InfiniteLooper speed={10} direction="left">
          {images.map((image, _idx) => (
            <Box
              key={_idx}
              component={"div"}
              paddingY={isDesktop ? "12px" : "6px"}
              paddingX={isDesktop ? "24px" : "13px"}
            >
              <img
                style={{ filter: "grayscale(100%)" }}
                src={image}
                alt={`brand-${_idx}`}
                height={isDesktop ? "60px" : "33px"}
                width={"auto"}
              />
            </Box>
          ))}
        </InfiniteLooper>
      )}
    </Box>
  );
};

const InfiniteLooper = function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
