import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Link from "next/link";

const Destinations = () => {
    return (
        <Box sx={{ marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>Nejoblíbenější destinace</Typography>
            <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link href='/stayOfferDetail' style={{ textDecoration: 'none' }}>
                    <Box sx={{ width: '250px', height: '150px', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', position: 'relative', '&:after': { content: '""', position: 'absolute', bottom: '0px', left: '0px', height: '100%', width: '100%', background: 'linear-gradient(transparent 30%, rgba(0, 0, 0, 1) 100%)', borderRadius: '20px' } }}>
                        <Box component="img" src="/romeDestination.jpg" sx={{ width: '250px', height: '150px', position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', overflow: 'hidden' }} />
                        <Typography sx={{ fontSize: '24px', color: colors.text, margin: '0px 0px 10px 15px', zIndex: 1 }}>Řím</Typography>
                    </Box>
                </Link>
                <Link href='stayOfferDetail' style={{ textDecoration: 'none' }}>
                    <Box sx={{ width: '250px', height: '150px', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', position: 'relative', '&:after': { content: '""', position: 'absolute', bottom: '0px', left: '0px', height: '100%', width: '100%', background: 'linear-gradient(transparent 30%, rgba(0, 0, 0, 1) 100%)', borderRadius: '20px' } }}>
                        <Box component="img" src="/parisDestination.jpg" sx={{ width: '250px', height: '150px', position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', overflow: 'hidden' }} />
                        <Typography sx={{ fontSize: '24px', color: colors.text, margin: '0px 0px 10px 15px', zIndex: 1 }}>Paříž</Typography>
                    </Box>
                </Link>
                <Link href='stayOfferDetail' style={{ textDecoration: 'none' }}>
                    <Box sx={{ width: '250px', height: '150px', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', position: 'relative', '&:after': { content: '""', position: 'absolute', bottom: '0px', left: '0px', height: '100%', width: '100%', background: 'linear-gradient(transparent 30%, rgba(0, 0, 0, 1) 100%)', borderRadius: '20px' } }}>
                        <Box component="img" src="/stockholmDestination.jpg" sx={{ width: '250px', height: '150px', position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', overflow: 'hidden' }} />
                        <Typography sx={{ fontSize: '24px', color: colors.text, margin: '0px 0px 10px 15px', zIndex: 1 }}>Stockholm</Typography>
                    </Box>
                </Link>
                <Link href='stayOfferDetail' style={{ textDecoration: 'none' }}>
                    <Box sx={{ width: '250px', height: '150px', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', position: 'relative', '&:after': { content: '""', position: 'absolute', bottom: '0px', left: '0px', height: '100%', width: '100%', background: 'linear-gradient(transparent 30%, rgba(0, 0, 0, 1) 100%)', borderRadius: '20px' } }}>
                        <Box component="img" src="/newYorkDestination.jpg" sx={{ width: '250px', height: '150px', position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', overflow: 'hidden' }} />
                        <Typography sx={{ fontSize: '24px', color: colors.text, margin: '0px 0px 10px 15px', zIndex: 1 }}>New York</Typography>
                    </Box>
                </Link>
                <Link href='stayOfferDetail' style={{ textDecoration: 'none' }}>
                    <Box sx={{ width: '250px', height: '150px', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', position: 'relative', '&:after': { content: '""', position: 'absolute', bottom: '0px', left: '0px', height: '100%', width: '100%', background: 'linear-gradient(transparent 30%, rgba(0, 0, 0, 1) 100%)', borderRadius: '20px' } }}>
                        <Box component="img" src="/tokyoDestination.jpg" sx={{ width: '250px', height: '150px', position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', overflow: 'hidden' }} />
                        <Typography sx={{ fontSize: '24px', color: colors.text, margin: '0px 0px 10px 15px', zIndex: 1 }}>Tokyo</Typography>
                    </Box>
                </Link>
            </Box>
        </Box>
    );
}

export default Destinations;