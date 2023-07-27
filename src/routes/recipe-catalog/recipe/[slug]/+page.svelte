<!-- slug is drink-recipes.DocumentId -->
<script>
  import HeroBanner from "../../../../components/HeroBanners/MainHeroBanner.svelte";
  import RecipeHeroBanner from "../../../../components/HeroBanners/RecipeHeroBanner.svelte";
  import RecipeCard from "../../../../components/RecipeCard.svelte";
  import Header from "../../../../components/structure/Header.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
  let headerLinks = {};
  const breadcrumbLinks = [
    { href: "../../", name: "Index" },
    { href: "../", name: "Catalog" },
    {
      href: `../recipe-grid/${data.recentCategory}?type=${data.recentType}`,
      name: `${data.recentCategory} Recipes`,
    },
    { href: "", name: data.recipe.title },
  ];
</script>

<div id="index">
  <div id="header">
    <Header {headerLinks} {breadcrumbLinks} />
  </div>
  <div id="content" style="margin-top: 75px;">
    <RecipeHeroBanner
      imgSrc={data.recipe.featured_image}
      topText={data.recipe.title}
      bottomText={data.recipe.short_description}
    />
    <div id="columns" class="pt-10">
      <div id="ingredients-column">
        <h2 class="mb-6 text-4xl font-normal font-circe tracking-widest">
          Ingredients
        </h2>
        {#each data.recipe.ingredientsList as ingredients, i}
          <h4 class="text-base">{ingredients.title} Ingredients:</h4>
          <ul class="pl-5">
            {#each ingredients.ingredients as ingredient, i}
              <li>
                <span class="text-base">{ingredient}</span>
              </li>
            {/each}
          </ul>
        {/each}
      </div>
      <div id="methods-column">
        <h2
          class="mb-6 text-6xl font-thin font-circe-extra-light tracking-wider"
        >
          Method
        </h2>
        {#each data.recipe.methodsList as methods, i}
          <h4 class="text-base">{methods.title}</h4>
          <ol class="pl-5">
            {#each methods.methods as method, i}
              <li>
                <span class="text-base">{method} Method:</span>
              </li>
            {/each}
          </ol>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #index {
    @apply text-tertiary bg-primaryBg;
    overflow-x: hidden;
    min-height: 100vh;
  }

  #columns {
    display: flex;
    width: 65vw;
    margin: 30px 10vw;
    justify-content: space-between;
  }

  #ingredients-column {
    margin-right: 5%;

    ul {
      list-style-type: disc;
      list-style-position: inside;
    }

    h4 {
      text-decoration: underline;
    }
  }

  #methods-column {
    margin-left: 5%;

    ol {
      list-style-type: decimal;
      list-style-position: inside;
    }

    h4 {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    @apply font-circe;
  }
</style>
