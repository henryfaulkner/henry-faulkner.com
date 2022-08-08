<script>
  import { getStorageUrl } from "$lib/firebase";
</script>

<div role="banner" class="hero" nav-section="index" data-perspective-group>
  <div class="container" id="index">
    <div class="layout">
      <div class="z-10" data-perspective="header">
        <h1>
          Sup guys, I am <strong
            class="text-primary"
            aria-label="Henry Faulkner">Henry Faulkner.</strong
          >
        </h1>
        <h2>Software Engineer - Web Developer - Homie</h2>
      </div>
      {#await getStorageUrl("images/HeroImage.jpg") then imageUrl}
        <img src={imageUrl} loading="eager" alt="Henry Faulkner hero" />
      {/await}
    </div>
  </div>
</div>
