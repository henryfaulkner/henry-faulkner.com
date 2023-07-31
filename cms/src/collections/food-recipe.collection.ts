import { buildProperty, buildCollection } from "firecms";
import { ingredientsCollection } from "./ingredients.collection";
import { methodsCollection } from "./methods.collection";
import { foodCategories, foodTags } from "../string-constants";
import { Recipe } from "../types/recipe.type";

export const foodRecipeCollection = buildCollection({
    path: "food-recipes",
    name: "Food Recipes",
    // permissions: ({ authController}) => ({
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
        short_description: {
            name: "Short Description",
            dataType: "string"
        },
        featured_image: buildProperty({ // The `buildProperty` method is an utility function used for type checking
            name: "Featured Image",
            dataType: "string",
            config: {
                storageMeta: {
                    mediaType: "image",
                    storagePath: "recipe-catalog",
                    acceptedFiles: ["image/*"]
                }
            }
        }),
        ingredientsList: {
            name: "Ingredients",
            description: "Ingredients array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    title: {
                        name: "Title",
                        dataType: "string"
                    },
                    ingredients: {
                        name: "Ingredients",
                        dataType: "array",
                        of: {
                            dataType: "string",

                        }
                    }
                }
            }
        },
        methodsList: {
            name: "Methods",
            description: "Methods array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    title: {
                        name: "Title",
                        dataType: "string"
                    },
                    methods: {
                        name: "Methods",
                        dataType: "array",
                        of: {
                            dataType: "string"
                        }
                    }
                }
            }
        },
        variationsList: {
            name: "Variations",
            validation: { required: false },
            dataType: "array",
            of: {
                dataType: "string",
            }
        },
        timeApproximation: {
            name: "Time Approximation",
            description: "Estimate average recipe completion time in hours and minute.",
            validation: {required: false},
            dataType: "map",
            properties: {
                hours: {
                    name: "Hours",
                    dataType: "string",
                },
                minutes: {
                    name: "Minutes",
                    dataType: "string",
                }
            }
        },
        categories: {
            name: "Categories",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string",
                enumValues: foodCategories
            }
        },
        tags: {
            name: "Tags",
            description: "Tags",
            dataType: "array",
            of: {
                dataType: "string",
                enumValues: foodTags
            }
        },
        createdDate: {
            name: "Created Date",
            dataType: "date",
            validation: { required: false },
        }
    }
});
