<script>
  export let title;
  let arrowToggle = "closed";
  let collapseToggle = "closed h-0";

  function toggleCollasable() {
    if (collapseToggle === "closed h-0") {
      arrowToggle = "open";
      collapseToggle = "open";
    } else if (collapseToggle === "open") {
      arrowToggle = "closed";
      collapseToggle = "closed";
      setTimeout(() => {
        collapseToggle = "closed h-0";
      }, 500);
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
      class="arrow fa-solid {arrowToggle === 'closed'
        ? 'fa-chevron-right'
        : 'fa-chevron-down'} {arrowToggle} toggle-not-tailwind"
    />
    <h3 class="select-none">{title}</h3>
    <hr class="select-none" />
  </div>

  <div class="collased-content">
    <div class="toggle-not-tailwind {collapseToggle}">
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
    margin-bottom: 25px;

    .arrow {
      @apply text-primary text-xl;
      margin-right: 10px;
    }

    h3 {
      @apply text-primary font-manrope font-normal text-2xl;
      white-space: nowrap;
      margin-right: 10px;
    }

    hr {
      @apply text-tertiary;
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
      transform: translateY(0);
      transition: all 1s;
    }
  }
</style>
