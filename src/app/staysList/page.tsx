import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StaysFilter from "@/components/StaysFilter";
import StaysOffersList from "@/components/StaysOffersList";
import { Box } from "@mui/material";
import { NextPage } from "next";

const StaysList: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <Box sx={{ padding: '0px 100px' }}>
                <StaysFilter />
                <StaysOffersList />
            </Box>
            <Footer />
        </Box>
    );
}

export default StaysList;