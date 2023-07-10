<script>
  import Image from "svimg";

  export let category;
  export let isFood;
</script>

<div class="card-container">
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
    @apply text-primary;
    font-weight: bold;

    p {
      @apply italic text-4xl;
    }
  }
</style>
