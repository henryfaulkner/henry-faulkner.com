import { collection, getDocs } from "firebase/firestore";
import { firestore, postToJSON } from "../../../lib/firebase";
import Project from "../models/Project";
import * as collectionConstants from "../CollectionConstants";
//import * as db from '$lib/database';
/** @type {import('../models/Project').RequestHandler} */
export async function get() {
    const data = await getDocs(collection(firestore, collectionConstants.Projects));
    let response = [];
    data.forEach((doc) => {
        response.push(new Project(postToJSON(doc)));
    });
    return { body: response };
}
//# sourceMappingURL=projects.json.js.map