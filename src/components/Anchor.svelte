<script>
  export let title;
  export let href;
  export let className;
</script>

<div class={`anchor ${className}`}>
  <a {href} target="_blank" on:click>{title}</a>
  <svg viewBox="0 0 24 24" astro-icon="fluent:arrow-up-right-24-filled">
    <path
      fill="currentColor"
      d="M11 3a1 1 0 1 0 0 2h6.586L3.293 19.293a1 1 0 1 0 1.414 1.414L19 6.414V13a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-9z"
    />
  </svg>
</div>

<style>
  .anchor {
    @apply text-primary;
    text-decoration: 2px solid underline;
    text-underline-offset: 0.2rem;
    display: inline-block;
    cursor: pointer;
  }
  .anchor:hover {
    text-decoration-style: wavy;
    @apply text-primary/70;
  }
  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
  }
</style>
