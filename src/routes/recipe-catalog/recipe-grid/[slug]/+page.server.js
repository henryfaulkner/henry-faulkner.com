// get food recipes by category name
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url, cookies }) {
  let recipeType;
  let isFood;
  switch (url.searchParams.get('type')) {
    case 'food':
      recipeType = 'food-recipe-grid';
      isFood = true;
      break;
    case 'drink':
      recipeType = 'drink-recipe-grid';
      isFood = false;
      break;
  }

  const res = await fetch(`/firestore/endpoints/recipes/${recipeType}/${params.slug}`);
  const recipes = await res.json();
  cookies.set('recentCategory', params.slug, { path: '/' });
  cookies.set('recentType', url.searchParams.get('type'), { path: '/' });

  if (res.ok) {
    return {
      recipes,
      isFood
    };
  } else {
    console.log(`Had an issue fetching recipes, category: ${params.slug}.`);
    return {
      recipes: "broken",
    };
  }
}