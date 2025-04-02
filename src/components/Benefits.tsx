import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

const Benefits = () => {
    return (
        <Box sx={{ marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>Proč zvolit zrovna nás?</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '70px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TravelExploreRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'none', color: colors.textReverse, fontStyle: 'italic' }}>Široký výběr zážitků a výletových destinací</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SyncLockRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', color: colors.textReverse, fontStyle: 'italic' }}>Bezpečnost a spolehlivost našich služeb</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', color: colors.textReverse, fontStyle: 'italic' }}>Ověřeno více než milióny zákazníky</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '350px', textAlign: 'center' }}>
                    <Box sx={{ backgroundColor: colors.primary, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SupportAgentRoundedIcon sx={{ color: colors.text, width: '50px', height: '50px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '24px', color: colors.textReverse, fontStyle: 'italic' }}>24/7 poskytovaná podpora při potížích</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Benefits;