'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Checkbox, Modal, Pagination, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Button from "./Button";
import stayController from "../../backend/stayController";
import { use, useEffect, useState } from "react";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import userController from "../../backend/userController";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Check } from "@mui/icons-material";

const StaysList = () => {
    const [stays, setStays] = useState<any[]>([]);
    const [pages, setPages] = useState(0);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedStay, setSelectedStay] = useState<any | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const staysPerPage = 4;

    const handleOpen = (stay: any) => {
        setSelectedStay(stay);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedStay(null);
    };

    const handleEdit = async () => {
        if (!selectedStay) return;
        await stayController.editStay(selectedStay.id, selectedStay);
        handleUpdate();
        handleClose();
    };

    const handleChange = (e: any) => {
        if (!selectedStay) return;
        setSelectedStay({ ...selectedStay, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const fetchStays = async () => {
            const ownerId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
            const staysData = await stayController.getStaysByOwner(ownerId!);
            setPages(Math.ceil(staysData.length / 4));
            setStays(staysData);
            setCurrentPage(1);
        };
        fetchStays();
    }, [refreshTrigger]);

    const handleUpdate = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const handleDelete = async (id: string) => {
        await stayController.deleteStay(id);
        handleUpdate();
    };

    const indexOfLastStay = currentPage * staysPerPage;
    const indexOfFirstStay = indexOfLastStay - staysPerPage;
    const currentStays = stays.slice(indexOfFirstStay, indexOfLastStay);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Provozovaná ubytování</Typography>
            <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {currentStays.map(stay => (
                    <Box key={stay.id} sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(20% - 20px)', color: colors.textReverse, padding: '10px', width: 'calc(100% - 20px)', display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{stay.location}</Typography>
                                <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Místo:</Typography>
                                        <Typography>{stay.address}, {stay.location}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Kontakt:</Typography>
                                        <Typography>{stay.phone}, {stay.email}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Max osob:</Typography>
                                        <Typography>{stay.maxCapacity}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Cena za osobu na noc:</Typography>
                                        <Typography>{stay.pricePerNight} Kč</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Mazlíčci:</Typography>
                                        <Typography>{stay.petsAllowed ? "Povoleni" : "Nepovoleni"}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box component='button' onClick={() => handleOpen(stay)} sx={{ backgroundColor: colors.componentBackground, border: 'none', cursor: 'pointer' }}>
                                <EditRoundedIcon sx={{ width: '30px', height: '30px', fill: 'blue' }} />
                            </Box>
                            <Box component='button' onClick={() => handleDelete(stay.id)} sx={{ backgroundColor: colors.componentBackground, border: 'none', cursor: 'pointer' }}>
                                <DeleteForeverIcon sx={{ width: '30px', height: '30px', fill: 'red' }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
                <Pagination sx={{ '& .MuiPaginationItem-root': { color: colors.text }, alignSelf: 'flex-end' }} count={pages} page={currentPage} onChange={(_, value) => setCurrentPage(value)} />
                <Modal key={1} open={open} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="h6">Upravit ubytování</Typography>
                        <TextField label="Město" name="location" value={selectedStay?.location || ''} onChange={handleChange} />
                        <TextField label="Adresa" name="address" value={selectedStay?.address || ''} onChange={handleChange} />
                        <TextField label="Telefon" name="phone" value={selectedStay?.phone || ''} onChange={handleChange} />
                        <TextField label="Email" name="email" value={selectedStay?.email || ''} onChange={handleChange} />
                        <TextField label="Cena za osobu za noc" name="pricePerNight" type="number" value={selectedStay?.pricePerNight || 1} onChange={handleChange} />
                        <TextField label="Max kapacita" name="maxCapacity" type="number" value={selectedStay?.maxCapacity || 1} onChange={handleChange} />
                        <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center' }}>
                            <Checkbox sx={{ alignSelf: 'flex-start' }} checked={selectedStay?.petsAllowed || false} onChange={(e) => setSelectedStay({ ...selectedStay, petsAllowed: e.target.checked })} />
                            <Typography sx={{ fontSize: '14px', color: colors.textReverse }}>Povolit domácí mazlíčky</Typography>
                        </Box>
                        <Button text="Uložit změny" path="#" onClick={handleEdit} />
                    </Box>
                </Modal>
            </Box>
        </Box >
    );
}

export default StaysList;