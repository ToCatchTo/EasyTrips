'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Checkbox, FormControlLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import Button from "./Button";

const StaysFilter = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');

    return (
        <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(60% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', margin: '100px auto 0px auto' }}>
            <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(100% - 40px)', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', gap: '20px' }}>
                    {/* Price Fields */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                        <TextField label="Cena od" type="number" variant="outlined" />
                        <TextField label="do" type="number" variant="outlined" />
                    </Box>

                    {/* Country & City Selection */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                        <Select value={country} onChange={(e) => setCountry(e.target.value)} displayEmpty>
                            <MenuItem value="" disabled>Stát</MenuItem>
                            <MenuItem value="Tokyo">Tokyo</MenuItem>
                            <MenuItem value="Prague">Prague</MenuItem>
                            <MenuItem value="Stockholm">Stockholm</MenuItem>
                        </Select>
                        <Select value={city} onChange={(e) => setCity(e.target.value)} displayEmpty>
                            <MenuItem value="" disabled>Město</MenuItem>
                            <MenuItem value="Tokyo">Tokyo</MenuItem>
                            <MenuItem value="Prague">Prague</MenuItem>
                            <MenuItem value="Stockholm">Stockholm</MenuItem>
                        </Select>
                    </Box>

                    {/* Checkboxes */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                        <TextField label="Počet osob" type="number" variant="outlined" />
                        <FormControlLabel control={<Checkbox />} label="Mazlíčci" />
                        <Box sx={{ color: colors.text, fontWeight: 'bold', fontSize: '20px', backgroundColor: colors.secondary, padding: '15px 20px', borderRadius: '10px', '&:hover': { backgroundColor: colors.secondaryDarker }, transition: '0.2s ease-in-out', textWrap: 'nowrap', cursor: 'pointer' }}>
                            Filtrovat
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default StaysFilter;