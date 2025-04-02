import Button from "@/components/Button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { colors } from "@/variables/globalVariables";
import { AccountCircleRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ProfileInfo from "@/components/ProfileInfo";
import ReservationHistory from "@/components/ReservationHistory";
import ReviewsHistory from "@/components/ReviewsHistory";

const ProfileDetail: NextPage = () => {
    return (
        <Box>
            <NavBar />
            <ProfileInfo />
            <Box sx={{ padding: '0px 100px' }}>
                <ReservationHistory />
                <ReviewsHistory />
            </Box>
            <Footer />
        </Box>
    );
}

export default ProfileDetail;