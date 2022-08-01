export class Post{
    constructor(title, content, tags, imageUrl, authorID = 1, id) {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.authorID = authorID;
        this.id = id;
    }
}