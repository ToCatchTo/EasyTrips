import { collection, getDocs, query, where, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const createReview = async (review: { writer: string, rating: number, content: string, header: string, offer: string, writerName: string }) => {
    await addDoc(collection(db, 'reviews'), {
        writer: review.writer,
        rating: review.rating,
        content: review.content,
        header: review.header,
        offer: review.offer,
        writerName: review.writerName,
    });
}

const getReviewsByWriter = async (writer: string) => {
    const q = query(collection(db, "reviews"), where("writer", "==", writer));
    const querySnapshot = await getDocs(q);
    const reviews: any[] = [];
    querySnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
    });
    return reviews;
}

const getReviewsByOffer = async (offer: string) => {
    const q = query(collection(db, "reviews"), where("offer", "==", offer));
    const querySnapshot = await getDocs(q);
    const reviews: any[] = [];
    querySnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
    });
    return reviews;
}

const deleteReview = async (id: string) => {
    const docRef = doc(db, "reviews", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await deleteDoc(docRef);
    }
}

export default { createReview, getReviewsByWriter, getReviewsByOffer, deleteReview };