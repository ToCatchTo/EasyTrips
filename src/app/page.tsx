import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import { colors } from "@/variables/globalVariables";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import DescriptionSteps from "@/components/DescriptionSteps";
import Benefits from "@/components/Benefits";
import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Homepage: NextPage = () => {
  return (
    <Box>
      <NavBar />
      <Header />
      <Box sx={{ padding: '0px 80px' }}>
        <DescriptionSteps />
        <Destinations />
      </Box>
      <Reviews />
      <Box sx={{ padding: '0px 100px' }}>
        <Benefits />
      </Box>
      <Footer />
    </Box>
  );
}

export default Homepage;