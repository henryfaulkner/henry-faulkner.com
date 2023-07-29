<script>
  import { getStorageUrl } from "$lib/firebase";

  export let imgSrc;
  async function awaitImg(src) {
    return await getStorageUrl(src);
  }

  export let topText;
  export let bottomText;
</script>

<div
  role="banner"
  class="hero-not-tailwind"
  nav-section="index"
  data-perspective-group
>
  <div class="container-not-tailwind" id="index">
    <div class="layout relative">
      {#await awaitImg(imgSrc) then src}
        <figure class="z-0 absolute top-1/4 right-4">
          <img
            {src}
            width="275px"
            loading="eager"
            alt="Henry Faulkner hero"
            class="heroImage"
            data-perspective="image"
          />
        </figure>
      {/await}
      <div id="hero-text" class="z-10 relative" data-perspective="header">
        {#if topText}
          <h1
            class="text-6xl mb-3 text-secondary"
            style="-webkit-text-stroke: 1px black;"
          >
            <strong
              class="text-primary balance text"
              aria-label="Henry Faulkner"
            >
              {topText}
            </strong>
          </h1>
        {/if}
        {#if bottomText}
          <h2
            class="text-2xl balance text"
            style="color: white; -webkit-text-stroke: 1px black;"
          >
            {bottomText}
          </h2>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .container-not-tailwind {
    width: 70vw;
  }

  .hero-not-tailwind {
    display: grid;
    width: 100%;
    justify-content: center;
    background-size: cover;
    background-position: center;
    height: 30vh;
    @apply bg-primaryBg;
  }

  .hero > * {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .balance {
    text-wrap: balance;
  }

  @media (max-width: 1080px) {
    .hero-not-tailwind {
      height: 20vh;
      padding: 0;
    }

    #hero-text {
      text-align: center;
      margin: 0 25px;
    }

    figure {
      display: none;
    }

    .container-not-tailwind {
      width: 100vw;
    }
  }

  @media (min-width: 1081px) {
    .hero-not-tailwind {
      height: 30vh;
    }

    #hero-text {
      top: 10vh;
    }

    .text {
      width: 60%;
    }

    .hero-not-tailwind {
      justify-content: start;
      padding-left: 12%;
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
