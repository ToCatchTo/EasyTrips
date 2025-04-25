import { collection, CollectionReference, DocumentData, getDocs, query, where, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from "./firebaseConfig";
import { deleteUser } from "firebase/auth";

const createUser = async (user: { firstName: string; lastName: string; email: string; phone: string, isMiddleman: string }) => {
    await addDoc(collection(db, 'users'), {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        isMiddleman: user.isMiddleman
    });
    console.log('Uživatel byl úspěšně vytvořen');
}

const getUser = async (userEmail: string) => {
    const userQuery = query(collection(db, 'users'), where('email', '==', userEmail));
    const querySnapshot = await getDocs(userQuery);
    const user = querySnapshot.docs.map((doc) => doc.data());
    if (user.length != 0) {
        return { firstName: user[0].firstName, lastName: user[0].lastName, email: user[0].email, phone: user[0].phone, isMiddleman: user[0].isMiddleman };
    } else {
        console.log('Uživatel nenalezen');
        return null;
    }
}

const editUser = async (userEmail: string, userData: { firstName: string; lastName: string; email: string; phone: string }) => {
    const userQuery = query(collection(db, 'users'), where('email', '==', userEmail));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
        const userDocRef = querySnapshot.docs[0].ref;
        await updateDoc(userDocRef, {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
        });
        console.log('Uživatel byl úspěšně upraven');
    } else {
        console.log('Uživatel nenalezen');
    }
};

const eraseUser = async () => {
    if (auth.currentUser) {
        deleteUser(auth.currentUser);
        console.log('Uživatel byl úspěšně smazán');
    } else {
        console.log('Žádný uživatel není aktuálně přihlášen');
    }
};

const getOwnersId = async (userEmail: string) => {
    const userQuery = query(collection(db, 'users'), where('email', '==', userEmail));
    const querySnapshot = await getDocs(userQuery);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].id;
    } else {
        console.log('Uživatel nenalezen');
        return null;
    }
};

export default { createUser, getUser, editUser, eraseUser, getOwnersId }