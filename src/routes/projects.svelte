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

{#each projects as project, i}
  <ProjectCard {project} />
  <br />
{/each}
