// import { jsonProperty, jsonIgnore, Serializable } from 'ts-serializable';

export class Option {
    public title:string;
    public format: string;
    public name: string;
    public tags: Array<string>;
    public description: string;
    public isSelected = false;

    setSelected(isSelected: boolean): void {
        this.isSelected = isSelected;
    }

    get categories(): Array<string> {

        const categories = [];

        if (this.tags != null) {
            this.tags.forEach(tag => {
                if (tag.indexOf('category-') > -1) {
                    const category = tag.split('category-').pop();
                    categories.push(category);
                }
            });
        }

        if (categories.length === 0) {
            categories.push('misc');
        }

        return categories;
    }

    constructor (obj: any) {
        Object.entries((obj)).forEach((prop) => this[prop[0]] = prop[1]);
    }
}
