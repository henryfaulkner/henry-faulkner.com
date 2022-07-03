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

<h1>
  ** NOTE: I'd like to give the ProjectCard the option to go here or directly to
  the project's Live Site.
  <br />I haven't decided on the implementation yet.
  <br />This page will serve as a more in-depth description or presentation of a
  project.
  <br />Ex: A description and gallary for the ML Art project.
</h1>
<h1>{project.title}</h1>
<h2>{project.short_description}</h2>
