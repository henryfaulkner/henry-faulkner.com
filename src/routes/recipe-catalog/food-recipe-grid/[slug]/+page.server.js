// get food recipes by category name
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(`/firestore/endpoints/recipes/food-recipe-grid/${params.slug}`);
  const recipes = await res.json();

  if (res.ok) {
    return {
      recipes,
    };
  } else {
    console.log(`Had an issue fetching recipes, category: ${params.slug}.`);
    return {
      recipes: "broken",
    };
  }
}