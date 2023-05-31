<script>
  import { RunScript } from "../scripts/animating.js";
  import { onMount } from "svelte";
  onMount(() => {
    RunScript();
  });
  export let cssClass;
  let stylish = $$props.style;
</script>

<div class={cssClass} style={stylish}>
  <slot name="animated" />
</div>

<style>
  .hiddenNotTW {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 2s;
  }

  @media (prefers-reduced-motion) {
    .hiddenNotTW {
      transition: none;
    }
  }

  .showNotTW {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  .staggerNotTW {
    transition-delay: calc(100ms * var(--order));
  }
</style>
