import { initializeApp } from 'firebase/app';
import { getFirestore, query, getDocs, doc, collection, where, setDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDApDegHxbZP4Hwf1fa3SJsPSnYwJvNvkk',
	authDomain: 'notes-app-35d7e.firebaseapp.com',
	projectId: 'notes-app-35d7e',
	storageBucket: 'notes-app-35d7e.appspot.com',
	messagingSenderId: '494771973302',
	appId: '1:494771973302:web:4d8cabe6cc0cda77d1ca17',
	measurementId: 'G-QWB6586VRJ',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const response = await signInWithPopup(auth, googleProvider);
		const user = response.user;
		const token = await user.getIdToken();
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			await setDoc(doc(db, 'users', user.uid), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
		return token;
	} catch (error) {
		console.log(error.message);
	}
};

const logout = () => {
	signOut(auth);
};

export { auth, signInWithGoogle, logout };
export default db;
