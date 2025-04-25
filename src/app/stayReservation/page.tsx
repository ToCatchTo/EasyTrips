import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StayReservationForm from "@/components/StayReservationForm";
import { Box } from "@mui/material";
import { NextPage } from "next";

const StayReservation: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <StayReservationForm />
            <Footer />
        </Box>
    );
}

export default StayReservation;