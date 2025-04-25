import { colors } from "@/variables/globalVariables";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

interface ButtonProps {
    text: string;
    path: string;
    fontSizeParam?: number;
    bgColor?: string;
    buttonType?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, path, fontSizeParam, bgColor, onClick, buttonType }) => {
    return (
        <Link href={path} style={{ textDecoration: 'none' }} type={buttonType}>
            <Box onClick={onClick} sx={{ color: colors.text, fontWeight: 'bold', fontSize: fontSizeParam ? fontSizeParam + 'px' : '20px', backgroundColor: bgColor ? bgColor : colors.secondary, padding: '15px 20px', borderRadius: '10px', '&:hover': { backgroundColor: colors.secondaryDarker }, transition: '0.2s ease-in-out', textWrap: 'nowrap', textAlign: 'center' }}>
                {text}
            </Box>
        </Link>
    );
}

export default Button;