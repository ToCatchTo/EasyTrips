import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from "./Button";

const StaysOffersItem = () => {
    return (
        <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(20% - 20px)', color: colors.textReverse, padding: '10px', width: 'calc(100% - 20px)', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '15px' }}>
                <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>Tokyo</Typography>
                    <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Cena za osobu na noc:</Typography>
                            <Typography>1000 Kč</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Mazlíčci:</Typography>
                            <Typography>Povoleni</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Maximum osob:</Typography>
                            <Typography>5</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button text="Prohlédnout" path="#" />
            </Box>
        </Box>
    );
}

export default StaysOffersItem;