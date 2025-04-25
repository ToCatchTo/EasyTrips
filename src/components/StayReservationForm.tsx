'use client';
import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import reservationController from "../../backend/reservationController";
import userController from "../../backend/userController";
import { useRouter, useSearchParams } from "next/navigation";
import stayController from "../../backend/stayController";

const StayReservationForm = () => {
    const router = useRouter();
    const params = useSearchParams();
    const stayId = params.get('id');
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [stayPricePerNight, setStayPricePerNight] = useState(1);
    const [maxcapacity, setMaxCapacity] = useState(1);

    useEffect(() => {
        const fetchStayDetails = async () => {
            if (stayId) {
                const offer = await stayController.getStay(stayId);
                setStayPricePerNight(offer!.pricePerNight);
                setMaxCapacity(offer!.maxCapacity);
            }
        };
        fetchStayDetails();
    }, [stayId]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            setTotalPrice(stayPricePerNight * numberOfPeople);
        };

        calculateTotalPrice();
    }, [numberOfPeople, stayPricePerNight]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
        const offer = await stayController.getStay(stayId!);
        await reservationController.createStayReservation({
            buyer: userId!,
            dateFrom: dateFrom.toLocaleDateString().replace(/\s+/g, ''),
            dateTo: dateTo.toLocaleDateString().replace(/\s+/g, ''),
            numberOfPeople: numberOfPeople,
            type: "stay",
            stayOffer: stayId!,
            location: offer!.location,
        });
        router.push('/profileDetail');
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Rezervace ubytování</Typography>
                <TextField
                    label="Datum od"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={dateFrom.toISOString().split('T')[0]}
                    onChange={(e) => setDateFrom(new Date(e.target.value))}
                />
                <TextField
                    label="Datum do"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={dateTo.toISOString().split('T')[0]}
                    onChange={(e) => setDateTo(new Date(e.target.value))}
                />
                <TextField
                    label="Počet osob"
                    type="number"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                    InputProps={{ inputProps: { min: 1, max: maxcapacity } }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Celková cena: </Typography>
                    <Typography>{totalPrice}</Typography>
                    <Typography>Kč</Typography>
                </Box>

                {/* Submit Button */}
                <Button
                    variant="contained"
                    sx={{ backgroundColor: colors.primary, "&:hover": { backgroundColor: colors.primaryDarker }, padding: "10px", fontSize: "16px" }}
                    fullWidth
                    onClick={handleSubmit}
                >
                    Zarezervovat
                </Button>
            </Box>
        </Box>
    );
};

export default StayReservationForm;
