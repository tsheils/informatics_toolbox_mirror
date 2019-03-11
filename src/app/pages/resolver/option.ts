import { jsonProperty, jsonIgnore, Serializable } from 'ts-serializable';

export class Option extends Serializable {
    @jsonProperty(String)
    title: string;

    @jsonProperty(String)
    format: string;

    @jsonProperty(String)
    name: string;

    @jsonProperty([String])
    tags: Array<string>;

    @jsonProperty(String)
    description: string;

    @jsonIgnore()
    isSelected: boolean;

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
