import { collection, getDocs, query, where, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const createStayReservation = async (reservation: { buyer: string, stayOffer: string, dateFrom: string, dateTo: string, type: string, location: string, numberOfPeople: number }) => {
    await addDoc(collection(db, 'reservations'), {
        buyer: reservation.buyer,
        stayOffer: reservation.stayOffer,
        dateFrom: reservation.dateFrom,
        dateTo: reservation.dateTo,
        type: reservation.type,
        location: reservation.location,
        numberOfPeople: reservation.numberOfPeople
    });
}

const createExperienceReservation = async (reservation: { buyer: string, activityName: string, experienceOffer: string, date: string, type: string, location: string, numberOfPeople: number }) => {
    await addDoc(collection(db, 'reservations'), {
        buyer: reservation.buyer,
        activityName: reservation.activityName,
        experienceOffer: reservation.experienceOffer,
        date: reservation.date,
        type: reservation.type,
        location: reservation.location,
        numberOfPeople: reservation.numberOfPeople
    });
}

const getReservationsByBuyer = async (buyer: string) => {
    const q = query(collection(db, "reservations"), where("buyer", "==", buyer));
    const querySnapshot = await getDocs(q);
    const reservations: any[] = [];
    querySnapshot.forEach((doc) => {
        reservations.push({ id: doc.id, ...doc.data() });
    });
    return reservations;
}

const getReservationById = async (id: string) => {
    const docRef = doc(db, "reservations", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log("Rezervace nenalezena!");
        return null;
    }
}

export default { createStayReservation, createExperienceReservation, getReservationsByBuyer, getReservationById };