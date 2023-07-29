import { buildCollection } from "firecms";
import { Methods } from "../types/methods.type";

export const methodsCollection = buildCollection({
    name: "Methods",
    path: "methods",
    properties: {
        title: {
            name: "Title",
            validation: { required: true },
            dataType: "string"
        },
        methods: {
            name: "Methods",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        }
    }
});