import { collection, getDoc, doc } from "firebase/firestore";
import { firestore, postToJSON } from "../../../../lib/firebase";
import Project from "../../models/Project";
import * as collectionConstants from "../../CollectionConstants";
//import * as db from '$lib/database';
/** @type {import('../models/Project').RequestHandler} */
export async function get({ params }) {
    const collectionRef = collection(firestore, collectionConstants.Projects);
    const docRef = doc(collectionRef, params.project);
    const docObj = await getDoc(docRef);
    const response = new Project(postToJSON(docObj));
    return { body: response };
}
//# sourceMappingURL=%5Bproject%5D.json.js.map