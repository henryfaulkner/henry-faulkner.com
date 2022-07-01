<script>
  import Anchor from "./Anchor.svelte";
  import CardDropdown from "./CardDropdown.svelte";
  import { getImageUrl } from "../lib/firebase";
  export let project;

  const linkObjects = [
    {
      type: "Website",
      link: project.liveLink,
    },
    {
      type: "Repository",
      link: project.repoLink,
    },
  ];
</script>

{#await getImageUrl(project.image) then value}
  <div class="card" style="background-image: url({value});">
    <CardDropdown {linkObjects} />
    <br />
    <a href={project.liveLink} class="anchor">
      <div class="card-content">
        <div class="base">
          <p>{project.title}</p>
        </div>
        <div class="full">
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  </div>
{/await}

<style>
  .card {
    color: hsl(var(--er));

    padding: 15px 15px;
    margin: 20px;
  }

  .card:hover,
  .card:focus {
    outline: auto;
  }

  .anchor {
    position: absolute;
    bottom: 0px;
    border: red 1px solid;
  }

  .card-content {
    z-index: 10;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.5s;
  }

  .base {
    font-weight: bold;
    color: rgb(84, 221, 255);
  }
</style>
