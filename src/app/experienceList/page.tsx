import ExperienceFilter from "@/components/ExperienceFilter";
import ExperienceOffersList from "@/components/ExperienceOffersList";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StaysFilter from "@/components/StaysFilter";
import StaysOffersList from "@/components/StaysOffersList";
import { Box } from "@mui/material";
import { NextPage } from "next";

const ExperienceListPage: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <Box sx={{ padding: '0px 100px' }}>
                <ExperienceFilter />
                <ExperienceOffersList />
            </Box>
            <Footer />
        </Box>
    );
}

export default ExperienceListPage;