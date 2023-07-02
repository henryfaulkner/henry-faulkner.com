<script>
  export let recipe;
  export let isFood;
</script>

<div class="card" style="--imageUrl: url('{recipe.imageUrl}');">
  <a
    title="Category Card link"
    href={isFood
      ? `/recipe-catalog/food-recipe/${recipe.DocumentID}`
      : `/recipe-catalog/drink-recipe/${recipe.DocumentID}`}
    class="anchor"
  >
    <div class="card-content">
      <div class="base">
        <p>{recipe.title}</p>
      </div>
    </div>
  </a>
</div>

<style>
  .card {
    color: hsl(var(--er));
    font-weight: bold;
    transition: opacity 1s ease;

    padding: 15px 15px;
    margin: 20px;
    position: relative;
    min-height: 300px;
    overflow: hidden;
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
  }

  .card:hover::before {
    opacity: 30%;
  }

  .anchor {
    position: absolute;
    bottom: 0px;
    /* border: red 1px solid; */
    padding-right: 10px;
  }

  .card-content {
    position: relative;
    z-index: 10;
    margin-top: 100%;
  }

  .card:hover .card-content {
    animation-name: up;
    animation-duration: 1s;
  }

  @keyframes up {
    0% {
      bottom: -40px;
    }
    100% {
      bottom: 0px;
    }
  }

  .base {
    @apply text-primary;
    font-weight: bold;
  }
</style>
