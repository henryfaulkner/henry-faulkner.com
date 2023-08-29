import { buildProperty, buildCollection } from "firecms";
import { Project } from "../types/project.type";

export const projectCollection = buildCollection<Project>({
    name: "Projects",
    path: "projects",
    properties: {
      title: {
          name: "Title",
          validation: { required: true },
          dataType: "string"
      },
      short_description: {
          name: "Short Description",
          validation: { required: true },
          dataType: "string"
      },
      description: {
          name: "Description",
          dataType: "string"
      },
      liveLink: {
          name: "Live Link",
          dataType: "string"
      },
      repoLink: {
          name: "Repository Link",
          dataType: "string"
      },
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
      featured_video: buildProperty({
          name: "Featured Video",
          dataType: "string",
          validation: { required: false },
          config: {
              storageMeta: {
                  mediaType: "video",
                  storagePath: "videos",
                  acceptedFiles: ["video/*"]
              }
          }
      }),
      gallery_images: buildProperty({
          dataType: "array",
          name: "Gallery Images",
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
      }),
      gallery_videos: buildProperty({
          dataType: "array",
          name: "Gallery Videos",
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
      })
    }
  });