<!-- this is the recipe catalog index -->
<script>
  import CategoryCard from "../../components/CategoryCard.svelte";
  import {
    drinkCategories,
    foodCategories,
  } from "../firestore/CollectionConstants";
</script>

<div id="index">
  <h1>Recipe Catalog</h1>
  <div>
    <div id="columns">
      <div id="food-column">
        <h2>Food Categories</h2>
        {#each foodCategories as foodCategory, i}
          <CategoryCard category={foodCategory} isFood={true} />
        {/each}
      </div>
      <div id="drink-column">
        <h2>Drink Categories</h2>
        {#each drinkCategories as drinkCategory, i}
          <CategoryCard category={drinkCategory} isFood={false} />
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    @apply text-primary text-3xl;
    margin: 5vh 0;
  }

  #columns {
    display: flex;
    margin: 0 10vw;
    min-width: 80vw;
  }
  #food-column {
    margin-right: 5vw;
    min-width: 40vw;
    text-align: center;
  }
  #drink-column {
    text-align: center;
    margin-left: 5vw;
    min-width: 40vw;
  }
</style>
