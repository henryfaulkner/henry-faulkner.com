import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, } from 'firebase/storage';
import { getAnalytics, isSupported } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAGXxeddwfauD2jsLN9sClKlW7gcl76kxY",
    authDomain: "henryfaulkner-xyz.firebaseapp.com",
    projectId: "henryfaulkner-xyz",
    storageBucket: "henryfaulkner-xyz.appspot.com",
    messagingSenderId: "585447646787",
    appId: "1:585447646787:web:b59f311eebc320d87316f6",
};
function createFirebaseApp(firebaseConfig) {
    try {
        return getApp();
    }
    catch {
        return initializeApp(firebaseConfig);
    }
}
const firebaseApp = createFirebaseApp(firebaseConfig);
// Firestore exports
export const firestore = getFirestore(firebaseApp);
export const storageAccount = getStorage(firebaseApp);
export const analytics = isSupported().then(yes => yes ? getAnalytics(firebaseApp) : null);
/// Helper functions
/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        DocumentID: doc.id,
        ...data
    };
}
/**
 * Get Url for item in storage.
 * @param  {string} filePath
 * @returns {string} url
 */
export async function getStorageUrl(filePath) {
    try {
        const imageRef = ref(storageAccount, filePath);
        return await getDownloadURL(imageRef);
    }
    catch (exception) {
        return "";
    }
}
//# sourceMappingURL=firebase.js.map