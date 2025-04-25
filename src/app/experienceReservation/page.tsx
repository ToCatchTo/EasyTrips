import ExperienceReservationForm from "@/components/ExperienceReservationForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";
import { NextPage } from "next";

const ExperienceReservation: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <ExperienceReservationForm />
            <Footer />
        </Box>
    );
}

export default ExperienceReservation;