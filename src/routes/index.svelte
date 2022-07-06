<script context="module">
  import { getStorageUrl } from "$lib/firebase";
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
  import Footer from "../components/structure/Footer.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  export let projects;
  import Header from "../components/structure/Header.svelte";
</script>

<Header />
<h1 id="title">Project Showcase</h1>
<div id="projects">
  {#each projects as project, i}
    {#await getStorageUrl(project.featured_image) then imageUrl}
      <ProjectCard {project} {imageUrl} />
    {/await}
  {/each}
</div>
<Footer />

<style>
  #title {
    padding: 20px;
    background-color: black;
    font-size: 32px;
  }
  #title:after {
    content: "";
    width: 100%;
    color: orangered;
    height: 1px;
  }

  #projects {
    height: auto;
    min-height: 800px;
    background-color: black;
    @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
</style>
