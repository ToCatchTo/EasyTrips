import { colors } from "@/variables/globalVariables";
import { Box, Pagination, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Button from "./Button";
import ReservationHistoryItem from "./ReservationHistoryItem";
import StaysOffersItem from "./StaysOffersItem";

const StaysOffersList = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Nabízená ubytování</Typography>
            <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <StaysOffersItem />
                <StaysOffersItem />
                <StaysOffersItem />
                <StaysOffersItem />
                <Pagination sx={{ '& .MuiPaginationItem-root': { color: colors.text }, alignSelf: 'flex-end' }} count={1} page={1} />
            </Box>
        </Box >
    );
}

export default StaysOffersList;