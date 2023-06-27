<script>
  export let category;
  export let isFood;
</script>

<div class="card" style="--imageUrl: url('{category.imageUrl}');">
  <a
    title="Category Card link"
    href={isFood
      ? `/recipe-catalog/food-recipe-grid/${category.name}`
      : `/recipe-catalog/drink-recipe-grid/${category.name}`}
    class="anchor"
  >
    <div class="card-content">
      <div class="base">
        <p>{category.name}</p>
      </div>
    </div>
  </a>
</div>
