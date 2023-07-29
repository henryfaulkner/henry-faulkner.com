import type IFirebaseDocument from "./IFirebaseDocument";

class Project implements IFirebaseDocument {
  public DocumentID: string;
  public title: string;
  public short_description: string;
  public description: string;
  public liveLink: string;
  public repoLink: string;
  public featured_image: string;
  public featured_video: string;
  public gallery_images: string[];
  public gallery_videos: string[];

  public constructor(json) {
    if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
    if (json["title"]) this.title = json["title"];
    if (json["short_description"]) this.short_description = json["short_description"];
    if (json["description"]) this.description = json["description"];
    if (json["liveLink"]) this.liveLink = json["liveLink"];
    if (json["repoLink"]) this.repoLink = json["repoLink"];
    if (json["featured_image"]) this.featured_image = json["featured_image"];
    if (json["featured_video"]) this.featured_video = json["featured_video"];
    if (json["gallery_images"]) this.gallery_images = json["gallery_images"];
    if (json["gallery_videos"]) this.gallery_videos = json["gallery_videos"];
  }

  get GetDocumentID(): string {
    return this.DocumentID;
  }

  set SetDocumentID(DocumentID: string) {
    this.DocumentID = DocumentID;
  }
}

export default Project;
