<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/firestore/endpoints/projects.json");
    const projects = await res.json();

    if (res.ok) {
      console.log(projects);
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
  export let projects;
</script>

<p>{projects[0].title}</p>
