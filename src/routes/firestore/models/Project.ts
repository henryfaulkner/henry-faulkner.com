import type IFirebaseDocument from "./IFirebaseDocument";

class Project implements IFirebaseDocument {
  public DocumentID: string;
  public title: string;
  public description: string;
  public liveLink: string;
  public repoLink: string;

  public constructor(json) {
    if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
    if (json["title"]) this.title = json["title"];
    if (json["description"]) this.description = json["description"];
    if (json["liveLink"]) this.liveLink = json["liveLink"];
    if (json["repoLink"]) this.repoLink = json["repoLink"];
  }

  get GetDocumentID(): string {
    return this.DocumentID;
  }

  set SetDocumentID(DocumentID: string) {
    this.DocumentID = DocumentID;
  }
}

export default Project;
