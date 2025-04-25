import { collection, getDocs, query, where, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const createStay = async (stay: { location: string; pricePerNight: number; address: string; phone: string, maxCapacity: number, email: string, petsAllowed: boolean, owner: string }) => {
    await addDoc(collection(db, 'stays'), {
        location: stay.location,
        pricePerNight: stay.pricePerNight,
        address: stay.address,
        phone: stay.phone,
        maxCapacity: stay.maxCapacity,
        email: stay.email,
        petsAllowed: stay.petsAllowed,
        owner: stay.owner
    });
}

const getStay = async (id: string) => {
    const docRef = doc(db, "stays", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            location: docSnap.data().location,
            pricePerNight: docSnap.data().pricePerNight,
            address: docSnap.data().address,
            phone: docSnap.data().phone,
            maxCapacity: docSnap.data().maxCapacity,
            email: docSnap.data().email,
            petsAllowed: docSnap.data().petsAllowed,
            owner: docSnap.data().owner
        };
    } else {
        return null;
    }
}

const editStay = async (id: string, stay: { location: string; pricePerNight: number; address: string; phone: string, maxCapacity: number, email: string, petsAllowed: boolean }) => {
    const docRef = doc(db, "stays", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await updateDoc(docRef, {
            location: stay.location,
            pricePerNight: stay.pricePerNight,
            address: stay.address,
            phone: stay.phone,
            maxCapacity: stay.maxCapacity,
            email: stay.email,
            petsAllowed: stay.petsAllowed
        });
    }
}

const deleteStay = async (id: string) => {
    const docRef = doc(db, "stays", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await deleteDoc(docRef);
    }
}

const getStaysByOwner = async (ownerId: string) => {
    const ownerQuery = query(collection(db, "stays"), where("owner", "==", ownerId));
    const querySnapshot = await getDocs(ownerQuery);
    const stays: any[] = [];
    querySnapshot.forEach((doc) => {
        stays.push({ id: doc.id, ...doc.data() });
    });
    return stays;
}

const getStays = async () => {
    const querySnapshot = await getDocs(collection(db, "stays"));
    const stays: any[] = [];
    querySnapshot.forEach((doc) => {
        stays.push({ id: doc.id, ...doc.data() });
    });
    return stays;
}

export default { createStay, getStay, editStay, deleteStay, getStaysByOwner, getStays }