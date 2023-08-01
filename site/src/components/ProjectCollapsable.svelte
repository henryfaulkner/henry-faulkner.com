<script>
  import { browser } from "$app/environment";
  export let title;
  let arrow;
  let collapsable;
  let collapsableContent;
  let projects;

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
      collapsableContent.classList.remove("h-0");
      projects.classList.remove("hidden");

      collapsable.classList.add("duration-700");
      collapsable.classList.add("h-fit");
      collapsableContent.classList.add("h-fit");
      collapsable.classList.add("open");
      projects.classList.add("grid");
      if (browser) {
        if (window.innerWidth > 1080) {
          collapsable.classList.add("translate-y-0");
        } else {
          collapsable.classList.add("translate-y-200");
        }
      }
    } else if (collapsable.classList.contains("open")) {
      collapsable.classList.remove("open");
      collapsableContent.classList.remove("h-fit");
      collapsable.classList.add("closed");
      collapsableContent.classList.add("h-0");
      collapsable.classList.remove("h-fit");
      collapsable.classList.add("h-0");

      projects.classList.remove("grid");
      projects.classList.add("hidden");
    }
  }
  let screenSize;
  if (browser) {
    screenSize = window.innerWidth;
  }
</script>

<div class="collapsable">
  <div
    class="main-bar cursor-pointer"
    on:click={() => toggleCollasable()}
    on:keydown={() => toggleCollasable()}
  >
    <h2 id="title" class="select-none">{title}</h2>
    <i
      class="arrow fa-solid
      {!screenSize || screenSize > 780
        ? 'fa-chevron-down open'
        : 'fa-chevron-right closed'}"
      style="align-self: center;"
      bind:this={arrow}
    />
  </div>

  <div class="collased-content" bind:this={collapsableContent}>
    <div
      class={!screenSize || screenSize > 780 ? "open h-fit" : "closed h-0"}
      bind:this={collapsable}
    >
      <div
        id="projects"
        class={!screenSize || screenSize > 780 ? "grid" : "hidden"}
        bind:this={projects}
      >
        <slot />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #title {
    padding: 20px;
    font-size: 32px;
  }
  #title:after {
    content: "";
    width: 100%;
    color: orangered;
    height: 1px;
  }

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
      @apply text-tertiary text-2xl;
      margin-right: 10px;
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

  #projects {
    height: auto;
    @apply sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
</style>
