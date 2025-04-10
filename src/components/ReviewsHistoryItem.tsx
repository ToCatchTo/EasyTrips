import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from "./Button";

const ReviewsHistoryItem = () => {
    return (
        <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(20% - 20px)', color: colors.textReverse, padding: '10px', width: 'calc(100% - 20px)', display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
            <Box sx={{ display: 'flex', gap: '15px' }}>
                <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>Tokyo</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '15px', width: '15px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '15px', width: '15px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '15px', width: '15px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '15px', width: '15px' }} />
                    </Box>
                    <Typography sx={{ marginTop: '10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button text="Přejít k ubytování" path="/stayOfferDetail" />
            </Box>
        </Box>
    );
}

export default ReviewsHistoryItem;