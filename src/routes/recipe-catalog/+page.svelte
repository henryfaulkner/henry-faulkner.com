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
