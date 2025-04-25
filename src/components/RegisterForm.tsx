'use client'
import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button, Link } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../backend/firebaseConfig";
import userController from "../../backend/userController";
import { useRouter } from "next/navigation";
import { registerUser } from "../../backend/auth/authService";
import Checkbox from '@mui/material/Checkbox';

const RegisterForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });
    const router = useRouter();
    const [checked, setChecked] = useState(true);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        if (await registerUser(form.email, form.password)) {
            userController.createUser({ firstName: form.firstName, lastName: form.lastName, email: form.email, phone: form.phone, isMiddleman: checked ? "true" : "false" });
            router.push("/login");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Registrace</Typography>
                <TextField label="Jméno" type="text" name="firstName" value={form.firstName} onChange={handleChange} fullWidth />
                <TextField label="Příjmení" type="text" name="lastName" value={form.lastName} onChange={handleChange} fullWidth />
                <TextField label="E-mail" type="email" name="email" value={form.email} onChange={handleChange} fullWidth />
                <TextField label="Telefoní číslo" type="tel" name="phone" value={form.phone} onChange={handleChange} fullWidth />
                <TextField label="Heslo" type="password" name="password" value={form.password} onChange={handleChange} fullWidth />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox checked={checked} onChange={handleCheckBoxChange} />
                        <Typography sx={{ fontSize: "14px", color: colors.textReverse }}>Jste poskytovatel služeb?</Typography>
                    </Box>
                    <Link href="/login" sx={{ fontSize: "14px", color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Máte už účet?</Link>
                </Box>
                <Button variant="contained" onClick={handleSignUp} sx={{ backgroundColor: colors.primary, "&:hover": { backgroundColor: colors.primaryDarker }, padding: "10px", fontSize: "16px" }} fullWidth>Vytvořit účet</Button>
            </Box>
        </Box>
    );
};

export default RegisterForm;
