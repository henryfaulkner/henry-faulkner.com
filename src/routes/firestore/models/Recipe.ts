import type IFirebaseDocument from "./IFirebaseDocument";

type ingredients = {
    title: string,
    ingredients: string[],
}

type methods = {
    title: string,
    methods: string[],
}

export default class Recipe implements IFirebaseDocument {
  public DocumentID: string;
  public title: string;
  public featured_image: string;
  public short_description: string;
  public ingredientsList: ingredients[];
  public methodsList: methods[];
  public variationsList: string[];
  public categories: string[];
  public tags: string[];
  public createdDate: Date;

  public constructor(json) {
    if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
    if (json["title"]) this.title = json["title"];
    if (json["featured_image"]) this.featured_image = json["featured_image"];
    if (json["short_description"]) this.short_description = json["short_description"];
    if (json["ingredientsList"]) this.ingredientsList = json["ingredientsList"];
    if (json["methodsList"]) this.methodsList = json["methodsList"];
    if (json["variationsList"]) this.variationsList = json["variationsList"];
    if (json["categories"]) this.categories = json["categories"];
    if (json["tags"]) this.tags = json["tags"];
    if (json["createdDate"]) this.createdDate = json["createdDate"];
  }

  get GetDocumentID(): string {
    return this.DocumentID;
  }

  set SetDocumentID(DocumentID: string) {
    this.DocumentID = DocumentID;
  }
}