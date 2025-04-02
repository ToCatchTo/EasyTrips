import { colors } from "@/variables/globalVariables";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

interface ButtonProps {
    text: string;
    path: string;
    fontSizeParam?: number;
    bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, path, fontSizeParam, bgColor }) => {
    return (
        <Link href={path} style={{ textDecoration: 'none' }}>
            <Box sx={{ color: colors.text, fontWeight: 'bold', fontSize: fontSizeParam ? fontSizeParam + 'px' : '20px', backgroundColor: bgColor ? bgColor : colors.secondary, padding: '15px 20px', borderRadius: '10px', '&:hover': { backgroundColor: colors.secondaryDarker }, transition: '0.2s ease-in-out', textWrap: 'nowrap' }}>
                {text}
            </Box>
        </Link>
    );
}

export default Button;