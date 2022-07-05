<script context="module">
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
  import Footer from "../../components/structure/Footer.svelte";
  import Gallery from "../../components/Gallery.svelte";
  import Header from "../../components/structure/Header.svelte";
  import TitleDescription from "../../components/TitleDescription.svelte";

  export let project;
</script>

<Header />
<div id="project">
  <div id="featuredMedia">
    {#if project.featured_video}
      <p>Placeholder for Featured Video implementation.</p>
    {:else if project.featured_image}
      <p>BRRRR</p>
    {/if}
  </div>

  <TitleDescription title={project.title} description={project.description} />
  <Gallery
    gallery_images={project.gallery_images}
    gallery_videos={project.gallery_videos}
  />

  <h1>
    ** NOTE: I'd like to give the ProjectCard the option to go here or directly
    to the project's Live Site.
    <br />I haven't decided on the implementation yet.
    <br />This page will serve as a more in-depth description or presentation of
    a project.
    <br />Ex: A description and gallary for the ML Art project.
  </h1>
</div>
<Footer />

<style>
  #project {
    height: auto;
    min-height: 800px;
    @apply bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900;
  }
</style>
