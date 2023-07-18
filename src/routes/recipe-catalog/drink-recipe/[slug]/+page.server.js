// get drink recipe by DocumentId
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, cookies }) {
    const res = await fetch(`/firestore/endpoints/recipes/drink-recipe/${params.slug}`);
    const recipe = await res.json();
    const recentCategory = cookies.get('recentCategory');

    if (res.ok) {
      return {
        recipe,
        recentCategory
      };
    } else {
      console.log(`Had an issue fetching recipe, documentId: ${params.slug}.`);
      return {
        recipe: "broken",
      };
    }
  }