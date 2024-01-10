<script>
  export let linkObjects;
</script>

<div class="dropdown dropdown-end">
  <label for={undefined} tabindex="0" class="btn m-1">Links</label>
  <ul
    tabindex="0"
    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    {#each linkObjects as linkObject, i}
      {#if linkObject.link !== undefined}
        <a title="Card Dropdown link" href={linkObject.link}
          >{linkObject.type}</a
        >
      {/if}
    {/each}
  </ul>
</div>

<style lang="scss">
  .dropdown {
    position: absolute;
    right: 75px;
    z-index: 10;
    height: 2em;
    width: 2em;
  }

  ul {
    right: -50px !important;
    width: fit-content !important;
  }

  a:focus,
  a:hover {
    outline: auto;
  }
</style>
