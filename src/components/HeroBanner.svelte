<script>
  import { getStorageUrl } from "$lib/firebase";
  import { RunScript } from "../scripts/index.js";
  import { onMount } from "svelte";
  import Anchor from "./Anchor.svelte";
  import Icon from "@iconify/svelte";
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
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<div
  role="banner"
  class="hero h-screen"
  nav-section="index"
  data-perspective-group
>
  <div class="container" id="index">
    <div class="layout relative">
      <figure class="z-0 absolute top-1/4 right-4 lt-md:hidden">
        <img
          src="HeroHeadshot.png"
          width="400px"
          height="275px"
          loading="eager"
          alt="Henry Faulkner hero"
          class="heroImage"
          data-perspective="image"
        />
      </figure>
      <div class="z-10 relative" data-perspective="header">
        <h1
          class="text-6xl mb-3"
          style="color: white; -webkit-text-stroke: 1px black;"
        >
          I am <strong class="text-primary" aria-label="Henry Faulkner"
            >Henry Faulkner.</strong
          >
        </h1>
        <h2
          class="text-2xl"
          style="color: white; -webkit-text-stroke: 1px black;"
        >
          Software Engineer - Web Developer
        </h2>
      </div>
    </div>
  </div>

  <div class="absolute bottom-20 scroll-container">
    <div
      class="icon-container relative top-4"
      on:click={(event) => {
        event.preventDefault();
        scrollIntoViewHref("#about");
      }}
    >
      <Anchor
        title="Scroll"
        href={"#about"}
        className={"scroll"}
        external={false}
        color={"text-white"}
        on:click={(event) => {
          event.preventDefault();
          scrollIntoView(event.target);
        }}
      />
      <Icon class="w-8" icon="fluent:chevron-down-24-filled" />
    </div>
  </div>
</div>

<style>
  .hero {
    background-color: black;
  }

  .heroImage {
    border-radius: 8%;
  }

  .scroll-container {
    left: 42%;
  }

  .icon-container {
    @apply mx-3 text-white h-16 w-16;
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
