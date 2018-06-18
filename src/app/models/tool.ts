
export class Tool {
    toolName: string;
    category: string;
    url: string;
    contact: string[];
    description: string;
    toolType: string[];
    note: string;
    collaborators: string[];
    public: boolean;
    obsolete: boolean;
    audience: string[];
    codebase: string;
    publicCodebase: boolean;
    parentProject: string;
    image: boolean;
    component: string;
    toolUrl: string;

    constructor (obj: any) {
        this.toolName = obj.toolName;
        this.category = obj.category ? obj.category : null;
        this.url = obj.url;
        this.contact = this.parse(obj.contact);
        this.description = obj.description;
        this.toolType = this.parse(obj.toolType);
        this.note = obj.note;
        this.collaborators = this.parse(obj.collaborators);
        this.public = obj.public === "yes";
        this.obsolete = obj.obsolete || false;
        this.audience = this.parse(obj.audience);
        this.codebase = obj.codebase;
        this.publicCodebase = obj.publicCodebase === "yes";
        this.parentProject = obj.parentProject;
        this.image = obj.image === 'yes' ? obj.image : false;
        this.component = obj.component || null;
        this.toolUrl = obj.toolName.toLowerCase().replace(/\ /g, '-');
    }

    parse(string): string[] {
        let ret = [];
        if (string) {
            ret = string.split(', ');
            ret.map(str => str.trim());
        }
        return ret;
    }
}
