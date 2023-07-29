<!-- slug is the category name -->
<script>
  import { page } from "$app/stores";
  import Breadcrumbs from "../../../../components/Breadcrumbs.svelte";
  import RecipeCard from "../../../../components/RecipeCard.svelte";
  import Footer from "../../../../components/structure/Footer.svelte";
  import Header from "../../../../components/structure/Header.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
  export const isFood = data.isFood;
  export let headerLinks = {};
  export const { slug } = $page.params;
  export let breadcrumbLinks = [
    { href: "../../", name: "Index" },
    { href: "../", name: "Catalog" },
    { href: "", name: `${slug} Recipes` },
  ];

  function input(event) {}
</script>

<div class="index" id="index">
  <div id="header">
    <Header {headerLinks} {breadcrumbLinks} />
  </div>
  <div id="content">
    <div>
      <div id="rows">
        <div class="row">
          <h2>{slug} Recipes</h2>
          <input
            type="text"
            placeholder="Search"
            on:input={input}
            class="input input-bordered input-info w-full max-w-xs search"
          />
          <div class="cards-wrapper">
            {#each data.recipes as recipe, i}
              <div class="card-wrapper">
                <RecipeCard {recipe} {isFood} />
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
  .row {
    min-width: 80vw;
    text-align: center;
  }
  .cards-wrapper {
    @apply grid sm:grid-cols-3 lg:grid-cols-4 gap-3;
  }
</style>
