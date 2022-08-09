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
  export function scrollIntoView(target) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
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
  import HeroBanner from "../components/HeroBanner.svelte";
  //import LibLoader from "../components/LibLoader.svelte";

  let headerLinks = {
    About: "#about",
    Projects: "#projectShowcase",
    Contact: "#contact",
  };
</script>

<div id="index">
  <Header {headerLinks} />
  <HeroBanner />

  <div id="content" class="lg:px-44">
    <div id="about" class="scrollSection">
      <div class="about">
        <TitleDescription title="About">
          <p slot="p-tag">
            Hi, I'm Henry Faulkner. I'm a C#/.NET and TypeScript web developer
            and software engineer. I have a Bachelor of Science in Computer
            Science from the
            <Anchor
              title="University of Georgia"
              href="https://www.uga.edu/"
              className="UGA"
              external={true}
              color={"text-primary"}
            />.
            <br /> <br />
            I am passionate about manipulating and making the most of large datasets.
            I enjoy working through problems and finding sturdy, lasting solutions
            to solve them. Recently, I have enjoyed digging deeper into cloud platforms
            to deploy and scale my work.
          </p>
        </TitleDescription>
      </div>

      <div class="about" id="experience">
        <TitleDescription title="Experience">
          <p slot="p-tag">
            I am currently a Technical Consultant at
            <Anchor
              title="Perficient"
              href="https://www.perficient.com/"
              className="Perficient"
              external={true}
              color={"text-primary"}
            />
            where I work on the Sitecore team, creating enterprise-scale websites.
            My work there entails building data transfer and custom functionality
            on top of Sitecore's proprietary CMS framework. That framework from the
            backend is C#/.NET MVC, communicating with a SQL database. I have also
            needed to work with Azure, REST API, and React during my tenure. I have
            been staffed at Perficient since February 2021.
            <br /> <br />
            My personnel project experience is more varied. You can find out more
            about those in the
            <Anchor
              title={"Projects section"}
              href={"#projectShowcase"}
              className={"Projects"}
              external={false}
              color={"text-primary"}
              on:click={(event) => {
                event.preventDefault();
                scrollIntoView(event.target);
              }}
            />
            below. You can also find my resume linked in the
            <Anchor
              title={"Contact section"}
              href={"#contact"}
              className={"Contact"}
              external={false}
              color={"text-primary"}
              on:click={(event) => {
                event.preventDefault();
                scrollIntoView(event.target);
              }}
            />
            below.
          </p>
        </TitleDescription>
      </div>

      <div class="about" id="skills">
        <TitleDescription title="Skills">
          <p slot="p-tag">
            I am a fullstack software developer. I have experience creating
            custom functionality, using large datasets and integrating
            seamlessly into an existing solution. I have experience doing
            fullstack web development using modern JavaScript frameworks like
            React/NextJS and Svelte/SvelteKit but prefer being heads down on the
            backend, working on the underlying system and architecture.
            <br /> <br />
            Some of the technologies I've work with are C#/.NET, NodeJS, JS/TS, React/NextJS,
            Svelte/SvelteKit, No-SQL/SQL, Firebase, Azure, Python, SASS, and Tailwind
            but tend to be language agnostic and learn what is neccessary for a task.
          </p>
        </TitleDescription>
      </div>

      <div id="projectShowcase" class="scrollSection">
        <h1 id="title">Project Showcase</h1>
        <div id="projects">
          {#each projects as project, i}
            {#await getStorageUrl(project.featured_image) then imageUrl}
              <ProjectCard {project} {imageUrl} />
            {/await}
          {/each}
        </div>
      </div>
    </div>

    <section id="#contact" class="py-12 scrollSection">
      <Contact />
    </section>
  </div>

  <Footer />
</div>

<style>
  #index {
    color: rgb(209, 213, 219);
    overflow-x: hidden;
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
    background-color: black;
    @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }

  .scrollSection {
    @apply lt-xsm:scroll-mt-36 xsm:scroll-mt-24;
  }
</style>
