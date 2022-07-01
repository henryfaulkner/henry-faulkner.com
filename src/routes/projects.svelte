<script context="module">
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
</script>

<div id="projects" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
  {#each projects as project, i}
    <ProjectCard {project} />
  {/each}
</div>

<style>
  #projects {
    border: lightgreen 1px dashed;
    height: 550px;
    background-color: black;
  }
</style>
