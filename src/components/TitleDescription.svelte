<script>
  export let title;
  export let description;
</script>

<div class="TitleDescription">
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .TitleDescription {
    @apply mx-auto px-4 py-6;
    @apply w-full max-w-[75ch];
  }

  h3 {
    @apply mt-0;
    @apply font-manrope font-normal text-2xl;
    @apply mb-16;
  }

  p {
    @apply lt-xsm:text-base lt-xsm:leading-relaxed;
    @apply text-base;
    @apply mb-24;
  }
</style>
