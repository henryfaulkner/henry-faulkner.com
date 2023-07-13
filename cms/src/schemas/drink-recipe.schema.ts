import { buildProperty, buildSchema } from "@camberi/firecms";
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
        featured_image: buildProperty({ // The `buildProperty` method is an utility function used for type checking
            title: "Featured Image",
            dataType: "string",
            config: {
                storageMeta: {
                    mediaType: "image",
                    storagePath: "images",
                    acceptedFiles: ["image/*"]
                }
            }
        }),
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
        timeApproximation: {
            title: "Time Approximation",
            description: "Estimate average recipe completion time in hours and minute.",
            validation: {required: false},
            dataType: "map",
            properties: {
                hours: {
                    title: "Hours",
                    dataType: "string",
                },
                minutes: {
                    title: "Minutes",
                    dataType: "string",
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