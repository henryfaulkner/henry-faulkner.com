import { buildSchema } from "@camberi/firecms";
import { Ingredients } from "../types/ingredients.type";

export const ingredientsSchema = buildSchema<Ingredients>({
    name: "Ingredients",
    properties: {
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        ingredients: {
            title: "Ingredients",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        }
    }
})