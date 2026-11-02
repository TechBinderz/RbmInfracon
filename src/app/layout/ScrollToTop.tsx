import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import themeColor from "../../features/common/common";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fab
      aria-label="scroll to top"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: showScroll ? "inline-flex" : "none",
        width: 56,
        height: 56,
        boxShadow: 3,
        backgroundColor: themeColor,
        "&:hover": {
          backgroundColor: themeColor,
        },
      }}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon sx={{ color: "white" }} />
    </Fab>
  );
};

export default ScrollToTop;
