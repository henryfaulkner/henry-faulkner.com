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
              lies in working with .NET/C#, TypeScript, T-SQL, and Microsoft
              Azure cloud services (in which I hold the
              <Anchor
                title="Azure Developer Associate cerificate"
                href="https://randomstoragehenry.blob.core.windows.net/certs/AZ-204.pdf"
                className="azure-cert"
                external={true}
                color={`text-primary-${$theme}`}
              />). Though I primarily focus on systems engineering, I am
              well-versed in developing frontend solutions with various frontend
              frameworks, i.e., Angular, ASP.NET, React/Next.js, SCSS, jQuery,
              and Svelte/SvelteKit.
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
              />. My role at Now® is to make massive technical upgrades to
              their flagship financial platform, NowAccount®. I am the
              technical architect for NowAccount®'s new Angular solution and a
              core contributor for NowAccount's new .NET Core APIs. I design UX
              and UI for NowAccount®'s new features using Adobe XD. I lead
              development on NowAccount's new onboarding journey, which shipped
              to production in August 2023. The Onboarding Journey's development
              is a milestone for NowAccount's technical trajectory, replacing
              ASP.NET MVC in favor of Angular and .NET Core APIs. I lead
              development in overhauling NowAccount's Client and Internal
              dashboards, which display real-time data to increase in-app
              observability to our clients and internal team members. I was
              responsible for migrating all jobs to Azure Functions to reduce
              server load. I have also contributed to the Azure DevOps CI/CD
              solution. I have been working for Now® since October 2022.
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
              Perficient®'s Custom Development team as a .NET and React
              developer, where I created web applications. At Perficient®, I
              worked with Azure, C#, TypeScript, React, T-SQL, and Sitecore. I
              worked for Perficient® from February 2021 through October 2022,
              as well as interned there.
              <br /> <br />
              My personnel project experience reflects my engineering interests.
              I enjoy exploring the depth of computing principles, software architecture,
              hardware, and hardware peripherals. You can find out more about my
              sidework in the
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
              below or on my
              <Anchor
                title="GitHub page"
                href="https://github.com/henryfaulkner"
                className="github-link"
                external={true}
                color={`text-primary-${$theme}`}
              />
              . You can also find my resume linked in the
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

<style lang="scss">
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
