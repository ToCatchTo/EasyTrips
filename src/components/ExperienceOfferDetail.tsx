import { colors } from "@/variables/globalVariables";
import { Box, TextField, Typography } from "@mui/material";

const ExperienceOfferDetail = () => {
  return (
    <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', margin: '100px auto 0px auto' }}>
      <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(100% - 40px)', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)' }}>
        <Typography>Tokyo</Typography>
        <Box>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Cena za osobu:</Typography>
            <Typography>1000 Kč</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Maximum osob:</Typography>
            <Typography>5</Typography>
          </Box>
          <Box>
            <Box component="img" />
            <Box component="img" />
            <Box component="img" />
            <Box component="img" />
            <Box component="img" />
            <Box component="img" />
          </Box>
          <Box>
            <Box component="img" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperienceOfferDetail;