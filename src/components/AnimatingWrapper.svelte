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

  @media (max-width: 768px) {
    .staggerNotTW {
      transition-delay: calc(40ms);
    }

    .fastStaggerNotTW {
      transition-delay: calc(40ms);
    }
  }

  @media (min-width: 768px) {
    .staggerNotTW {
      transition-delay: calc(40ms * (mod(var(--order), 2)));
    }

    .fastStaggerNotTW {
      transition-delay: calc(40ms * (mod(var(--order), 2)));
    }
  }

  @media (min-width: 1080px) {
    .staggerNotTW {
      transition-delay: calc(100ms * var(--order));
    }

    .fastStaggerNotTW {
      transition-delay: calc(20ms * var(--order));
    }
  }
</style>
