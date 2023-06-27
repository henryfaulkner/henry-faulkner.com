<!-- slug is drink-recipes.DocumentId -->
<script>
  import RecipeCard from "../../../../components/RecipeCard.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div id="index">
  <h1>{data.recipe.title}</h1>
  <div id="columns">
    <div id="ingredients-column">
      <h2>Ingredients</h2>
      {#each data.recipe.ingredientsList as ingredients, i}
        <h4>{ingredients.title}</h4>
        {#each ingredients.ingredients as ingredient, i}
          <p>{ingredient}</p>
        {/each}
      {/each}
    </div>
    <div id="methods-column">
      <h2>Methods</h2>
      {#each data.recipe.methodsList as methods, i}
        <h4>{methods.title}</h4>
        {#each methods.methods as method, i}
          <p>{method}</p>
        {/each}
      {/each}
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
  }
  #methods-column {
    margin-left: 5%;
  }
</style>
