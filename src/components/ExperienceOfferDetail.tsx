"use client";
import { colors } from "@/variables/globalVariables";
import { Box, Pagination, Rating, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from "./Button";
import ReviewForm from "./ReviewForm";
import { useSearchParams } from "next/navigation";
import experienceController from "../../backend/experienceController";
import { useEffect, useState } from "react";
import reviewController from "../../backend/reviewController";

const ExperienceOfferDetail = () => {
  type ExperienceOfferDetailData = {
    location: string;
    activityName: string;
    pricePerPerson: number;
    maxCapacity: number;
    address: string;
    email: string;
    phone: string;
  }
  const params = useSearchParams();
  const experienceId = params.get('id');
  const [offer, setOffer] = useState<ExperienceOfferDetailData | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(4);
  const isLoggedIn = localStorage.getItem('loginState');

  const handleUpdate = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchExperienceOffer = async () => {
      if (!experienceId) return;
      const offerData = await experienceController.getExperience(experienceId);
      const reviewsData = await reviewController.getReviewsByOffer(experienceId);
      setReviews(reviewsData);
      setOffer(offerData);
    };
    fetchExperienceOffer();
  }, [experienceId, refreshTrigger]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Box sx={{ backgroundColor: colors.primary, borderRadius: '20px', height: 'auto', color: colors.textReverse, padding: '20px', width: 'calc(100% - 40px)', boxShadow: '8px 8px 5px #E9E9AF', margin: '100px auto 0px auto' }}>
      <Box sx={{ backgroundColor: colors.componentBackground, borderRadius: '20px', height: 'calc(100% - 40px)', color: colors.textReverse, padding: '30px', width: 'calc(100% - 60px)', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '30px' }}>
            <Box component='img' src='/tokyoDestination.jpg' sx={{ borderRadius: '20px', width: '300px', height: 'auto' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>{offer?.activityName}</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', gridTemplateRows: 'auto auto auto', justifyContent: 'space-between', height: '100%', columnGap: '30px' }}>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Cena za osobu:</Typography>
                  <Typography>{offer?.pricePerPerson} Kč</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Maximum osob:</Typography>
                  <Typography>{offer?.maxCapacity}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Adresa:</Typography>
                  <Typography>{offer?.address}, {offer?.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>E-mail:</Typography>
                  <Typography>{offer?.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Telefonní číslo:</Typography>
                  <Typography>{offer?.phone}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {isLoggedIn === 'true' ? (<Button text="Zarezervovat" path={`/experienceReservation?id=${experienceId}`} />) : (<></>)}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '50px' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>Recenze</Typography>
          {currentReviews.length > 0 ? currentReviews.map((review) => (
            <Box key={review.id} sx={{ display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: colors.background, borderRadius: '20px', padding: '20px', boxShadow: '5px 5px 5px #CCCCCC' }}>
              <AccountCircleRoundedIcon sx={{ fill: colors.text, width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.textReverse }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Rating readOnly name="simple-controlled" value={review.rating} size='large' />
                <Typography sx={{ color: colors.textReverse }}>{review.content}</Typography>
              </Box>
            </Box>
          )) : (
            <Typography sx={{ fontSize: '18px', color: colors.textReverse }}>Zatím žádné recenze</Typography>
          )}
        </Box>

        <Pagination
          sx={{ '& .MuiPaginationItem-root': { color: colors.textReverse }, alignSelf: 'flex-end', marginTop: '30px' }}
          count={Math.ceil(reviews.length / reviewsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />

        {isLoggedIn === 'true' && offer && experienceId && (<ReviewForm header={offer.activityName} offerId={experienceId} updateAction={handleUpdate} />)}
      </Box>
    </Box>
  );
};

export default ExperienceOfferDetail;
