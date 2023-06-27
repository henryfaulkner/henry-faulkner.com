import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { firestore, postToJSON } from "../../../../../../lib/firebase";
import * as collectionConstants from "../../../../CollectionConstants";
import Recipe from "../../../../models/Recipe";
//import * as db from '$lib/database';

// slug is the category name
/** @type {import('../models/Recipe').RequestHandler} */
export async function GET({params}) {
    const collectionRef = collection(firestore, collectionConstants.DrinkRecipes);
    const q1 = await query(
        collectionRef,
        where("categories", "array-contains", params.slug.toLowerCase())
    );
    const docs = await getDocs(q1);
    const response: Recipe[] = [];
    docs.forEach((doc) => response.push(new Recipe(postToJSON(doc))));

    return new Response(JSON.stringify(response));
}