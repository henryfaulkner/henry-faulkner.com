import type IFirebaseDocument from "./IFirebaseDocument";

class Project implements IFirebaseDocument {
  public DocumentID: string;
  public title: string;
  public short_description: string;
  public description: string;
  public liveLink: string;
  public repoLink: string;
  public image: string;

  public constructor(json) {
    if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
    if (json["title"]) this.title = json["title"];
    if (json["short_description"]) this.short_description = json["short_description"];
    if (json["description"]) this.description = json["description"];
    if (json["liveLink"]) this.liveLink = json["liveLink"];
    if (json["repoLink"]) this.repoLink = json["repoLink"];
    if (json["image"]) this.image = json["image"];
  }

  get GetDocumentID(): string {
    return this.DocumentID;
  }

  set SetDocumentID(DocumentID: string) {
    this.DocumentID = DocumentID;
  }
}

export default Project;
