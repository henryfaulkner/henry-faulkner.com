<script>
  export let title;
</script>

<div class="TitleDescription">
  <h3>{title}</h3>
  <slot name="p-tag" />
</div>

<style>
  .TitleDescription {
    @apply mx-auto px-12 lg:px-[5%];
  }

  h3 {
    @apply mt-0;
    @apply text-primary font-manrope font-normal text-2xl;
    @apply mb-2;
  }
</style>
