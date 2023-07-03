<!-- this is the recipe catalog index -->
<script>
  import CategoryCard from "../../components/CategoryCard.svelte";
  import {
    drinkCategories,
    foodCategories,
  } from "../firestore/CollectionConstants";

  // could use this menu component for mobile
  /* https://daisyui.com/components/menu/ */
  // use this component for pagination
  /* https://daisyui.com/components/pagination/ */
  // use this component text input
  /* https://daisyui.com/components/input/ */
</script>

<div id="index">
  <h1>Recipe Catalog</h1>
  <div>
    <div id="rows">
      <div id="food-row">
        <h2>Food Categories</h2>
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-full max-w-xs search"
        />
        <div class="cards-wrapper">
          {#each foodCategories as foodCategory, i}
            <div class="card-wrapper">
              <CategoryCard category={foodCategory} isFood={true} />
            </div>
          {/each}
        </div>
      </div>
      <div id="drink-row">
        <h2>Drink Categories</h2>
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-full max-w-xs search"
        />
        <div class="cards-wrapper">
          {#each drinkCategories as drinkCategory, i}
            <div class="card-wrapper">
              <CategoryCard category={drinkCategory} isFood={false} />
            </div>
          {/each}
        </div>
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

  .search {
    margin: 15px 0;
  }

  #rows {
    display: flex;
    flex-direction: column;
    margin: 0 10vw;
    min-width: 80vw;
    justify-content: center;
  }
  #food-row {
    min-width: 80vw;
    text-align: center;
  }
  #drink-row {
    min-width: 80vw;
    text-align: center;
  }
  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
  }
</style>
