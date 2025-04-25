'use client';
import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button, Link, minor } from "@mui/material";
import experienceController from "../../backend/experienceController";
import { useState } from "react";
import userController from "../../backend/userController";
import { useRouter } from "next/navigation";

const CreateExperienceForm = () => {
    const [form, setForm] = useState({ activityName: "", location: "", address: "", phone: "", email: "", pricePerPerson: 1, maxCapacity: 1 });
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const validateForm = () => {
        if (!form.activityName || !form.location || !form.address || !form.phone || !form.email) {
            return "Všechna pole musí být vyplněna.";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(form.email)) {
            return "Zadejte platnou e-mailovou adresu.";
        }

        const phoneRegex = /^[0-9]{9,13}$/;
        if (!phoneRegex.test(form.phone)) {
            return "Zadejte platné telefonní číslo.";
        }

        if (form.pricePerPerson <= 0) {
            return "Cena za osobu musí být větší než 0.";
        }
        if (form.maxCapacity <= 0) {
            return "Maximální kapacita musí být větší než 0.";
        }

        return "";
    };

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleForm = async (e: any) => {
        e.preventDefault();
        try {
            const validationError = validateForm();
            if (validationError) {
                setError(validationError);
                return;
            }

            setError("");
            const ownerId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));

            await experienceController.createExperience({
                location: form.location,
                activityName: form.activityName,
                address: form.address,
                phone: form.phone,
                email: form.email,
                pricePerPerson: form.pricePerPerson,
                maxCapacity: form.maxCapacity,
                owner: ownerId!
            });

            router.push('/profileDetail');
        } catch (error) {
            console.log("Něco se pokazilo při vytváření zážitku:", error);
        }
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Vytvoření nabídky zážitku</Typography>
                <TextField label="Název zážitku" type="text" name="activityName" value={form.activityName} onChange={handleChange} fullWidth required />
                <TextField label="Město" type="text" name="location" value={form.location} onChange={handleChange} fullWidth required />
                <TextField label="Adresa" type="text" name="address" value={form.address} onChange={handleChange} fullWidth required />
                <TextField label="Kontaktní telefon" type="text" name="phone" value={form.phone} onChange={handleChange} fullWidth required />
                <TextField label="Kontaktní email" type="text" name="email" value={form.email} onChange={handleChange} fullWidth required />
                <TextField label="Cena za osobu" type="number" name="pricePerPerson" value={form.pricePerPerson} onChange={handleChange} fullWidth required InputProps={{ inputProps: { min: 1 } }} />
                <TextField label="Maximální kapacita" type="number" name="maxCapacity" value={form.maxCapacity} onChange={handleChange} fullWidth required InputLabelProps={{ shrink: true }} InputProps={{ inputProps: { min: 1 } }} />
                {error && <Typography sx={{ color: 'red', textAlign: 'center' }}>{error}</Typography>}
                <Button variant="contained" onClick={handleForm} sx={{ backgroundColor: colors.primary, "&:hover": { backgroundColor: colors.primaryDarker }, padding: "10px", fontSize: "16px" }} fullWidth>Vytvořit</Button>
            </Box>
        </Box>
    );
};

export default CreateExperienceForm;
