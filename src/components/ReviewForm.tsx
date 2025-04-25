'use client';
import React, { useState } from 'react';
import { TextField, Box, TextareaAutosize, Rating } from '@mui/material';
import Button from './Button';
import { colors } from '@/variables/globalVariables';
import userController from '../../backend/userController';
import reviewController from '../../backend/reviewController';

type ReviewFormProps = {
    header: string;
    offerId: string;
    updateAction?: () => void;
};

const ReviewForm = ({ header, offerId, updateAction }: ReviewFormProps) => {
    const [review, setReview] = useState('');
    const [stars, setStars] = React.useState<number | null>(1);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userData = await userController.getUser((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
        const writer = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
        await reviewController.createReview({
            writer: writer!,
            rating: stars!,
            content: review,
            header: header,
            offer: offerId,
            writerName: userData?.firstName + ' ' + userData?.lastName
        });
        setStars(1);
        setReview('');
        updateAction && updateAction();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '15px', margin: '0px auto', width: '50%' }}>
            <Rating name="simple-controlled" value={stars} onChange={(event, newValue) => { setStars(newValue); }} size='large' />
            <TextareaAutosize value={review} placeholder="Napište své pocity ze svého zážitku/dovolené..." onChange={(e) => setReview(e.target.value)} minRows={5} style={{ borderRadius: '20px', padding: '20px', border: '1px solid ' + colors.textReverse, backgroundColor: 'white', maxWidth: 'calc(100% - 40px)', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
            <Box component='button' type='submit' sx={{ color: colors.text, fontWeight: 'bold', fontSize: '20px', backgroundColor: colors.secondary, padding: '15px 20px', borderRadius: '10px', '&:hover': { backgroundColor: colors.secondaryDarker }, transition: '0.2s ease-in-out', textWrap: 'nowrap', border: 'none', cursor: 'pointer' }}>ODESLAT</Box>
        </Box>
    );
};

export default ReviewForm;
