import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import themeColor from "../../features/common/common";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Fab
      aria-label="scroll to top"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: showScroll ? "inline" : "none",
        width: 56,
        height: 56,
        boxShadow: 3,
        backgroundColor: themeColor,
        "&:hover": {
          backgroundColor: "green",
        },
        "& .MuiFab-icon": {
          fontSize: 30,
        },
      }}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon sx={{ marginTop: "5px", color: "white" }} />
    </Fab>
  );
};

export default ScrollToTop;
