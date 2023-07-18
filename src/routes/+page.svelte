<script>
  import { getStorageUrl } from "$lib/firebase";
  /** @type {import('./$types').PageData} */
  export let data;
  export function scrollIntoView(target) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }

  import Footer from "../components/structure/Footer.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import Header from "../components/structure/Header.svelte";
  import TitleDescription from "../components/TitleDescription.svelte";
  import Contact from "../components/Contact.svelte";
  import Anchor from "../components/Anchor.svelte";
  import HeroBanner from "../components/HeroBanner.svelte";
  import AnimatingWrapper from "../components/AnimatingWrapper.svelte";
  import Collapsable from "../components/Collapsable.svelte";

  let headerLinks = {
    Index: "#index",
    Info: "#scroll1",
    Projects: "#scroll2",
    Contact: "#scroll3",
  };

  let breadcrumbLinks = [];

  // Use this component for Light- v. Dark-mode
  /* https://daisyui.com/components/swap/ */
</script>

<div id="index" class="scrollSection">
  <div id="header">
    <Header {headerLinks} {breadcrumbLinks} />
  </div>
  <HeroBanner />

  <div id="main" class="lg:px-32">
    <div id="scroll1" class="scrollSection" />
    <AnimatingWrapper cssClass="hiddenNotTW">
      <Collapsable title="About" slot="animated">
        <div class="about">
          <div id="scroll4" class="scrollSection" />
          <TitleDescription title="">
            <p slot="p-tag" class="p-tag">
              Hi, I'm Henry Faulkner. I live in Atlanta, GA, USA. I have a
              Bachelor of Science in Computer Science from the
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
      </Collapsable>
    </AnimatingWrapper>

    <AnimatingWrapper cssClass="hiddenNotTW">
      <Collapsable title="Skills" slot="animated">
        <div class="about" id="skills">
          <TitleDescription title="">
            <p slot="p-tag" class="p-tag">
              I am a fullstack web developer and software engineer. I have 3
              years of professional experience working with .Net
              (Framework/Core), TypeScript, T-SQL, Microsoft Azure services, and
              SCSS. Throughout my career, I've worked with various frontend
              frameworks such as: Angular, ASP.Net, Next.js and React.
            </p>
          </TitleDescription>
        </div>
      </Collapsable>
    </AnimatingWrapper>

    <AnimatingWrapper cssClass="hiddenNotTW">
      <Collapsable title="Professional Experience" slot="animated">
        <div class="about" id="experience">
          <TitleDescription title="">
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
              NowAccount's Client Onboarding Journey using Adobe XD, which is
              being developed and showcased to prospective investors. I am
              currently working on the aforementioned Onboarding Journey, which
              marks the platform's move from MVC (.Net Framework) to REST APIs
              (.Net Core) and ASP.Net to Angular. I am the frontend architect
              for NowAccount's new Angular solution. I played a large role in
              moving our jobs from running on a virtual machine's task scheduler
              to Azure Functions on Azure's serverless platform. I have working
              at Now since October 2022.
              <br /> <br />
              I was formerly a Technical Consultant at
              <Anchor
                title="Perficient®"
                href="https://www.perficient.com/"
                className="Perficient"
                external={true}
                color={"text-primary"}
              />
              where I worked momentarily on the Sitecore team, creating enterprise-scale
              websites. I built custom functionality on top of Sitecore's proprietary
              CMS platform using C# and large data transfer using PowerShell. I later
              transitioned to Perficient's Custom Development team as a .NET and
              React developer, where I created smaller-scale web applications. At
              Perficient, I worked with Azure, .Net Framework, React, T-SQL, Sitecore,
              and SCSS. I was staffed at Perficient from February 2021 through October
              2022, as well as interned there.
              <br /> <br />
              My personnel project experience mostly centers around the C++/.NET
              Core/TypeScript ecosystems and my personal growth as an engineer. You
              can find out more about my sidework in the
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
      </Collapsable>
    </AnimatingWrapper>

    <div id="scroll2" class="scrollSection">
      <h2 id="title">Project Showcase</h2>
      <div id="projects">
        {#each data.projects as project, i}
          {#await getStorageUrl(project.featured_image) then imageUrl}
            <AnimatingWrapper
              cssClass="hiddenNotTW staggerNotTW"
              style="--order: {i + 1}"
            >
              <ProjectCard {project} {imageUrl} slot="animated" />
            </AnimatingWrapper>
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
    @apply text-tertiary;
    overflow-x: hidden;
  }

  #main {
    @apply bg-primaryBg;
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
    @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }

  .scrollSection {
    @apply lt-xsm:scroll-mt-36 xsm:scroll-mt-24;
  }

  .p-tag {
    @apply lt-xsm:text-base lt-xsm:leading-relaxed;
    @apply text-base lg:text-xl;
    @apply mb-12;
  }

  .about {
    padding-top: 5px;
  }
</style>
