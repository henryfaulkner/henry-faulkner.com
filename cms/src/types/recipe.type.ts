export type Recipe = {
    title: string;
    short_description: string;
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
    createdDate: Date;
}