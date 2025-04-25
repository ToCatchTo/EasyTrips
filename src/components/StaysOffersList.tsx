'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Pagination, TextField, Typography } from "@mui/material";
import Button from "./Button";
import { useEffect, useState } from "react";
import stayController from "../../backend/stayController";

const StaysOffersList = () => {
    const [stays, setStays] = useState<any[]>([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const staysPerPage = 4;

    useEffect(() => {
        const fetchStays = async () => {
            const allStays = await stayController.getStays();
            setStays(allStays);
            setPages(Math.ceil(allStays.length / staysPerPage));
            setCurrentPage(1);
        };
        fetchStays();
    }, []);

    const indexOfLastStay = currentPage * staysPerPage;
    const indexOfFirstStay = indexOfLastStay - staysPerPage;
    const currentStays = stays.slice(indexOfFirstStay, indexOfLastStay);

    const handlePageChange = (_: any, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Nabízená ubytování</Typography>
            <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {currentStays.map(stay => (
                    <Box key={stay.id} sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', color: colors.textReverse, padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{stay.location}</Typography>
                                <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Cena za osobu na noc:</Typography>
                                        <Typography>{stay.pricePerNight} Kč</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Mazlíčci:</Typography>
                                        <Typography>{stay.petsAllowed ? "Povoleni" : "Nepovoleni"}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Maximum osob:</Typography>
                                        <Typography>{stay.maxCapacity}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button text="Prohlédnout" path={`/stayOfferDetail?id=${stay.id}`} />
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
        </Box>
    );
};

export default StaysOffersList;
