<script>
  import { getImageUrl } from "$lib/firebase";
  export let gallery_videos;
  export let gallery_images;
</script>

<div id="Gallery">
  {#each gallery_images as image, i}
    {#await getImageUrl(image) then imageUrl}
      <div class="card image-full">
        <figure>
          <img class="" src={imageUrl} alt="Gallery image {i}" />
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

  img {
    height: inherit;
  }

  .image-full:before {
    opacity: 0 !important;
  }
</style>
