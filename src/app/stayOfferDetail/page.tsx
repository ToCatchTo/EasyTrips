import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StayOfferDetail from "@/components/StayOfferDetail";
import { Box } from "@mui/material";
import { NextPage } from "next";

const StayOfferDetailPage: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ padding: '0px 100px' }}>
        <StayOfferDetail />
      </Box>
      <Footer />
    </Box>
  );
}

export default StayOfferDetailPage;