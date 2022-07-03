<script context="module">
  import { getImageUrl } from "$lib/firebase";
  export async function load({ params, fetch }) {
    const res = await fetch(
      `/firestore/endpoints/projects/${params.project}.json`
    );
    const project = await res.json();

    if (res.ok) {
      return {
        props: {
          project,
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
  export let project;
</script>

<h1>{project.title}</h1>
<h2>{project.short_description}</h2>
