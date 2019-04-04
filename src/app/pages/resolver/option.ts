import { jsonProperty, jsonIgnore, Serializable } from 'ts-serializable';

export class Option extends Serializable {
    @jsonProperty(String)
    public title = '';

    @jsonProperty(String)
    public format = '';

    @jsonProperty(String)
    public name = '';

    @jsonProperty([String])
    public tags: Array<string> = [];

    @jsonProperty(String)
    public description = '';

    @jsonIgnore()
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
}
