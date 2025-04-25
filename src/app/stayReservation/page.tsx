import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StayReservationForm from "@/components/StayReservationForm";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { Suspense } from "react";

const StayReservation: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <Suspense>
                <StayReservationForm />
            </Suspense>
            <Footer />
        </Box>
    );
}

export default StayReservation;