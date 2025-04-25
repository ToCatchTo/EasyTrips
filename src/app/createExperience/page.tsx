import CreateExperienceForm from "@/components/CreateExperienceForm";
import ExperienceFilter from "@/components/ExperienceFilter";
import ExperienceOffersList from "@/components/ExperienceOffersList";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StaysFilter from "@/components/StaysFilter";
import StaysOffersList from "@/components/StaysOffersList";
import { Box } from "@mui/material";
import { NextPage } from "next";

const CreateExperience: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <Box sx={{ padding: '0px 100px' }}>
                <CreateExperienceForm />
            </Box>
            <Footer />
        </Box>
    );
}

export default CreateExperience;