'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Pagination, Typography } from "@mui/material";
import Button from "./Button";
import stayController from "../../backend/stayController";
import { useState, useEffect } from "react";
import userController from "../../backend/userController";
import reservationController from "../../backend/reservationController";

const ReservationHistory = () => {
    const [reservations, setReservations] = useState<any[]>([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const staysPerPage = 4;

    useEffect(() => {
        const fetchReservations = async () => {
            const ownerId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
            const reservationsData = await reservationController.getReservationsByBuyer(ownerId!);
            setPages(Math.ceil(reservationsData.length / 4));
            setReservations(reservationsData);
            setCurrentPage(1);
        };
        fetchReservations();
    }, []);

    const indexOfLastReservation = currentPage * staysPerPage;
    const indexOfFirstReservation = indexOfLastReservation - staysPerPage;
    const currentReservations = reservations.slice(indexOfFirstReservation, indexOfLastReservation);

    const InfoRow = ({ label, value }: { label: string, value: any }) => (
        <Box sx={{ display: 'flex', gap: '5px' }}>
            <Typography sx={{ fontWeight: 'bold' }}>{label}:</Typography>
            <Typography>{value}</Typography>
        </Box>
    );

    const renderStayReservation = (reservation: any) => (
        <Box key={reservation.id} sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', color: colors.textReverse, padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '15px' }}>
                <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{reservation.location}</Typography>
                    <Box sx={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                        <InfoRow label="Doba pobytu" value={`${reservation.dateFrom} - ${reservation.dateTo}`} />
                        <InfoRow label="Počet osob" value={reservation.numberOfPeople} />
                        <InfoRow label="Typ rezervace" value="Ubytování" />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button text="Ohodnotit" path={`/stayOfferDetail?id=${reservation.stayOffer}`} />
            </Box>
        </Box>
    );

    const renderExperienceReservation = (reservation: any) => (
        <Box key={reservation.id} sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', color: colors.textReverse, padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '15px' }}>
                <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', maxWidth: '200px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{reservation.activityName}</Typography>
                    <Box sx={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                        <InfoRow label="Datum zážitku" value={reservation.date} />
                        <InfoRow label="Počet osob" value={reservation.numberOfPeople} />
                        <InfoRow label="Typ rezervace" value="Zážitek" />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button text="Ohodnotit" path={`/experienceOfferDetail?id=${reservation.experienceOffer}`} />
            </Box>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Historie rezervací</Typography>
            <Box sx={{
                backgroundColor: colors.primary, borderRadius: '20px', padding: '20px',
                width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF',
                display: 'flex', flexDirection: 'column', gap: '20px'
            }}>
                {currentReservations.map(reservation =>
                    reservation.type === 'stay'
                        ? renderStayReservation(reservation)
                        : renderExperienceReservation(reservation)
                )}
                <Pagination
                    sx={{ '& .MuiPaginationItem-root': { color: colors.text }, alignSelf: 'flex-end' }}
                    count={pages}
                    page={currentPage}
                    onChange={(_, value) => setCurrentPage(value)}
                />
            </Box>
        </Box>
    );
}

export default ReservationHistory;
