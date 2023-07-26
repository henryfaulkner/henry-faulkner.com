// get drink recipe by DocumentId
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, cookies, url }) {
  let recipeType;
  switch (url.searchParams.get('type')) {
    case 'food':
      recipeType = 'food-recipe';
      break;
    case 'drink':
      recipeType = 'drink-recipe';
      break;
  }

  const res = await fetch(`/firestore/endpoints/recipes/${recipeType}/${params.slug}`);
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