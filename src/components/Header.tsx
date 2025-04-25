import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from "./Button";

const Header = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', width: '100%', height: '90vh', flexDirection: 'column' }}>
            <Box component="img" src="/headerImg.jpg" sx={{ width: '100%', height: '90vh', filter: 'brightness(30%)', position: 'absolute', top: '10vh', zIndex: -1 }}></Box>
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: colors.text, fontSize: '64px', fontWeight: 'bold' }}>Najděte své další dobrodružství snadno</Typography>
                <Typography sx={{ color: colors.text, fontSize: '24px', fontStyle: 'italic' }}>Prohlédněte si tisíce zážitků a ubytování šitých na míru právě vám</Typography>
            </Box>
            {/* <Box sx={{ backgroundColor: colors.background, height: '75px', width: '50%', borderRadius: '20px', padding: '0px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                Řím, New York, Tokyo, ...
                <SearchRoundedIcon />
            </Box> */}
            <Box sx={{ width: '30%' }}>
                <Button text="ZAPOČNĚTE SVOJÍ CESTU" path="/staysList" />
            </Box>
            <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <Typography sx={{ color: colors.text, fontWeight: 'bold' }}> Přes 10 000 000 spokojených zákazníků</Typography>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                    <StarRoundedIcon sx={{ fill: '#FFB700', height: '30px', width: '30px' }} />
                </Box>
                <Typography sx={{ color: colors.text, fontWeight: 'bold' }}> Přes 200 000 spokojených zprostředkovatelů ubytování</Typography>
            </Box>
        </Box>
    );
}

export default Header;