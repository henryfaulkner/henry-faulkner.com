/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const res = await fetch("/firestore/endpoints/projects");
    const projects = await res.json();

    if (res.ok) {
      return {
        projects,
      };
    } else {
      console.log("Had an issue fetching projects.");
      return {
        projects: "broken",
      };
    }
  }