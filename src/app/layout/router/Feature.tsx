import { Suspense, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const PageLoader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
    }}
  >
    <CircularProgress />
  </Box>
);

const Feature: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default Feature;
