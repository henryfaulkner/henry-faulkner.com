import { buildSchema } from "@camberi/firecms";
import { Methods } from "../types/methods.type";

export const methodsSchema = buildSchema<Methods>({
    name: "Methods",
    properties: {
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        methods: {
            title: "Methods",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        }
    }
});