import { colors } from "@/variables/globalVariables";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import Button from "./Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    let isUserMiddleman: Boolean = false; // TODO
    let isUserSigned: Boolean = false; // TODO

    return (
        <Box sx={{ backgroundColor: colors.primary, height: '10vh', display: 'flex', justifyContent: 'space-between', padding: '0px 100px', alignItems: 'center', position: 'sticky', top: '0px', zIndex: 1000 }}>
            <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '40px' }} href='/'>EasyTrips</Link>
            <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
                {isUserMiddleman ? (
                    <>
                        <Button text="Zaregistrovat ubytování" path='/staysList' />
                        <Button text="Zaregistrovat zážitek" path='/experienceList' />
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/profileDetail'>
                            <AccountCircleIcon sx={{ width: '60px', height: '60px' }} />
                        </Link>
                    </>
                ) : (isUserSigned ? (
                    <>
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/experienceList'>Zážitky</Link>
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/staysList'>Ubytování</Link>
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/profileDetail'>
                            <AccountCircleIcon sx={{ width: '60px', height: '60px' }} />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/experienceList'>Zážitky</Link>
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/staysList'>Ubytování</Link>
                        <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }} href='/login'>Přihlásit se</Link>
                    </>
                ))}
            </Box>
        </Box>
    );
}

export default NavBar;