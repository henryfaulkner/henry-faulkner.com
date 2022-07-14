<script context="module">
  import { getStorageUrl } from "$lib/firebase";
  export async function load({ fetch }) {
    const res = await fetch("/firestore/endpoints/projects.json");
    const projects = await res.json();

    if (res.ok) {
      return {
        props: {
          projects,
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
  import Footer from "../components/structure/Footer.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  export let projects;
  import Header from "../components/structure/Header.svelte";
  import TitleDescription from "../components/TitleDescription.svelte";
  import Contact from "../components/Contact.svelte";
  import Anchor from "../components/Anchor.svelte";

  let headerLinks = {
    About: "#about",
    Projects: "#projectShowcase",
    Contact: "#contact",
  };
</script>

<div id="index">
  <Header {headerLinks} />

  <div id="content" class="lg:px-44">
    <div id="about">
      <TitleDescription title="About">
        <p slot="p-tag">
          Hi, I'm Henry Faulkner. I'm a Web Developer and Software Engineer. I
          have a Bachelor of Science in Computer Science from the
          <Anchor
            title="University of Georgia"
            href="https://www.uga.edu/"
            className="UGA"
            external={true}
          />. \n\n I enjoy working through problems and finding sturdy, lasting
          solutions to solve them. Recently, I have been enjoying digging deeper
          into cloud platforms to create sleek and efficient architecture.
        </p>
      </TitleDescription>
    </div>

    <div id="experience">
      <TitleDescription title="Experience">
        <p slot="p-tag">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint?
        </p>
      </TitleDescription>
    </div>

    <div id="skills">
      <TitleDescription title="Skills">
        <p slot="p-tag">
          Some of the technologies I've work with are C#/.NET, NodeJS, JS/TS,
          React, Firebase, SQL, Azure, Python, SASS, and Tailwind but I like to
          be language agnostic and learn what is neccessary for a task. I have
          experience doing fullstack work but prefer being heads down on the
          backend, working on the underlying system and architecture.
        </p>
      </TitleDescription>
    </div>

    <div id="projectShowcase">
      <h1 id="title">Project Showcase</h1>
      <div id="projects">
        {#each projects as project, i}
          {#await getStorageUrl(project.featured_image) then imageUrl}
            <ProjectCard {project} {imageUrl} />
          {/await}
        {/each}
      </div>
    </div>

    <section id="#contact" class="py-12">
      <Contact />
    </section>
  </div>

  <Footer />
</div>

<style>
  #index {
    color: rgb(209, 213, 219);
  }

  #content {
    background-color: black;
  }

  #title {
    padding: 20px;
    font-size: 32px;
  }
  #title:after {
    content: "";
    width: 100%;
    color: orangered;
    height: 1px;
  }

  #projects {
    height: auto;
    min-height: 800px;
    background-color: black;
    @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
</style>
