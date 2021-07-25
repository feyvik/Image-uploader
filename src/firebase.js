import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: '****************************************',
	authDomain: '************************************',
	projectId: '*************************************',
	storageBucket: '*********************************',
	messagingSenderId: '*****************************',
	appId: '*****************************************',
	measurementId: '********************************',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
