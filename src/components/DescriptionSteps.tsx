import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';

const DescriptionSteps = () => {
    return (
        <Box sx={{ marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '70px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SearchRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'none', color: colors.textReverse, fontStyle: 'italic' }}>Najděte své vytoužené zážitky nebo destinace</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CompareArrowsRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', color: colors.textReverse, fontStyle: 'italic' }}>Porovnejte a zarezervujte během chvilky</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FlightTakeoffRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', color: colors.textReverse, fontStyle: 'italic' }}>Užíjte si svoje vysněné dobrodružství!</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default DescriptionSteps;