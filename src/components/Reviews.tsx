import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Reviews = () => {
    return (
        <Box sx={{ marginTop: '100px', display: 'flex', gap: '30px', backgroundColor: colors.primary, width: '100%', height: '300px', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px', marginLeft: '100px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px' }} />
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    </Box>
                </Box>
                <Typography sx={{ color: colors.text, fontStyle: 'italic' }}>
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px' }} />
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    </Box>
                </Box>
                <Typography sx={{ color: colors.text, fontStyle: 'italic' }}>
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px', marginRight: '100px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px' }} />
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    </Box>
                </Box>
                <Typography sx={{ color: colors.text, fontStyle: 'italic', textWrap: 'wrap' }}>
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </Typography>
            </Box>
        </Box>
    );
}

export default Reviews;