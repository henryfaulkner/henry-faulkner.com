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

  let headerLinks = {
    Index: "#index",
    Experience: "#scroll1",
    Contact: "#scroll3",
  };
</script>

<div id="index" class="scrollSection">
  <div id="header">
    <Header {headerLinks} />
  </div>
  <HeroBanner />

  <div id="content" class="lg:px-44">
    <div class="about">
      <div id="scroll4" class="scrollSection" />
      <TitleDescription title="About">
        <p slot="p-tag" class="p-tag">
          Hi, I'm Henry Faulkner. I live in Atlanta, GA, USA. I have a Bachelor
          of Science in Computer Science from the
          <Anchor
            title="University of Georgia"
            href="https://www.uga.edu/"
            className="UGA"
            external={true}
            color={"text-primary"}
          />. I build quality software and web applications.
        </p>
      </TitleDescription>
    </div>

    <div class="about" id="skills">
      <TitleDescription title="Skills">
        <p slot="p-tag" class="p-tag">
          I am a fullstack web developer and software engineer. I have 3 years
          of professional experience working with .Net (Framework/Core),
          TypeScript, T-SQL, Microsoft Azure services, and SCSS. Thoughout my
          career, I've worked with various frontend frameworks such as: Angular,
          ASP.Net, Next.js and React.
        </p>
      </TitleDescription>
    </div>

    <div class="about" id="experience">
      <div id="scroll1" class="scrollSection" />
      <TitleDescription title="Experience">
        <p slot="p-tag" class="p-tag">
          I currently work as a Software Engineer at
          <Anchor
            title="Now®"
            href="https://nowcorp.com/"
            className="Now"
            external={true}
            color={"text-primary"}
          />. My role at Now is to make major technical upgrades to their
          flagship financial platform, NowAccount. I designed an overhaul to
          NowAccount's Client Onboarding Journey using Adobe XD, which is being
          developed and showcased to potential investors. I am currently working
          on the aforementioned Onboarding Journey, which marks the platform's
          move from MVC (.Net Framework) to REST APIs (.Net Core) and ASP.Net to
          Angular. I am the frontend architect for NowAccount's new Angular
          solution. I played a large role in moving our jobs from running on a
          virtual machine's task scheduler to Azure Functions on Azure's
          serverless platform. I have worked at Now since October 2022.
          <br /> <br />
          I was formerly a Technical Consultant at
          <Anchor
            title="Perficient®"
            href="https://www.perficient.com/"
            className="Perficient"
            external={true}
            color={"text-primary"}
          />
          where I momentarily worked on the Sitecore team, creating enterprise-scale
          websites. I built data transfer using PowerShell and custom functionality
          on top of Sitecore's proprietary CMS framework. I later transitioned to
          Perficient's Custom Development team where I worked as a .NET framework
          and React developer, where I created smaller-scale web applications. During
          my tenure, I have worked with Azure, .Net Framework, React, T-SQL, Sitecore,
          and SCSS. I was staffed at Perficient from February 2021 - October 2022
          and also interned there.
          <br /> <br />
          My personnel project experience is more varied. You can find out more about
          those in the
          <Anchor
            title={"Projects section"}
            href={"#scroll2"}
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
            href={"#scroll3"}
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

    <div id="scroll2" class="scrollSection">
      <h1 id="title">Project Showcase</h1>
      <div id="projects">
        {#each projects as project, i}
          {#await getStorageUrl(project.featured_image) then imageUrl}
            <ProjectCard {project} {imageUrl} />
          {/await}
        {/each}
      </div>
    </div>

    <section class="scrollSection pt-6 pb-12">
      <div id="scroll3" class="scrollSection" />
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

  @media (max-width: 768px) {
    #header {
      display: none;
    }
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

  .p-tag {
    @apply lt-xsm:text-base lt-xsm:leading-relaxed;
    @apply text-base lg:text-xl;
    @apply mb-24;
  }
</style>
