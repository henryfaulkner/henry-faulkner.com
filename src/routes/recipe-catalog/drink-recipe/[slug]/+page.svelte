<script>
  export async function load({ params, fetch }) {
    const res = await fetch(
      `/firestore/endpoints/recipes/${params.recipe}.json`
    );
    const recipe = await res.json();

    if (res.ok) {
      return {
        props: {
          recipe,
        },
      };
    } else {
      console.log("Had an issue fetching drink recipes.");
      return {
        props: {
          recipes: "broken",
        },
      };
    }
  }
</script>
