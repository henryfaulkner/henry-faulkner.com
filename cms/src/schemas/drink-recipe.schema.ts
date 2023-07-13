import { buildSchema } from "@camberi/firecms";
import { drinkCategories, drinkTags } from "../string-constants";
import { Recipe } from "../types/recipe.type";

export const drinkRecipeSchema = buildSchema<Recipe>({
    name: "Drink Recipe",
    properties: {
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        }, 
        short_description: {
            title: "Short Description",
            dataType: "string"
        },
        ingredientsList: {
            title: "Ingredients",
            description: "Ingredients array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    title: {
                        title: "Title",
                        dataType: "string"
                    },
                    ingredients: {
                        title: "Ingredients",
                        dataType: "array",
                        of: {
                            dataType: "string",

                        }
                    }
                }
            }
        },
        methodsList: {
            title: "Methods",
            description: "Methods array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    title: {
                        title: "Title",
                        dataType: "string"
                    },
                    methods: {
                        title: "Methods",
                        dataType: "array",
                        of: {
                            dataType: "string"
                        }
                    }
                }
            }
        },
        categories: {
            title: "Categories",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string",
                config: {
                    enumValues: drinkCategories
                }
            }
        },
        tags: {
            title: "Tags",
            description: "Tags",
            dataType: "array",
            of: {
                dataType: "string",
                config: {
                    enumValues: drinkTags
                }
            }
        },
        createdDate: {
            title: "Created Date",
            dataType: "timestamp",
            validation: { required: true },
        }
    }
});