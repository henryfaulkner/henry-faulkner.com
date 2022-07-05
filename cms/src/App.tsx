import React from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    buildCollection,
    buildProperty,
    buildSchema,
    EntityReference,
    FirebaseCMSApp,
    NavigationBuilder,
    NavigationBuilderProps
} from "@camberi/firecms";

import "typeface-rubik";
import "typeface-space-mono";

const firebaseConfig = {
  apiKey: "AIzaSyAGXxeddwfauD2jsLN9sClKlW7gcl76kxY",
  authDomain: "henryfaulkner-xyz.firebaseapp.com",
  projectId: "henryfaulkner-xyz",
  storageBucket: "henryfaulkner-xyz.appspot.com",
  messagingSenderId: "585447646787",
  appId: "1:585447646787:web:b59f311eebc320d87316f6"
};

const locales = {
    "en-US": "English (United States)",
    "es-ES": "Spanish (Spain)",
    "de-DE": "German"
};

type Product = {
    name: string;
    price: number;
    status: string;
    published: boolean;
    related_products: EntityReference[];
    main_image: string;
    tags: string[];
    description: string;
    categories: string[];
    publisher: {
        name: string;
        external_id: string;
    },
    expires_on: Date
}

type Project = {
  title: string;
  short_description: string;
  description: string;
  liveLink: string;
  repoLink: string;
  featured_image: string;
  featured_video: string;
  Gallery_images: string[];
  Gallery_videos: string[];
}

const productSchema = buildSchema<Product>({
    name: "Product",
    properties: {
        name: {
            title: "Name",
            validation: { required: true },
            dataType: "string"
        },
        price: {
            title: "Price",
            validation: {
                required: true,
                requiredMessage: "You must set a price between 0 and 1000",
                min: 0,
                max: 1000
            },
            description: "Price with range validation",
            dataType: "number"
        },
        status: {
            title: "Status",
            validation: { required: true },
            dataType: "string",
            description: "Should this product be visible in the website",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            config: {
                enumValues: {
                    private: "Private",
                    public: "Public"
                }
            }
        },
        published: ({ values }) => buildProperty({
            title: "Published",
            dataType: "boolean",
            columnWidth: 100,
            disabled: (
                values.status === "public"
                    ? false
                    : {
                        clearOnDisabled: true,
                        disabledMessage: "Status must be public in order to enable this the published flag"
                    }
            )
        }),
        related_products: {
            dataType: "array",
            title: "Related products",
            description: "Reference to self",
            of: {
                dataType: "reference",
                path: "products"
            }
        },
        main_image: buildProperty({ // The `buildProperty` method is an utility function used for type checking
            title: "Image",
            dataType: "string",
            config: {
                storageMeta: {
                    mediaType: "image",
                    storagePath: "images",
                    acceptedFiles: ["image/*"]
                }
            }
        }),
        tags: {
            title: "Tags",
            description: "Example of generic array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
        description: {
            title: "Description",
            description: "Not mandatory but it'd be awesome if you filled this up",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        },
        categories: {
            title: "Categories",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string",
                config: {
                    enumValues: {
                        electronics: "Electronics",
                        books: "Books",
                        furniture: "Furniture",
                        clothing: "Clothing",
                        food: "Food"
                    }
                }
            }
        },
        publisher: {
            title: "Publisher",
            description: "This is an example of a map property",
            dataType: "map",
            properties: {
                name: {
                    title: "Name",
                    dataType: "string"
                },
                external_id: {
                    title: "External id",
                    dataType: "string"
                }
            }
        },
        expires_on: {
            title: "Expires on",
            dataType: "timestamp"
        }
    }
});

const localeSchema = buildSchema({
    customId: locales,
    name: "Locale",
    properties: {
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        selectable: {
            title: "Selectable",
            description: "Is this locale selectable",
            dataType: "boolean"
        },
        video: {
            title: "Video",
            dataType: "string",
            validation: { required: false },
            config: {
                storageMeta: {
                    mediaType: "video",
                    storagePath: "videos",
                    acceptedFiles: ["video/*"]
                }
            }
        }
    }
});

const projectSchema = buildSchema<Project>({
  name: "Project",
  properties: {
    title: {
        title: "Title",
        validation: { required: true },
        dataType: "string"
    },
    short_description: {
        title: "Short Description",
        validation: { required: true },
        dataType: "string"
    },
    description: {
        title: "Description",
        dataType: "string"
    },
    liveLink: {
        title: "Live Link",
        dataType: "string"
    },
    repoLink: {
        title: "Repository Link",
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
    featured_video: {
        title: "Featured Video",
        dataType: "string",
        validation: { required: false },
        config: {
            storageMeta: {
                mediaType: "video",
                storagePath: "videos",
                acceptedFiles: ["video/*"]
            }
        }
    },
    Gallery_images: {
        dataType: "array",
        title: "Gallery Images",
        description: "Gallery of Images",
        of: {
            dataType: "string",
            config: {
                storageMeta: {
                    mediaType: "image",
                    storagePath: "images",
                    acceptedFiles: ["image/*"]
                }
            }
        }
    },
    Gallery_videos: {
        dataType: "array",
        title: "Gallery Videos",
        description: "Gallery of Videos",
        of: {
            dataType: "string",
            config: {
                storageMeta: {
                    mediaType: "video",
                    storagePath: "videos",
                    acceptedFiles: ["video/*"]
                }
            }
        }
    }
  }
});

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
