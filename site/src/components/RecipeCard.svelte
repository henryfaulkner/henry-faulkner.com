<script>
  import { theme } from "../store/stores";

  export let recipe;
  export let isFood;
  recipe.imageUrl = "/recipe-catalog/food/jpegs/high-res-donut.jpg";
</script>

<div class="card" style="--imageUrl: url('{recipe.imageUrl}');">
  <a
    title="Category Card link"
    href={isFood
      ? `/recipe-catalog/recipe/${recipe.DocumentID}?type=food`
      : `/recipe-catalog/recipe/${recipe.DocumentID}?type=drink`}
    class="anchor"
  >
    <div class="card-content">
      <div class="base text-primary-{$theme}">
        <p>{recipe.title}</p>
      </div>
    </div>
  </a>
</div>

<style lang="scss">
  .card-contianer {
    display: flex;
  }

  .card {
    color: hsl(var(--er));
    font-weight: bold;
    transition: opacity 1s ease;

    padding: 15px 15px;
    margin: 20px;
    position: relative;
    min-height: 150px;
    overflow: hidden;
    justify-content: center;
  }

  .card:hover,
  .card:focus {
    outline: auto;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: var(--imageUrl);
    background-size: cover;
    background-position: center center;
    opacity: 65%;
  }

  .card:hover::before {
    opacity: 30%;
  }

  .anchor {
    padding-right: 10px;
  }

  .card-content {
    position: relative;
    z-index: 10;
  }

  .card:hover .card-content {
  }

  .base {
    font-weight: bold;

    p {
      @apply italic text-4xl;
    }
  }
</style>
