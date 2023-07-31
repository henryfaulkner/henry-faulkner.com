import { buildProperty, buildCollection } from "firecms";
import { drinkCategories, drinkTags } from "../string-constants";
import { Recipe } from "../types/recipe.type";
import { methodsCollection } from "./methods.collection";
import { ingredientsCollection } from "./ingredients.collection";

export const drinkRecipeCollection = buildCollection<Recipe>(
    {
        name: "Drink Recipes",
        path: "drink-recipes",
        // permissions: ({ authController }) => ({
        //     edit: true,
        //     create: true,
        //     delete: authController.extra.roles.includes("admin")
        // }),
        subcollections: [
            ingredientsCollection,
            methodsCollection
        ],
        properties: {
            title: {
                name: "Title",
                validation: { required: true },
                dataType: "string"
            }, 
            short_description: buildProperty({
                name: "Short Description",
                dataType: "string"
            }),
            featured_image: buildProperty({ // The `buildProperty` method is an utility function used for type checking
                name: "Featured Image",
                dataType: "string",
                config: {
                    storageMeta: {
                        mediaType: "image",
                        storagePath: "images",
                        acceptedFiles: ["image/*"]
                    }
                }
            }),
            ingredientsList: buildProperty({
                name: "Ingredients",
                description: "Ingredients array",
                validation: { required: true },
                dataType: "array",
                of: {
                    dataType: "map",
                    properties: {
                        title: buildProperty({
                            name: "Title",
                            dataType: "string"
                        }),
                        ingredients: buildProperty({
                            name: "Ingredients",
                            dataType: "array",
                            of: {
                                dataType: "string",
    
                            }
                        })
                    }
                }
            }),
            methodsList: buildProperty({
                name: "Methods",
                description: "Methods array",
                validation: { required: true },
                dataType: "array",
                of: {
                    dataType: "map",
                    properties: {
                        title: buildProperty({
                            name: "Title",
                            dataType: "string"
                        }),
                        methods: buildProperty({
                            name: "Methods",
                            dataType: "array",
                            of: {
                                dataType: "string"
                            }
                        })
                    }
                }
            }),
            variationsList: buildProperty({
                name: "Variations",
                validation: { required: false },
                dataType: "array",
                of: {
                    dataType: "string",
                }
            }),
            timeApproximation: {
                name: "Time Approximation",
                description: "Estimate average recipe completion time in hours and minute.",
                validation: {required: false},
                dataType: "map",
                properties: {
                    hours: buildProperty({
                        name: "Hours",
                        dataType: "string",
                    }),
                    minutes: buildProperty({
                        name: "Minutes",
                        dataType: "string",
                    })
                }
            },
            categories: buildProperty({
                name: "Categories",
                validation: { required: true },
                dataType: "array",
                of: {
                    dataType: "string",
                    enumValues: drinkCategories
                }
            }),
            tags: buildProperty({
                name: "Tags",
                description: "Tags",
                dataType: "array",
                of: {
                    dataType: "string",
                    enumValues: drinkTags
                }
            }),
            createdDate: {
                name: "Created Date",
                dataType: "date",
                validation: { required: true },
            }
        }
    }
)