<script context="module">
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
  export let headerLinks;
</script>

<div id="header" class="header-container">
  <a href="/" class="name-container">
    <p class="name-text">Henry Faulkner</p>
  </a>
  <div class="not-name-cont">
    {#each Object.entries(headerLinks) as [title, link]}
      <Anchor
        {title}
        href={link}
        className={title}
        external={false}
        on:click={(event) => {
          event.preventDefault();
          scrollIntoView(event.target);
        }}
      />
    {/each}
  </div>
</div>

<style type="text/scss">
  .header-container {
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .not-name-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  .anchor {
    @apply text-primary text-base font-bold m-3;
    text-align: center;
  }

  .name-container {
    padding: 10px;
  }
  .name-text {
    font-size: 3em;
    background: linear-gradient(to bottom, rgb(165, 1, 165), rgb(242, 71, 14));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
