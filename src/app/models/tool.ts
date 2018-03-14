
import {Type} from "@angular/core";

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
    audience: string[];
    codebase: string;
    publicCodebase: boolean;
    parentProject: string;
    image: boolean;
    component: string;

    constructor (obj: any){
        this.toolName = obj.toolName;
        this.category = obj.category ? obj.category : null;
        this.url = obj.url;
        this.contact = obj.contact.split(',');
        this.description = obj.description;
        this.toolType = obj.toolType || null;
        this.note = obj.note;
        this.collaborators = obj.collaborators ? obj.collaborators.split(','): [];
        this.visibility = obj.visibility;
        this.obsolete = obj.obsolete || false;
        this.audience = obj.audience? obj.audience.split(',') : [];
        this.codebase = obj.codebase;
        this.publicCodebase = obj.publicCodebase || false;
        this.parentProject = obj.parentProject;
        this.image = obj.image === "yes" ? obj.image : false;
        this.component = obj.component || null;
    }
}
