<script>
  import Anchor from "./Anchor.svelte";

  const links = {
    Linkedin: "https://www.linkedin.com/in/henry-faulkner/",
    GitHub: "https://github.com/henryfaulkner",
    Email: "mailto:hfaulkner27@gmail.com",
    "Perficient Blogs": "Placeholder",
    Twitter: "https://twitter.com/HenryFaulknerIO",
  };
</script>

<div class="sectionHeader text-center">
  <h2 id="contact">Contact.</h2>
</div>
<div class="container px-3 sm:px-5 max-w-[100ch]">
  <div
    class="flex flex-col gap-2 xsm:grid lt-sm:grid-cols-2 sm:grid-cols-4 sm:gap-6 justify-center overflow-x-auto"
  >
    {#each Object.entries(links) as [title, link]}
      <Anchor
        className={`px-4 py-2 hover:text-primary hover:bg-primary/30 focus:bg-primary/20`}
        {title}
        href={link}
        external={true}
      />
    {/each}
  </div>
</div>

<style>
  h1,
  h2 {
    @apply text-primary font-lexend font-bold text-2xl;
  }
  .sectionHeader {
    @apply mx-auto px-4 py-6;
    @apply w-full max-w-[75ch];
  }
</style>
