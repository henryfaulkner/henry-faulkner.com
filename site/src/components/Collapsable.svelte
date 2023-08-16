<script>
  import { theme } from "../store/stores";

  export let title;
  let arrow;
  let collapsable;

  function toggleCollasable() {
    if (arrow.classList.contains("closed")) {
      arrow.classList.remove("closed");
      arrow.classList.remove("fa-chevron-right");
      arrow.classList.add("open");
      arrow.classList.add("fa-chevron-down");
    } else if (arrow.classList.contains("open")) {
      arrow.classList.remove("open");
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("closed");
      arrow.classList.add("fa-chevron-right");
    }

    if (collapsable.classList.contains("closed")) {
      collapsable.classList.remove("closed");
      collapsable.classList.remove("h-0");
      collapsable.classList.add("open");
      collapsable.classList.add("translate-y-0");
      collapsable.classList.add("duration-700");
    } else if (collapsable.classList.contains("open")) {
      collapsable.classList.remove("open");
      collapsable.classList.add("closed");
      setTimeout(() => {
        collapsable.classList.add("h-0");
      }, 400);
    }
  }
</script>

<div class="collapsable">
  <div
    class="main-bar cursor-pointer"
    on:click={() => toggleCollasable()}
    on:keydown={() => toggleCollasable()}
  >
    <i
      class="arrow text-primary{`-${$theme}`} fa-solid fa-chevron-right closed toggle-not-tailwind arrow-toggle"
      bind:this={arrow}
    />
    <h3 class="select-none text-primary{`-${$theme}`}">{title}</h3>
    <hr
      class="select-none bg-tertiary{`-${$theme}`} border-hidden rounded-lg h-0.5"
    />
  </div>

  <div class="collased-content">
    <div
      class="toggle-not-tailwind closed h-0 collapse-toggle"
      bind:this={collapsable}
    >
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  .collapsable {
    @media (max-width: 1080px) {
      padding: 0 5%;
    }
  }

  .main-bar {
    display: flex;
    margin-bottom: 15px;

    @media (min-width: 1080px) {
      margin-bottom: 25px;
    }

    .arrow {
      @apply text-xl;
      margin-right: 10px;
    }

    h3 {
      @apply font-manrope font-normal text-2xl;
      white-space: nowrap;
      margin-right: 10px;
    }

    hr {
      width: 100%;
      margin: auto;
      padding-left: 15px;
    }
  }

  .collased-content {
    .closed {
      visibility: hidden;
      opacity: 0;
      filter: blur(5px);
      transform: translateY(-55px);
      transition: all 1.5s;
    }

    @media (prefers-reduced-motion) {
      .closed {
        transition: none;
      }
    }

    @media (max-width: 425px) {
      .closed {
        transform: translateY(-25%);
      }
    }

    .open {
      visibility: visible;
      opacity: 1;
      filter: blur(0);
    }
  }
</style>
