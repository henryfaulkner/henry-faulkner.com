<script>
  import { getStorageUrl } from "$lib/firebase";
  import Anchor from "./Anchor.svelte";
  import AnimatingWrapper from "./AnimatingWrapper.svelte";

  async function getLinks() {
    return {
      Linkedin: "https://www.linkedin.com/in/henry-faulkner/",
      GitHub: "https://github.com/henryfaulkner",
      Email: "mailto:hfaulkner27@gmail.com",
      Resume: await getStorageUrl(
        "resumes/Henry Faulkner - Software Engineer Resume (Mid 2023).pdf"
      ),
      Blogs: "https://blogs.perficient.com/author/hfaulkner",
      Twitter: "https://twitter.com/HenryFaulknerIO",
      Instagram: "https://www.instagram.com/henryfaulkner_makes/",
    };
  }
</script>

<div class="sectionHeader text-center">
  <h2 id="contact">Contact.</h2>
</div>
<div class="container px-3 sm:px-5 max-w-[40ch] sm:max-w-[100ch]">
  <div
    class="gap-2 grid lt-sm:grid-cols-2 sm:grid-cols-4 sm:gap-6 items-center justify-center overflow-x-auto"
  >
    {#await getLinks() then links}
      {#each Object.entries(links) as [title, link], i}
        <AnimatingWrapper
          cssClass="hiddenNotTW fastStaggerNotTW"
          style="--order: {i + 1}"
        >
          <Anchor
            className={`items-center justify-center inlineFlex px-4 py-2 hover:text-primary hover:bg-primary/30 focus:bg-primary/20`}
            {title}
            href={link}
            external={true}
            color={"text-primary"}
            slot="animated"
          />
        </AnimatingWrapper>
      {/each}
    {/await}
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
