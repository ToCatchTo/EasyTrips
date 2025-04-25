import ExperienceOfferDetail from "@/components/ExperienceOfferDetail";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { Suspense } from "react";

const ExperienceOfferDetailPage: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ padding: '0px 100px' }}>
        <Suspense>
          <ExperienceOfferDetail />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}

export default ExperienceOfferDetailPage;