<script>
  import { getStorageUrl } from "$lib/firebase";
  export let gallery_videos;
  export let gallery_images;
</script>

<div id="Gallery">
  {#each gallery_images ?? [] as image, i}
    {#await getStorageUrl(image) then imageUrl}
      <div class="card image-full">
        <figure>
          <img class="" src={imageUrl} alt="Gallery image {i}" />
        </figure>
      </div>
    {/await}
  {/each}

  {#each gallery_videos ?? [] as image, i}
    {#await getStorageUrl(image) then imageUrl}
      <div class="card">
        <figure>
          <iframe
            width="300"
            height="300"
            src={imageUrl}
            frameborder="0"
            allowfullscreen
            title="Gallery video {i}"
          />
        </figure>
      </div>
    {/await}
  {/each}
</div>

<style>
  #Gallery {
    @apply grid sm:grid-cols-3 lg:grid-cols-4 gap-6;
    @apply mx-auto px-4 py-6;
    @apply w-full max-w-[100ch];
  }

  .card {
    height: auto;
  }

  .image-full:before {
    opacity: 0 !important;
  }
</style>
