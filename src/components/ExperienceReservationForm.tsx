'use client';
import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import reservationController from "../../backend/reservationController";
import userController from "../../backend/userController";
import { useRouter, useSearchParams } from "next/navigation";
import stayController from "../../backend/stayController";
import experienceController from "../../backend/experienceController";

const ExperienceReservationForm = () => {
    const router = useRouter();
    const params = useSearchParams();
    const experienceId = params.get('id');
    const [date, setDate] = useState(new Date());
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [pricePerPerson, setPricePerPerson] = useState(1);
    const [maxcapacity, setMaxCapacity] = useState(1);

    useEffect(() => {
        const fetchExperienceDetails = async () => {
            if (experienceId) {
                const offer = await experienceController.getExperience(experienceId);
                setPricePerPerson(offer!.pricePerPerson);
                setMaxCapacity(offer!.maxCapacity);
            }
        };
        fetchExperienceDetails();
    }, [experienceId]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            setTotalPrice(pricePerPerson * numberOfPeople);
        };

        calculateTotalPrice();
    }, [numberOfPeople, pricePerPerson]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
        const offer = await experienceController.getExperience(experienceId!);
        await reservationController.createExperienceReservation({
            buyer: userId!,
            activityName: offer!.activityName,
            date: date.toLocaleDateString().replace(/\s+/g, ''),
            numberOfPeople: numberOfPeople,
            type: "experience",
            experienceOffer: experienceId!,
            location: offer!.location,
        });
        router.push('/profileDetail');
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Rezervace zážitku</Typography>
                <TextField
                    label="Datum"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={date.toISOString().split('T')[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
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

export default ExperienceReservationForm;
