import { collection, getDoc, doc } from "firebase/firestore";
import { firestore, postToJSON } from "../../../../../../lib/firebase";
import * as collectionConstants from "../../../../CollectionConstants";
import Recipe from "../../../../models/Recipe";
//import * as db from '$lib/database';
 
/** @type {import('../models/Recipe').RequestHandler} */
export async function POST({params}) {
    const collectionRef = collection(firestore, collectionConstants.DrinkRecipes);
    const docRef = doc(collectionRef, params.slug);
    const docObj = await getDoc(docRef);
    const response = new Recipe(postToJSON(docObj));

    return new Response(JSON.stringify(response));
}