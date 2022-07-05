<script context="module">
  import { getImageUrl } from "$lib/firebase";
  export async function load({ fetch }) {
    const res = await fetch("/firestore/endpoints/projects.json");
    const projects = await res.json();

    if (res.ok) {
      return {
        props: {
          projects,
        },
      };
    } else {
      console.log("Had an issue fetching projects.");
      return {
        props: {
          projects: "broken",
        },
      };
    }
  }
</script>

<script>
  import ProjectCard from "../components/ProjectCard.svelte";
  export let projects;
  import Header from "../components/structure/Header.svelte";
</script>

<Header />
<div id="projects">
  {#each projects as project, i}
    {#await getImageUrl(project.featured_image) then imageUrl}
      <ProjectCard {project} {imageUrl} />
    {/await}
  {/each}
</div>

<style>
  #projects {
    height: auto;
    min-height: 800px;
    background-color: black;
    @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
</style>
