<script>
  import CardDropdown from "./CardDropdown.svelte";

  export let project;
  export let imageUrl;

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

  let hideDescription = true;
</script>

<div
  class="card"
  style="--imageUrl: url({imageUrl});"
  on:mouseenter={() => {
    hideDescription = false;
  }}
  on:mouseleave={() => {
    hideDescription = true;
  }}
>
  <CardDropdown {linkObjects} />
  <a href={`/projects/${project.DocumentID}`} class="anchor">
    <div class="card-content">
      <div class="base">
        <p>{project.title}</p>
      </div>
      {#if !hideDescription}
        <div class="full">
          <p>{project.short_description}</p>
        </div>
      {/if}
    </div>
  </a>
</div>

<style>
  .card {
    color: hsl(var(--er));
    font-weight: bold;
    transition: opacity 1s ease;

    padding: 15px 15px;
    margin: 20px;
    position: relative;
    min-height: 300px;
  }

  .card:hover,
  .card:focus {
    outline: auto;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: var(--imageUrl);
    background-size: cover;
    background-position: center center;
  }

  .card:hover::before {
    opacity: 30%;
  }

  .anchor {
    position: absolute;
    bottom: 0px;
    /* border: red 1px solid; */
    padding-right: 10px;
  }

  .card-content {
    position: relative;
    z-index: 10;
    margin-top: 100%;
  }

  .card:hover .card-content {
    animation-name: up;
    animation-duration: 1s;
  }

  @keyframes up {
    0% {
      bottom: -40px;
    }
    100% {
      bottom: 0px;
    }
  }

  .base {
    font-weight: bold;
    color: rgb(84, 221, 255);
  }
</style>
