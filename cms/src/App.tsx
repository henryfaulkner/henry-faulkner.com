import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
//import { useDataEnhancementPlugin } from "@firecms/data_enhancement";
import { Authenticator, FirebaseCMSApp } from "firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
// import { productSchema } from "./schemas/product.schema";
// import { localeSchema } from "./schemas/locale.schema";
// import { projectSchema } from "./schemas/project.schema";
import { foodRecipeCollection } from "./collections/food-recipe.collection";
import { drinkRecipeCollection } from "./collections/drink-recipe.collection";
import { projectCollection } from "./collections/project.collection";

const firebaseConfig = {
  apiKey: "AIzaSyAGXxeddwfauD2jsLN9sClKlW7gcl76kxY",
  authDomain: "henryfaulkner-xyz.firebaseapp.com",
  projectId: "henryfaulkner-xyz",
  storageBucket: "henryfaulkner-xyz.appspot.com",
  messagingSenderId: "585447646787",
  appId: "1:585447646787:web:b59f311eebc320d87316f6"
};

export default function App() {

    // const navigation: NavigationBuilder = async ({
    //                                                  user,
    //                                                  authController
    //                                              }: NavigationBuilderProps) => {

        // return ({
        //     collections: [
                // buildCollection({
                //     path: "products",
                //     schema: productSchema,
                //     name: "Products",
                //     permissions: ({ authController }) => ({
                //         edit: true,
                //         create: true,
                //         // we have created the roles object in the navigation builder
                //         delete: authController.extra.roles.includes("admin")
                //     }),
                //     subcollections: [
                //         buildCollection({
                //             name: "Locales",
                //             path: "locales",
                //             schema: localeSchema
                //         })
                //     ]
                // }),
                // buildCollection({
                //   path: "projects",
                //   schema: projectSchema,
                //   name: "Projects",
                //   permissions: ({ authController }) => ({
                //       edit: true,
                //       create: true,
                //       // we have created the roles object in the navigation builder
                //       delete: authController.extra.roles.includes("admin")
                //   })
                // }),
            //     foodRecipeCollection,
            //     drinkRecipeCollection
            // ]
        //});
    // 
// };

const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({
    user,
    authController
}) => {

if (user?.email?.includes("flanders")) {
throw Error("Stupid Flanders!");
}

console.log("Allowing access to", user?.email);
// This is an example of retrieving async data related to the user
// and storing it in the controller's extra field.
const sampleUserRoles = await Promise.resolve(["admin"]);
authController.setExtra(sampleUserRoles);

return true;
}, []);


// const dataEnhancementPlugin = useDataEnhancementPlugin({
//     // Paths that will be enhanced
//     getConfigForPath: ({ path }) => {
//         return true;
//     }
// });

    return <FirebaseCMSApp
        name={"My Portfolio's CMS"}
        //plugins={[dataEnhancementPlugin]}
        authentication={myAuthenticator}
        collections={[foodRecipeCollection, drinkRecipeCollection, projectCollection]}
        firebaseConfig={firebaseConfig}
    />;
}
