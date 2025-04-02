import Button from "@/components/Button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { colors } from "@/variables/globalVariables";
import { AccountCircleRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ProfileInfo = () => {
    return (

        <Box sx={{ padding: '0px 100px', display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <Box sx={{ display: 'flex', gap: '50px' }}>
                <AccountCircleRounded sx={{ width: '200px', height: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', display: 'flex', alignItems: 'center', height: '60px', color: colors.textReverse, padding: '0px 20px', width: '100%', gap: '5px', boxShadow: '5px 5px 5px #E9E9AF' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Jméno:</Typography>
                        <Typography>Petr Novák</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', display: 'flex', alignItems: 'center', height: '60px', color: colors.textReverse, padding: '0px 20px', width: '100%', gap: '5px', boxShadow: '5px 5px 5px #E9E9AF' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Telefonní číslo:</Typography>
                        <Typography>123 456 789</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', display: 'flex', alignItems: 'center', height: '60px', color: colors.textReverse, padding: '0px 20px', width: '100%', gap: '5px', boxShadow: '5px 5px 5px #E9E9AF' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>E-mail:</Typography>
                        <Typography>petr@novak.cz</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box component='button' sx={{ backgroundColor: colors.background, border: 'none', cursor: 'pointer' }}>
                    <EditRoundedIcon sx={{ width: '30px', height: '30px' }} />
                </Box>
                <Box component='button' sx={{ backgroundColor: colors.background, border: 'none', cursor: 'pointer' }}>
                    <LogoutRoundedIcon sx={{ width: '30px', height: '30px' }} />
                </Box>
            </Box>
        </Box>

    );
}

export default ProfileInfo;