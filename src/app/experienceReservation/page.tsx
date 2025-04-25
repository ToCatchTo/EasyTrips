import ExperienceReservationForm from "@/components/ExperienceReservationForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { Suspense } from "react";

const ExperienceReservation: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <Suspense>
                <ExperienceReservationForm />
            </Suspense>
            <Footer />
        </Box>
    );
}

export default ExperienceReservation;