import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Reviews = () => {
    return (
        <Box sx={{ marginTop: '100px', display: 'flex', gap: '30px', backgroundColor: colors.primary, width: '100%', height: '300px', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px', marginLeft: '100px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px' }} />
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: colors.text }}>Petr M.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    </Box>
                </Box>
                <Typography sx={{ color: colors.text, fontStyle: 'italic' }}>
                    "Stránka má skvělé ubytování, ale trochu složitější orientace. Zatím jsem našla, co jsem hledala, ale občas je těžké najít specifické filtry. Celkově spokojenost, ubytování bylo krásné, cena odpovídala kvalitě."
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px' }} />
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: colors.text }}>Hana K.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    </Box>
                </Box>
                <Typography sx={{ color: colors.text, fontStyle: 'italic' }}>
                    "Líbí se mi široký výběr ubytování, ale několik filtrů by mohlo být trochu přesnějších. Stránka se mi ale líbí, je přehledná a snadno se používá. Ubytování bylo pohodlné a odpovídalo popisu."
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px', marginRight: '100px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px' }} />
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: colors.text }}>Lucie N.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                        <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    </Box>
                </Box>
                <Typography sx={{ color: colors.text, fontStyle: 'italic', textWrap: 'wrap' }}>
                    "Web je skvělé pro hledání nových míst na pobyt. Jediné, co bych zlepšila, je rychlost načítání stránek. Filtry fungují dobře, ale občas mám pocit, že je potřeba více možností. Jinak jsem byla spokojena."
                </Typography>
            </Box>
        </Box>
    );
}

export default Reviews;