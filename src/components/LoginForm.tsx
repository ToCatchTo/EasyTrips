import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography, Button, Link } from "@mui/material";

const LoginForm = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <Box sx={{ width: "400px", padding: "30px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Přihlášení</Typography>
                <TextField label="E-mail" type="email" fullWidth />
                <TextField label="Heslo" type="password" fullWidth />
                <Link href="/register" sx={{ alignSelf: "flex-end", fontSize: "14px", color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Nemáte ještě účet?</Link>
                <Button variant="contained" sx={{ backgroundColor: colors.primary, "&:hover": { backgroundColor: colors.primaryDarker }, padding: "10px", fontSize: "16px" }} fullWidth>Přihlásit se</Button>
            </Box>
        </Box>
    );
};

export default LoginForm;
