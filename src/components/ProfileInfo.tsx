'use client';
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { colors } from "@/variables/globalVariables";
import { AccountCircleRounded } from "@mui/icons-material";
import { Box, Modal, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { logoutUser } from "../../backend/auth/authService";
import { useRouter } from "next/navigation";
import userController from "../../backend/userController";
import { useEffect, useState } from "react";

const ProfileInfo = () => {
    const router = useRouter();
    const [info, setInfo] = useState<any | null>(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isMiddleman: false
    });
    const [open, setOpen] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState<any | null>(null);

    const handleOpen = (stay: any) => {
        setSelectedInfo(stay);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedInfo(null);
    };

    const handleEdit = async () => {
        if (!selectedInfo) return;
        await userController.editUser((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1), selectedInfo);
        handleUpdate();
        handleClose();
    };

    const handleChange = (e: any) => {
        if (!selectedInfo) return;
        setSelectedInfo({ ...selectedInfo, [e.target.name]: e.target.value });
    };

    const getCurrentUser = async () => {
        const user = await userController.getUser((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
        setCurrentUser({ firstName: user?.firstName, lastName: user?.lastName, email: user?.email, phone: user?.phone, isMiddleman: user?.isMiddleman });
    }

    useEffect(() => {
        const fetchStays = async () => {
            const staysData = await userController.getUser((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
            setInfo(staysData);
            await getCurrentUser();
        };
        fetchStays();
    }, [refreshTrigger]);

    const handleUpdate = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const handleLogout = async () => {
        await logoutUser();
        router.push("/");
    }

    return (
        <Box sx={{ padding: '0px 100px', display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <Box sx={{ display: 'flex', gap: '50px' }}>
                <AccountCircleRounded sx={{ width: '200px', height: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', display: 'flex', alignItems: 'center', height: '60px', color: colors.textReverse, padding: '0px 20px', width: '100%', gap: '5px', boxShadow: '5px 5px 5px #E9E9AF' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Jméno:</Typography>
                        <Typography>{currentUser.firstName} {currentUser.lastName}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', display: 'flex', alignItems: 'center', height: '60px', color: colors.textReverse, padding: '0px 20px', width: '100%', gap: '5px', boxShadow: '5px 5px 5px #E9E9AF' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Telefonní číslo:</Typography>
                        <Typography>{currentUser.phone}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', display: 'flex', alignItems: 'center', height: '60px', color: colors.textReverse, padding: '0px 20px', width: '100%', gap: '5px', boxShadow: '5px 5px 5px #E9E9AF' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>E-mail:</Typography>
                        <Typography>{currentUser.email}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box component='button' onClick={() => handleOpen(currentUser)} sx={{ backgroundColor: colors.background, border: 'none', cursor: 'pointer' }}>
                    <EditRoundedIcon sx={{ width: '30px', height: '30px', fill: 'blue' }} />
                </Box>
                <Box component='button' onClick={handleLogout} sx={{ backgroundColor: colors.background, border: 'none', cursor: 'pointer' }}>
                    <LogoutRoundedIcon sx={{ width: '30px', height: '30px', fill: 'red' }} />
                </Box>
            </Box>
            <Modal key={3} open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h6">Upravit osobní údaje</Typography>
                    <TextField label="Jméno" name="firstName" value={selectedInfo?.firstName || ''} onChange={handleChange} />
                    <TextField label="Příjmení" name="lastName" value={selectedInfo?.lastName || ''} onChange={handleChange} />
                    <TextField label="Telefon" name="phone" value={selectedInfo?.phone || ''} onChange={handleChange} />
                    <Button text="Uložit změny" path="#" onClick={handleEdit} />
                </Box>
            </Modal>
        </Box>

    );
}

export default ProfileInfo;