'use client';
import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button, Link, minor, Checkbox } from "@mui/material";
import experienceController from "../../backend/experienceController";
import { useState } from "react";
import userController from "../../backend/userController";
import { useRouter } from "next/navigation";
import stayController from "../../backend/stayController";

const CreateStayForm = () => {
    const [form, setForm] = useState({ location: "", address: "", phone: "", email: "", pricePerNight: 1, maxCapacity: 1, petsAllowed: false });
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const validateForm = () => {
        if (!form.location || !form.address || !form.phone || !form.email) {
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

        if (form.pricePerNight <= 0) {
            return "Cena za noc musí být větší než 0.";
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

            await stayController.createStay({
                location: form.location,
                address: form.address,
                phone: form.phone,
                email: form.email,
                maxCapacity: form.maxCapacity,
                pricePerNight: form.pricePerNight,
                petsAllowed: form.petsAllowed,
                owner: ownerId!
            });

            router.push('/profileDetail');
        } catch (error) {
            console.log("Něco se pokazilo při vytváření ubytování:", error);
        }
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Vytvoření nabídky ubytování</Typography>
                <TextField label="Město" type="text" name="location" value={form.location} onChange={handleChange} fullWidth required />
                <TextField label="Adresa" type="text" name="address" value={form.address} onChange={handleChange} fullWidth required />
                <TextField label="Kontaktní telefon" type="text" name="phone" value={form.phone} onChange={handleChange} fullWidth required />
                <TextField label="Kontaktní email" type="text" name="email" value={form.email} onChange={handleChange} fullWidth required />
                <TextField label="Cena za noc" type="number" name="pricePerNight" value={form.pricePerNight} onChange={handleChange} fullWidth required InputProps={{ inputProps: { min: 1 } }} />
                <TextField label="Maximální kapacita" type="number" name="maxCapacity" value={form.maxCapacity} onChange={handleChange} fullWidth required InputLabelProps={{ shrink: true }} InputProps={{ inputProps: { min: 1 } }} />
                <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center' }}>
                    <Checkbox checked={form.petsAllowed} onChange={(e) => setForm({ ...form, petsAllowed: e.target.checked })} />
                    <Typography sx={{ fontSize: '14px', color: colors.textReverse }}>Povolit domácí mazlíčky</Typography>
                </Box>
                {error && <Typography sx={{ color: 'red', textAlign: 'center' }}>{error}</Typography>}
                <Button variant="contained" onClick={handleForm} sx={{ backgroundColor: colors.primary, "&:hover": { backgroundColor: colors.primaryDarker }, padding: "10px", fontSize: "16px" }} fullWidth>Vytvořit</Button>
            </Box>
        </Box>
    );
};

export default CreateStayForm;
