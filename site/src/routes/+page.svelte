<script>
  import { theme } from "../store/stores";
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
  import AnimatingWrapper from "../components/AnimatingWrapper.svelte";
  import Collapsable from "../components/Collapsable.svelte";
  import MainHeroBanner from "../components/HeroBanners/MainHeroBanner.svelte";
  import ProjectCollapsable from "../components/ProjectCollapsable.svelte";

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

<div id="index" class="index scrollSection text-tertiary{`-${$theme}`}">
  <div id="header">
    <Header {headerLinks} {breadcrumbLinks} />
  </div>
  <MainHeroBanner />

  <div id="main" class="lg:px-32 bg-primaryBg{`-${$theme}`}">
    <div id="scroll1" class="scrollSection" />
    <AnimatingWrapper cssClass="hiddenNotTW">
      <Collapsable title="About" slot="animated">
        <div class="about">
          <div id="scroll4" class="scrollSection" />
          <TitleDescription title="">
            <p slot="p-tag" class="p-tag">
              Hey there, I'm Henry Faulkner. I'm a software developer with a
              Bachelor of Science in Computer Science from the
              <Anchor
                title="University of Georgia"
                href="https://www.uga.edu/"
                className="UGA"
                external={true}
                color={`text-primary-${$theme}`}
              /> with over 3 years of professional software development experience.
              My passion lies in designing performant systems and maintaining software
              architecture whilst improving behavior.
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
              I am a fullstack web developer and software engineer. My expertise
              lies in working with .Net (Framework/Core), TypeScript, T-SQL, and
              Microsoft Azure cloud services (in which I hold a professional
              certificate). I am primarily focus on systems work, though
              throughout my career, I have had the opportunity to build UIs with
              various frontend frameworks, i.e., Angular, ASP.Net,
              React/Next.js, and Svelte/SvelteKit (shoutout jQuery as well).
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
                color={`text-primary-${$theme}`}
              />. My role at Now is to make massive technical upgrades to their
              flagship financial platform, NowAccount. I am the technical
              architect for NowAccount's new Angular solution and a devleoper on
              their new .NET Core API. I designed the UX and UI for NowAccount's
              new Client Onboarding Journey using Adobe XD. The onboarding
              journey has been shipped to production and is a dope milestone for
              the product's frontend and backend solution. I am responsible for
              migrating all NowAccount's server jobs (dev, stage, and prod) to
              Azure Functions, which has improved server performance and aligns
              with our goal of low-infrastructure maintaince. I am currently
              overhauling NowAccount's Dashboard and leading development on
              their new Collections module. I have been working at Now since
              October 2022.
              <br /> <br />
              I was formerly a Technical Consultant at
              <Anchor
                title="Perficient®"
                href="https://www.perficient.com/"
                className="Perficient"
                external={true}
                color={`text-primary-${$theme}`}
              />. I initially worked on the Sitecore team, creating
              enterprise-scale websites and custom functionality on top of
              Sitecore's proprietary CMS platform using C# and performing large
              data transfer using PowerShell. I later transitioned to
              Perficient's Custom Development team as a .NET and React
              developer, where I created smaller-scale web applications. At
              Perficient, I worked with Azure, .Net Framework, React, T-SQL, and
              Sitecore. I worked for Perficient from February 2021 through
              October 2022, as well as interned there.
              <br /> <br />
              My personnel project experience focuses on my personal engineering
              interests. I enjoy exploring the depth of computing principles, low-level
              languages, hardware, and hardware peripherals. You can find out more
              about my sidework in the
              <Anchor
                title={"Projects section"}
                href={"#scroll2"}
                className={"Projects"}
                external={false}
                color={`text-primary-${$theme}`}
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
                color={`text-primary-${$theme}`}
                on:click={(event) => {
                  event.preventDefault();
                  scrollIntoView(event.target);
                }}
              />.
            </p>
          </TitleDescription>
        </div>
      </Collapsable>
    </AnimatingWrapper>

    <div id="scroll2" class="scrollSection" />
    <AnimatingWrapper cssClass="hiddenNotTW">
      <ProjectCollapsable title="Project Showcase" slot="animated">
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
      </ProjectCollapsable>
    </AnimatingWrapper>

    <section class="scrollSection pt-6 pb-12">
      <div id="scroll3" class="scrollSection" />
      <Contact />
    </section>
  </div>

  <Footer />
</div>

<style>
  #main {
  }

  .scrollSection {
    @apply lt-xsm:scroll-mt-36 xsm:scroll-mt-24;
  }

  .p-tag {
    @apply lt-xsm:text-base lt-xsm:leading-relaxed;
    @apply text-base lg:text-xl;
    @apply mb-6 lg:mb-12;
  }

  .about {
    padding-top: 5px;
  }
</style>
