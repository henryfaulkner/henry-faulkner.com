<!-- slug is drink-recipes.DocumentId -->
<script>
  import RecipeCard from "../../../../components/RecipeCard.svelte";
  import Header from "../../../../components/structure/Header.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
  let headerLinks = {};
  let breadcrumbLinks = [];
</script>

<div id="index">
  <div id="header">
    <Header {headerLinks} {breadcrumbLinks} />
  </div>
  <div id="content">
    <h1>{data.recipe.title}</h1>
    <div id="columns">
      <div id="ingredients-column">
        <h2>Ingredients</h2>
        {#each data.recipe.ingredientsList as ingredients, i}
          <h4>{ingredients.title}</h4>
          <ul>
            {#each ingredients.ingredients as ingredient, i}
              <li>
                <span>{ingredient}</span>
              </li>
            {/each}
          </ul>
        {/each}
      </div>
      <div id="methods-column">
        <h2>Methods</h2>
        {#each data.recipe.methodsList as methods, i}
          <h4>{methods.title}</h4>
          <ol>
            {#each methods.methods as method, i}
              <li>
                <span>{method}</span>
              </li>
            {/each}
          </ol>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #columns {
    display: flex;
    width: 70%;
    margin: 0 10%;
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
  h6 {
    font-weight: bold;
  }
</style>
