import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button, Link } from "@mui/material";

const RegisterForm = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Registrace</Typography>
                <TextField label="Jméno" type="text" fullWidth />
                <TextField label="Příjmení" type="text" fullWidth />
                <TextField label="E-mail" type="email" fullWidth />
                <TextField label="Telefoní číslo" type="tel" fullWidth />
                <TextField label="Heslo" type="password" fullWidth />
                <Link href="/login" sx={{ alignSelf: "flex-end", fontSize: "14px", color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Máte ještě účet?</Link>
                <Button variant="contained" sx={{ backgroundColor: colors.primary, "&:hover": { backgroundColor: colors.primaryDarker }, padding: "10px", fontSize: "16px" }} fullWidth>Vytvořit účet</Button>
            </Box>
        </Box>
    );
};

export default RegisterForm;
