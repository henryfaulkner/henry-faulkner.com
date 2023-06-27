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
