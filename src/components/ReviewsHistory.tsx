'use client';
import { colors } from "@/variables/globalVariables";
import { Box, Pagination, Rating, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from "./Button";
import { useState, useEffect } from "react";
import stayController from "../../backend/stayController";
import reviewController from "../../backend/reviewController";
import userController from "../../backend/userController";
import { DeleteForeverRounded } from "@mui/icons-material";

const ReviewsHistory = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [pages, setPages] = useState(0);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const staysPerPage = 4;

    const handleUpdate = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const handleDelete = async (id: string) => {
        await reviewController.deleteReview(id);
        handleUpdate();
    };

    useEffect(() => {
        const fetchReviews = async () => {
            const ownerId = await userController.getOwnersId((localStorage.getItem('currentUserEmail') ?? "").slice(1, -1));
            const reviewsData = await reviewController.getReviewsByWriter(ownerId!);
            setPages(Math.ceil(reviewsData.length / 4));
            setReviews(reviewsData);
            setCurrentPage(1);
        };
        fetchReviews();
    }, [refreshTrigger]);

    const indexOfLastReview = currentPage * staysPerPage;
    const indexOfFirstReview = indexOfLastReview - staysPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '100px' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Historie hodnocení</Typography>
            <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {currentReviews.map(review => (
                    <Box key={review.id} sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: colors.background, borderRadius: '20px', padding: '20px', boxShadow: '5px 5px 5px #CCCCCC' }}>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.textReverse }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{review.header}</Typography>
                                    <Rating readOnly name="simple-controlled" value={review.rating} size='large' />
                                </Box>
                                <Typography sx={{ color: colors.textReverse }}>{review.content}</Typography>
                            </Box>
                        </Box>
                        <Box component='button' onClick={() => handleDelete(review.id)} sx={{ backgroundColor: colors.background, border: 'none', cursor: 'pointer' }}>
                            <DeleteForeverRounded sx={{ width: '30px', height: '30px', fill: 'red' }} />
                        </Box>
                    </Box>
                ))}
                <Pagination sx={{ '& .MuiPaginationItem-root': { color: colors.text }, alignSelf: 'flex-end' }} count={pages} page={currentPage} onChange={(_, value) => setCurrentPage(value)} />
            </Box>
        </Box >
    );
}

export default ReviewsHistory;