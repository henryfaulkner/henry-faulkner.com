<!-- this is the recipe catalog index -->
<script>
  import CategoryCard from "../../components/CategoryCard.svelte";
  import Footer from "../../components/structure/Footer.svelte";
  import Header from "../../components/structure/Header.svelte";
  import {
    drinkCategories,
    foodCategories,
  } from "../firestore/CollectionConstants";

  let headerLinks = {
    Food: "#index",
    Drinks: "#scroll2",
  };

  // could use this menu component for mobile
  /* https://daisyui.com/components/menu/ */
  // use this component for pagination
  /* https://daisyui.com/components/pagination/ */
  // use this component text input
  /* https://daisyui.com/components/input/ */
</script>

<div class="index" id="index">
  <div id="header">
    <Header {headerLinks} />
  </div>

  <div id="content">
    <div>
      <div id="rows">
        <div class="food-row">
          <h2>Food Catalog</h2>
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
        <div class="drink-row" id="scroll2">
          <h2>Drink Catalog</h2>
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

  <Footer />
</div>

<style lang="scss">
  #header {
    display: block;
  }

  .index {
    @apply text-tertiary bg-primaryBg;
    overflow-x: hidden;
    min-height: 100vh;
  }

  #content {
    margin-top: 115px;
  }

  h2 {
    @apply text-primary text-5xl font-semibold tracking-wide;
    margin: 2.5vh 0 1.5vh;
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
  .food-row {
    min-width: 80vw;
    text-align: center;
  }
  .drink-row {
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
