// get food recipe by DocumentId
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`/firestore/endpoints/recipes/food-recipe/${params.slug}`);
    const recipe = await res.json();

    if (res.ok) {
      return {
        recipe,
      };
    } else {
      console.log(`Had an issue fetching recipe, documentId: ${params.slug}.`);
      return {
        recipe: "broken",
      };
    }
  }