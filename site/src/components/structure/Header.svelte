<script context="module">
  import { onDestroy } from "svelte";
  import { theme } from "../../store/stores";
  import Anchor from "../Anchor.svelte";

  export function scrollIntoView(target) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<script>
  import Breadcrumbs from "../Breadcrumbs.svelte";
  import ThemeSwap from "../ThemeSwap.svelte";

  export let headerLinks;
  export let breadcrumbLinks;

  const interval = setInterval(function () {
    //console.log("$theme, ", $theme);
  }, 5000);

  onDestroy(() => clearInterval(interval));

  // Add DaisyUI Drawer
  /* https://daisyui.com/components/drawer/ */
</script>

<nav class="z-20 w-screen backdrop-blur-sm">
  {#if Object.keys(headerLinks).length > 0}
    <div
      id="header"
      class="header-container bg-primaryBg{`-${$theme}`} lg:bg-primaryBg{`-${$theme}`}
        {breadcrumbLinks.length > 0 ? 'pb-8' : ''}"
    >
      <a title="Header Name link" href="/" class="name-container">
        <p class="name-text">Henry Faulkner</p>
      </a>
      <div class="not-name-cont">
        {#each Object.entries(headerLinks) as [title, link]}
          <Anchor
            {title}
            href={link}
            className={title}
            external={false}
            color={`text-primary-${$theme}`}
            on:click={(event) => {
              event.preventDefault();
              scrollIntoView(event.target);
            }}
          />
        {/each}
      </div>

      <div class="lt-xsm:mr-6 lt-md:mr-12 mr-12 theme-swap">
        <ThemeSwap />
      </div>
    </div>
    <div id="breadcrumbs" class="absolute">
      <Breadcrumbs links={breadcrumbLinks} />
    </div>
  {/if}
  {#if Object.keys(headerLinks).length === 0}
    <div
      id="breadcrumbs"
      class="absolute pl-4 pt-2 bg-primaryBg{`-${$theme}`} lg:bg-primaryBg{`-${$theme}`}/70 w-full"
    >
      <Breadcrumbs links={breadcrumbLinks} />
    </div>
    <div class="absolute right-8 top-3">
      <ThemeSwap />
    </div>
  {/if}
</nav>

<style type="text/scss">
  #header {
    display: flex;
  }

  @media (min-width: 1080px) {
    nav {
      @apply fixed;
    }
  }

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .header-container + #breadcrumbs {
    @apply left-4 top-20;
  }

  .not-name-cont {
    display: flex;
    @apply lt-sm:flex-col lt-sm:ml-6 lt-xsm:ml-0 xsm:mr-4 md:flex-row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-grow: 1;

    @media (max-width: 1080px) {
      padding-top: 15px;
      flex-direction: row;
      height: 40px;
      align-items: center;
    }
  }

  .anchor {
    @apply text-primary text-base font-bold m-3;
    text-align: center;
  }

  .name-container {
    padding: 10px 0 10px 10px;
    @apply lt-xsm:pr-1 lt-xsm:w-3/4;

    @media (max-width: 1080px) {
      display: none;
    }
  }
  .name-text {
    font-size: 3em;
    background: linear-gradient(to bottom, rgb(165, 1, 165), rgb(242, 71, 14));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .theme-swap {
    @media (max-width: 1080px) {
      margin-top: 1rem;
    }
  }
</style>
