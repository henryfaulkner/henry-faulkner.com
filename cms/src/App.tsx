import React from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    buildCollection,
    FirebaseCMSApp,
    NavigationBuilder,
    NavigationBuilderProps
} from "@camberi/firecms";

import "typeface-rubik";
import "typeface-space-mono";
import { productSchema } from "./schemas/product.schema";
import { localeSchema } from "./schemas/locale.schema";
import { projectSchema } from "./schemas/project.schema";
import { foodRecipeSchema } from "./schemas/food-recipe.schema";
import { ingredientsSchema } from "./schemas/ingredients.schema";
import { methodsSchema } from "./schemas/methods.schema";
import { drinkRecipeSchema } from "./schemas/drink-recipe.schema";

const firebaseConfig = {
  apiKey: "AIzaSyAGXxeddwfauD2jsLN9sClKlW7gcl76kxY",
  authDomain: "henryfaulkner-xyz.firebaseapp.com",
  projectId: "henryfaulkner-xyz",
  storageBucket: "henryfaulkner-xyz.appspot.com",
  messagingSenderId: "585447646787",
  appId: "1:585447646787:web:b59f311eebc320d87316f6"
};

export default function App() {

    const navigation: NavigationBuilder = async ({
                                                     user,
                                                     authController
                                                 }: NavigationBuilderProps) => {

        return ({
            collections: [
                buildCollection({
                    path: "products",
                    schema: productSchema,
                    name: "Products",
                    permissions: ({ authController }) => ({
                        edit: true,
                        create: true,
                        // we have created the roles object in the navigation builder
                        delete: authController.extra.roles.includes("admin")
                    }),
                    subcollections: [
                        buildCollection({
                            name: "Locales",
                            path: "locales",
                            schema: localeSchema
                        })
                    ]
                }),
                buildCollection({
                  path: "projects",
                  schema: projectSchema,
                  name: "Projects",
                  permissions: ({ authController }) => ({
                      edit: true,
                      create: true,
                      // we have created the roles object in the navigation builder
                      delete: authController.extra.roles.includes("admin")
                  })
                }),
                buildCollection({
                    path: "food-recipes",
                    schema: foodRecipeSchema,
                    name: "Food Recipes",
                    permissions: ({ authController}) => ({
                        edit: true,
                        create: true,
                        delete: authController.extra.roles.includes("admin")
                    }),
                    subcollections: [
                        buildCollection({
                            name: "Ingredients",
                            path: "ingredients",
                            schema: ingredientsSchema
                        }),
                        buildCollection({
                            name: "Methods",
                            path: "methods",
                            schema: methodsSchema
                        })
                    ]
                }),
                buildCollection({
                    path: "drink-recipes",
                    schema: drinkRecipeSchema,
                    name: "Drink Recipes",
                    permissions: ({ authController}) => ({
                        edit: true,
                        create: true,
                        delete: authController.extra.roles.includes("admin")
                    }),
                    subcollections: [
                        buildCollection({
                            name: "Ingredients",
                            path: "ingredients",
                            schema: ingredientsSchema
                        }),
                        buildCollection({
                            name: "Methods",
                            path: "methods",
                            schema: methodsSchema
                        })
                    ]
                })
            ]
        });
    };

    const myAuthenticator: Authenticator<FirebaseUser> = async ({
                                                                    user,
                                                                    authController
                                                                }) => {
        // You can throw an error to display a message
        if(user?.email?.includes("flanders")){
            throw Error("Stupid Flanders!");
        }
        
        console.log("Allowing access to", user?.email);
        // This is an example of retrieving async data related to the user
        // and storing it in the user extra field.
        const sampleUserData = await Promise.resolve({
            roles: ["admin"]
        });
        authController.setExtra(sampleUserData);
        return true;
    };

    return <FirebaseCMSApp
        name={"My Portfolio's CMS"}
        authentication={myAuthenticator}
        navigation={navigation}
        firebaseConfig={firebaseConfig}
    />;
}
