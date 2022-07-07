<script context="module">
  export function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<div class="header-container">
  <a href="/" class="name-container">
    <p class="name-text">MY NAME</p>
  </a>
  <div class="not-name-cont">
    <a href="#about" class="about" on:click|preventDefault={scrollIntoView}
      >About</a
    >
    <a
      href="#projectShowcase"
      class="projects"
      on:click|preventDefault={scrollIntoView}>Projects</a
    >
    <a
      href="#contact"
      class="contact-info"
      on:click|preventDefault={scrollIntoView}>Contact Me</a
    >
  </div>
</div>

<style type="text/scss">
  .header-container {
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .not-name-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  a {
    color: rgb(59, 131, 246);
    font-size: 1em;
    font-weight: 700;
    margin: 10px;
    text-align: center;
  }

  .name-container {
    padding: 10px;
  }
  .name-text {
    font-size: 3em;
    background: linear-gradient(to bottom, rgb(165, 1, 165), rgb(242, 71, 14));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
