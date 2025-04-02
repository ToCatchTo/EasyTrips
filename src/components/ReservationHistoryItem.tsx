import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Button from "./Button";

const ReservationHistoryItem = () => {
    return (
        <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(20% - 20px)', color: colors.textReverse, padding: '10px', width: 'calc(100% - 20px)', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '15px' }}>
                <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>Tokyo</Typography>
                    <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Doba pobytu:</Typography>
                            <Typography>1.1.2025 - 7.1.2025</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Počet osob:</Typography>
                            <Typography>4</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Cena:</Typography>
                            <Typography>12 658 Kč</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Typ rezervace:</Typography>
                            <Typography>Ubytování</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button text="Ohodnotit" path="#" />
            </Box>
        </Box>
    );
}

export default ReservationHistoryItem;