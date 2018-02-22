export class Tool {
    toolName: string;
    category: string;
    url: string;
    contact: string[];
    description: string;
    toolType: string;
    note: string;
    collaborators: string[];
    visibility: string;
    obsolete: boolean;
    audience: string;
    codebase: string;
    publicCodebase: boolean;

    constructor (obj: any){
        this.toolName = obj.toolName;
        this.category = obj.category;
        this.url = obj.url;
        this.contact = obj.contact.split(',');
        this.description = obj.description;
        this.toolType = obj.toolType;
        this.note = obj.note;
        this.collaborators = obj.collaborators.split(',');
        this.visibility = obj.visibility;
        this.obsolete = obj.obsolete;
        this.audience = obj.audience;
        this.codebase = obj.codebase;
        this.publicCodebase = obj.publicCodebase || false;
    }
}
