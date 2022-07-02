<script>
</script>

<div class="header-container">
  <div class="name-container">
    <p class="name-text">MY NAME</p>
  </div>
  <div class="not-name-cont">
    <p class="about">About</p>
    <p class="contact-info">Contact Me</p>
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
  }

  p {
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
