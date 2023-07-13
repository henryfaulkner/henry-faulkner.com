import { buildProperty, buildSchema } from "@camberi/firecms";
import { Project } from "../types/project.type";

export const projectSchema = buildSchema<Project>({
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
      gallery_images: {
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
      gallery_videos: {
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