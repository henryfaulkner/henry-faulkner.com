export type Recipe = {
    title: string;
    short_description: string;
    featured_image: string;
    ingredientsList: {
        title: string,
        ingredients: string[],
    }[];
    methodsList: {
        title: string,
        methods: string[],
    }[];
    categories: string[];
    tags: string[];
    timeApproximation: {
        hours: string,
        minutes: string,
    }
    createdDate: Date;
}