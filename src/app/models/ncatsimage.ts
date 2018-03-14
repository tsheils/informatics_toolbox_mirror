export class NCATSImage {
    url: string;
    caption: string;

    constructor(obj) {
        this.url = obj.url;
        this.caption = obj.caption;
    }
}
