'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Pagination, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Button from "./Button";
import ExperienceOffersItem from "./ExperienceOffersItem";
import { useState, useEffect } from "react";
import stayController from "../../backend/stayController";
import experienceController from "../../backend/experienceController";

const ExperienceOffersList = () => {
    const [experience, setExperience] = useState<any[]>([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const staysPerPage = 4;

    useEffect(() => {
        const fetchExperience = async () => {
            const allExperience = await experienceController.getAllExperience();
            setExperience(allExperience);
            setPages(Math.ceil(allExperience.length / staysPerPage));
            setCurrentPage(1);
        };
        fetchExperience();
    }, []);

    const indexOfLastExperience = currentPage * staysPerPage;
    const indexOfFirstExperience = indexOfLastExperience - staysPerPage;
    const currentExperience = experience.slice(indexOfFirstExperience, indexOfLastExperience);

    const handlePageChange = (_: any, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Nabízené zážitky</Typography>
            <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {currentExperience.map(experience => (
                    <Box key={experience.id} sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', color: colors.textReverse, padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{experience.activityName}</Typography>
                                <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Cena za osobu:</Typography>
                                        <Typography>{experience.pricePerPerson} Kč</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Maximum osob:</Typography>
                                        <Typography>{experience.maxCapacity}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button text="Prohlédnout" path={`/experienceOfferDetail?id=${experience.id}`} />
                        </Box>
                    </Box>
                ))}
                <Pagination
                    sx={{ '& .MuiPaginationItem-root': { color: colors.text }, alignSelf: 'flex-end' }}
                    count={pages}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Box>
        </Box >
    );
}

export default ExperienceOffersList;