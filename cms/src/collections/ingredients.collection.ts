import { buildCollection } from "firecms";
import { Ingredients } from "../types/ingredients.type";

export const ingredientsCollection = buildCollection({
    name: "Ingredients",
    path: "ingredients",
    properties: {
        title: {
            name: "Title",
            validation: { required: true },
            dataType: "string"
        },
        ingredients: {
            name: "Ingredients",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        }
    }
})