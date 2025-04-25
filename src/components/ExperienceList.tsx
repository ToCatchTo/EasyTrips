'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Modal, Pagination, TextField, Typography } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect } from "react";
import experienceController from "../../backend/experienceController";
import userController from "../../backend/userController";
import Button from "./Button";

const ExperienceList = () => {
    const [experience, setExperience] = useState<any[]>([]);
    const [pages, setPages] = useState(0);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<any | null>(null);

    const handleOpen = (exp: any) => {
        setSelectedExperience(exp);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedExperience(null);
    };

    const handleUpdate = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const handleChange = (e: any) => {
        if (!selectedExperience) return;
        setSelectedExperience({ ...selectedExperience, [e.target.name]: e.target.value });
    };

    const handleEdit = async () => {
        if (!selectedExperience) return;
        await experienceController.editExperience(selectedExperience.id, selectedExperience);
        handleUpdate();
        handleClose();
    };

    const handleDelete = async (id: string) => {
        await experienceController.deleteExperience(id);
        handleUpdate();
    };

    useEffect(() => {
        const fetchExperience = async () => {
            const ownerId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
            const experienceData = await experienceController.getExperienceByOwner(ownerId!);
            setPages(Math.ceil(experienceData.length / 4));
            setExperience(experienceData);
        };
        fetchExperience();
    }, [refreshTrigger]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Provozované zážitky</Typography>
            <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {experience.map(exp => (
                    <Box key={exp.id} sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{exp.activityName}</Typography>
                                <Box sx={{ display: 'flex', gap: '50px' }}>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Místo:</Typography>
                                        <Typography>{exp.address}, {exp.location}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Kontakt:</Typography>
                                        <Typography>{exp.phone}, {exp.email}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Max osob:</Typography>
                                        <Typography>{exp.maxCapacity}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Cena:</Typography>
                                        <Typography>{exp.pricePerPerson} Kč</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box component='button' onClick={() => handleOpen(exp)} sx={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                <EditRoundedIcon sx={{ width: '30px', height: '30px', fill: 'blue' }} />
                            </Box>
                            <Box component='button' onClick={() => handleDelete(exp.id)} sx={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                <DeleteForeverIcon sx={{ width: '30px', height: '30px', fill: 'red' }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
                <Pagination sx={{ '& .MuiPaginationItem-root': { color: colors.text }, alignSelf: 'flex-end' }} count={pages} page={1} />
                <Modal key={2} open={open} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="h6">Upravit zážitek</Typography>
                        <TextField label="Název zážitku" name="activityName" value={selectedExperience?.activityName || ''} onChange={handleChange} />
                        <TextField label="Město" name="location" value={selectedExperience?.location || ''} onChange={handleChange} />
                        <TextField label="Adresa" name="address" value={selectedExperience?.address || ''} onChange={handleChange} />
                        <TextField label="Telefon" name="phone" value={selectedExperience?.phone || ''} onChange={handleChange} />
                        <TextField label="Email" name="email" value={selectedExperience?.email || ''} onChange={handleChange} />
                        <TextField label="Cena za osobu" name="pricePerPerson" type="number" value={selectedExperience?.pricePerPerson || 1} onChange={handleChange} />
                        <TextField label="Max kapacita" name="maxCapacity" type="number" value={selectedExperience?.maxCapacity || 1} onChange={handleChange} />
                        <Button text="Uložit změny" path="#" onClick={handleEdit} />
                    </Box>
                </Modal>
            </Box>
        </Box>
    );
}

export default ExperienceList;
