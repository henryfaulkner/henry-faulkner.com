<!-- slug is category -->
<script>
  import RecipeCard from "../../../../components/RecipeCard.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div id="index">
  <h1>Drink Recipes</h1>
  <div id="recipe-grid">
    {#each data.recipes as recipe, i}
      <RecipeCard {recipe} isFood={false} />
    {/each}
  </div>
</div>

<style lang="scss">
  #index {
    @apply text-tertiary bg-primaryBg;
    overflow-x: hidden;
    min-height: 100vh;
  }

  #recipe-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px; /* Adjust the gap between grid items as needed */
  }
</style>
