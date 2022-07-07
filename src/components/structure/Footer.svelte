<footer class="px-4 flex flex-col items-center gap-4 py-5 text-center">
  <span
    class="underline underline-offset-4 max-w-[50ch] mb-10"
    title="This site uses Google Analytics (which adds cookies) to measure the number of users and the countries they are from. I don’t store any of your private identifiable information."
    >This site uses Google Analytics (which adds cookies) to measure the number
    of unique visitors.</span
  >
  <a
    href="#index"
    id="back-to-top"
    on:click={() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }}
  >
    <div class="flex items-center gap-2">
      <!-- <Icon name="fluent:arrow-up-24-filled" /> -->
      Back To Top
    </div>
  </a>
  <span>© 2022 My Name. All rights reserved.</span>
</footer>

<style>
  footer {
    color: rgb(31, 41, 55);
  }
</style>
