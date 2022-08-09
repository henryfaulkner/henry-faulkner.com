class Project {
    DocumentID;
    title;
    short_description;
    description;
    liveLink;
    repoLink;
    featured_image;
    featured_video;
    gallery_images;
    gallery_videos;
    constructor(json) {
        if (json["DocumentID"])
            this.DocumentID = json["DocumentID"];
        if (json["title"])
            this.title = json["title"];
        if (json["short_description"])
            this.short_description = json["short_description"];
        if (json["description"])
            this.description = json["description"];
        if (json["liveLink"])
            this.liveLink = json["liveLink"];
        if (json["repoLink"])
            this.repoLink = json["repoLink"];
        if (json["featured_image"])
            this.featured_image = json["featured_image"];
        if (json["featured_video"])
            this.featured_video = json["featured_video"];
        if (json["gallery_images"])
            this.gallery_images = json["gallery_images"];
        if (json["gallery_videos"])
            this.gallery_videos = json["gallery_videos"];
    }
    get GetDocumentID() {
        return this.DocumentID;
    }
    set SetDocumentID(DocumentID) {
        this.DocumentID = DocumentID;
    }
}
export default Project;
//# sourceMappingURL=Project.js.map