import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: colors.primary, padding: "20px 0", textAlign: "center", marginTop: '100px' }}>
            <Typography sx={{ fontSize: "14px", color: colors.text, fontWeight: 'bold' }}>
                © {new Date().getFullYear()} EasyTrips. Všechny práva vyhrazena.
            </Typography>
        </Box>
    );
}

export default Footer;