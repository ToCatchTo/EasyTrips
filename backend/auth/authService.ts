import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

// Register
export const registerUser = async (email: string, password: string): Promise<any> => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error: any) {
        switch (error.code) {
            case "auth/email-already-in-use":
                alert("Tento email je už používaný někým jiným.");
                break;
            case "auth/invalid-email":
                alert("Špatně zadaný email. Email musí být v tomto formátu: jan@novotny.cz");
                break;
            case "auth/weak-password":
                alert("Slabé heslo. Vyber si silnější heslo.");
                break;
            case "auth/network-request-failed":
                alert("Chyba v síti. Prosím zkuste to znovu později.");
                break;
            default:
                alert("Nečekaný error :c : " + error.message);
        }
        return false;
    }
};

// Login
export const loginUser = async (email: string, password: string): Promise<any> => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('loginState', JSON.stringify(true));
        localStorage.setItem('currentUserEmail', JSON.stringify(email));
        const emailQuery = query(collection(db, 'users'), where('email', '==', (localStorage.getItem('currentUserEmail') ?? "").slice(1, -1)));
        const querySnapshot = await getDocs(emailQuery);
        const currentUser = querySnapshot.docs.map((doc) => doc.data());
        localStorage.setItem('isMiddleman', JSON.stringify(currentUser[0].isMiddleman));
        return true;
    } catch (error: any) {
        switch (error.code) {
            case "auth/invalid-email":
                alert("Špatně zadaný email. Email musí být v tomto formátu: jan@novotny.cz");
                break;
            case "auth/user-not-found":
                alert("Uživatel nenalezen.");
                break;
            case "auth/wrong-password":
                alert("Nesprávné heslo nebo email. Zkuste zadat znovu.");
                break;
            case "auth/network-request-failed":
                alert("Chyba v síti. Prosím zkuste to znovu později.");
                break;
            default:
                alert("Nečekaný error :c : " + error.message);
        }
        return false;
    }
};

export const logoutUser = async () => {
    try {
        await auth.signOut();
        localStorage.setItem('loginState', JSON.stringify(false));
        localStorage.setItem('isMiddleman', JSON.stringify(false));
        localStorage.setItem('currentUserEmail', JSON.stringify(null));
        return true;
    } catch (error: any) {
        alert("Chyba při odhlašování. Zkuste to znovu později.");
        return false;
    }
}