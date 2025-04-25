import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StayOfferDetail from "@/components/StayOfferDetail";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { Suspense } from "react";

const StayOfferDetailPage: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ padding: '0px 100px' }}>
        <Suspense>
          <StayOfferDetail />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}

export default StayOfferDetailPage;