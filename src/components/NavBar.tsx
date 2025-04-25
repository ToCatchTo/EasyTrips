'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import Button from "./Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    let isUserMiddleman: boolean;
    let isUserSigned: boolean;

    try {
        isUserMiddleman = (localStorage.getItem('isMiddleman') ?? "").slice(1, -1) === 'true';
        isUserSigned = localStorage.getItem('loginState') == 'true';
    } catch (error) {
        isUserMiddleman = false;
        isUserSigned = false;
    }

    return (
        <Box sx={{ backgroundColor: colors.primary, height: '10vh', display: 'flex', justifyContent: 'space-between', padding: '0px 100px', alignItems: 'center', position: 'sticky', top: '0px', zIndex: 1000 }}>
            <Link style={{ textDecoration: 'none', color: colors.text, fontWeight: 'bold', fontSize: '40px' }} href='/'>EasyTrips</Link>
            <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
                {isUserMiddleman ? (
                    <>
                        <Button text="Zaregistrovat ubytování" path='/createStay' />
                        <Button text="Zaregistrovat zážitek" path='/createExperience' />
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