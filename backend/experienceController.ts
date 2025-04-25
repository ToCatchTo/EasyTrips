import { collection, getDocs, query, where, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const createExperience = async (experience: { location: string; activityName: string; pricePerPerson: number; address: string; phone: string, maxCapacity: number, email: string, owner: string }) => {
    await addDoc(collection(db, 'experience'), {
        location: experience.location,
        activityName: experience.activityName,
        pricePerPerson: experience.pricePerPerson,
        address: experience.address,
        phone: experience.phone,
        maxCapacity: experience.maxCapacity,
        email: experience.email,
        owner: experience.owner
    });
}

const getExperience = async (id: string) => {
    const docRef = doc(db, "experience", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            location: docSnap.data().location,
            activityName: docSnap.data().activityName,
            pricePerPerson: docSnap.data().pricePerPerson,
            address: docSnap.data().address,
            phone: docSnap.data().phone,
            maxCapacity: docSnap.data().maxCapacity,
            email: docSnap.data().email,
            owner: docSnap.data().owner
        };
    } else {
        return null;
    }
}

const editExperience = async (id: string, stay: { location: string; activityName: string; pricePerPerson: number; address: string; phone: string, maxCapacity: number, email: string }) => {
    const docRef = doc(db, "experience", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await updateDoc(docRef, {
            location: stay.location,
            activityName: stay.activityName,
            pricePerPerson: stay.pricePerPerson,
            address: stay.address,
            phone: stay.phone,
            maxCapacity: stay.maxCapacity,
            email: stay.email
        });
    }
}

const deleteExperience = async (id: string) => {
    const docRef = doc(db, "experience", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await deleteDoc(docRef);
    }
}

const getExperienceByOwner = async (ownerId: string) => {
    const ownerQuery = query(collection(db, "experience"), where("owner", "==", ownerId));
    const querySnapshot = await getDocs(ownerQuery);
    const experience: any[] = [];
    querySnapshot.forEach((doc) => {
        experience.push({ id: doc.id, ...doc.data() });
    });
    return experience;
}

const getAllExperience = async () => {
    const querySnapshot = await getDocs(collection(db, "experience"));
    const experience: any[] = [];
    querySnapshot.forEach((doc) => {
        experience.push({ id: doc.id, ...doc.data() });
    });
    return experience;
}

export default { createExperience, getExperience, editExperience, deleteExperience, getExperienceByOwner, getAllExperience }