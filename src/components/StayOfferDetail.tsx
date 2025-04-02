'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Checkbox, FormControlLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import Button from "./Button";
import { NextPage } from "next";

const StayOfferDetail: NextPage = () => {
    return (
        <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: '20vh', color: colors.textReverse, padding: '20px', width: 'calc(60% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', margin: '100px auto 0px auto' }}>

        </Box>
    );
}

export default StayOfferDetail;
