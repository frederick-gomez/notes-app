import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithRedirect,
	signOut,
} from 'firebase/auth';

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

const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(`${error.code} has ocurred: ${error.message}`);
	}
};

//TODO: check if user is already registered
const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = response.user;
		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
		});
	} catch (error) {
		console.log(`${error.code} has ocurred: ${error.message}`);
	}
};

//TODO: add a notification when completed
const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(`${errorCode} has ocurred: ${errorMessage}`);
	}
};

const signInWithGoogle = async () => {
	try {
		const response = await signInWithRedirect(auth, googleProvider);
		const user = response.user;
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		// The email of the user's account used.
		// const email = error.email;

		console.log(`${errorCode} has ocurred: ${errorMessage}`);
	}
};

const logout = () => {
	signOut(auth);
};

export {
	auth,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
};
export default db;
