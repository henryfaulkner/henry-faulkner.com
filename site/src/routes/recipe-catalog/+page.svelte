<!-- this is the recipe catalog index -->
<script>
  import CategoryCard from "../../components/CategoryCard.svelte";
  import Footer from "../../components/structure/Footer.svelte";
  import Header from "../../components/structure/Header.svelte";
  import { theme } from "../../store/stores";
  import {
    drinkCategories,
    foodCategories,
  } from "../firestore/CollectionConstants";

  export let headerLinks = {
    Food: "#index",
    Drinks: "#scroll2",
  };
  export const breadcrumbLinks = [
    { href: "../", name: "Index" },
    { href: "", name: "Catalog" },
  ];

  let foodCategoriesCopy = foodCategories;
  let drinkCategoriesCopy = drinkCategories;
  function foodInput(event) {
    foodCategoriesCopy = foodCategories;
    foodCategoriesCopy = foodCategoriesCopy.filter((foodCategory) =>
      foodCategory.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  function drinkInput(event) {
    drinkCategoriesCopy = drinkCategories;
    drinkCategoriesCopy = drinkCategoriesCopy.filter((drinkCategory) =>
      drinkCategory.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
  }

  // could use this menu component for mobile
  /* https://daisyui.com/components/menu/ */
  // use this component for pagination
  /* https://daisyui.com/components/pagination/ */
  // use this component text input
  /* https://daisyui.com/components/input/ */
</script>

<div class="index bg-primaryBg{`-${$theme}`}" id="index">
  <div id="header">
    <Header {headerLinks} {breadcrumbLinks} />
  </div>

  <div id="content">
    <div>
      <div id="rows">
        <div class="food-row">
          <h2 class="text-primary-{$theme}">Food Catalog</h2>
          <input
            type="text"
            placeholder="Search"
            on:input={foodInput}
            class="input input-bordered input-info w-full max-w-xs search"
          />
          <div class="cards-wrapper">
            {#each foodCategoriesCopy as foodCategory, i}
              <div class="card-wrapper">
                <CategoryCard category={foodCategory} isFood={true} />
              </div>
            {/each}
          </div>
        </div>
        <div class="drink-row" id="scroll2">
          <h2 class="text-primary-{$theme}">Drink Catalog</h2>
          <input
            type="text"
            placeholder="Search"
            on:input={drinkInput}
            class="input input-bordered input-info w-full max-w-xs search"
          />
          <div class="cards-wrapper">
            {#each drinkCategoriesCopy as drinkCategory, i}
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
  h2 {
    @apply text-5xl font-semibold tracking-wide;
    margin: 2.5vh 0 0;
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
    padding-top: 80px;
  }
  .cards-wrapper {
    @apply grid sm:grid-cols-3 lg:grid-cols-4 gap-3;
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
