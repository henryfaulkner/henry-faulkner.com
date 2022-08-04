<script>
  export let title;
</script>

<div class="TitleDescription">
  <h3>{title}</h3>
  <slot name="p-tag" />
</div>

<style>
  .TitleDescription {
    @apply mx-auto px-6 md:px-12 lg:px-[20%] py-6;
  }

  h3 {
    @apply mt-0;
    @apply text-primary font-manrope font-normal text-2xl;
    @apply mb-6;
  }

  p {
    @apply lt-xsm:text-base lt-xsm:leading-relaxed;
    @apply text-base;
    @apply mb-24;
  }
</style>
