<script>
  import { getStorageUrl } from "$lib/firebase";
  import { RunScript } from "../../scripts/index.js";
  import { onMount } from "svelte";
  import Anchor from "../Anchor.svelte";
  import Icon from "@iconify/svelte";
  import { theme } from "../../store/stores.js";
  onMount(() => {
    RunScript();
  });
  export function scrollIntoView(target) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
  export function scrollIntoViewHref(href) {
    console.log("href, ", href);
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<div
  role="banner"
  class="hero bg-primaryBg-{$theme}"
  nav-section="index"
  data-perspective-group
>
  <div class="container w-9/12" id="index">
    <div class="layout relative">
      <figure class="z-0 absolute top-1/4 right-4">
        <img
          src="/HeroHeadshot.png"
          width="500px"
          height="350px"
          loading="eager"
          alt="Henry Faulkner hero"
          class="heroImage"
          data-perspective="image"
        />
      </figure>
      <div id="hero-text" class="z-10 relative" data-perspective="header">
        <h1 class="text-7xl mb-3">
          <strong
            class="text-primary{`-${$theme}`}"
            aria-label="Henry Faulkner"
          >
            Henry Faulkner.
          </strong>
        </h1>
        <h2 class="text-3xl text-secondary{`-${$theme}`}">
          Software Engineer - Web Developer
        </h2>
      </div>
    </div>
  </div>

  <div
    class="scroll-container cursor-pointer p-6"
    on:click={(event) => {
      event.preventDefault();
      scrollIntoViewHref("#scroll1");
    }}
  >
    <Icon
      style="height: 50px; width: 50px;"
      icon="fa-chevron-down"
      href={"#scroll1"}
      className={"scroll"}
      external={false}
      color={"text-white text-6xl"}
    />
  </div>
</div>

<style>
  .container {
  }

  @media (max-width: 1080px) {
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .hero {
    height: 100vh;
  }

  @media (max-width: 1080px) {
    .hero {
      height: fit-content;
      padding: 80px 0 60px;
    }

    #hero-text {
      text-align: center;
    }

    figure {
      display: none;
    }
  }

  .heroImage {
    border-radius: 8%;
  }

  @media (min-width: 1081px) {
    .scroll-container {
      left: 42%;
      position: absolute;
      bottom: 5rem;

      webkit-transition: transform 1s ease-in-out;
      -moz-transition: transform 1s ease-in-out;
      transition: transform 1s ease-in-out;
    }

    .scroll-container:hover,
    .scroll-container:focus,
    .scroll-container:focus-visible {
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -o-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
  .icon-container {
    @apply mx-3 text-secondary h-16 w-16;
    @apply rounded-full bg-primary;
    @apply transition ease-in-out duration-200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-container:hover {
    outline: 4px dashed #ffff006b;
    @apply hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500;
  }
</style>
