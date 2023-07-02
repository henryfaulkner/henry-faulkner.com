<script>
  export let category;
  export let isFood;
</script>

<a
  class="card"
  title={`${category.name} link`}
  href={isFood
    ? `/recipe-catalog/food-recipe-grid/${category.name}`
    : `/recipe-catalog/drink-recipe-grid/${category.name}`}
  style="--imageUrl: url('{category.imageUrl}');"
>
  <span class="anchor">
    <div class="card-content">
      <div class="base">
        <p>{category.name}</p>
      </div>
    </div>
  </span>
</a>

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
