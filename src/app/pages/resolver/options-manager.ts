import { Option } from './option';

export class OptionsManager {
    private options: Array<Option>;
    private priorityOptionNames: Array<string>;
    categories: { [category: string]: Array<Option> } = {
        'Active Options': []
    };
    private priorityOptions = this.categories['Active Options'];
    categoryNames: Array<string> = [];

    constructor(options: Array<Option> = [], priorityOptionNames: Array<string> = ['qhts', 'smiles', 'lychi']) {
        this.options = options;
        this.priorityOptionNames = priorityOptionNames;
    }

    setCategories(): void {
        this.options.forEach(option => {

            if (this.priorityOptionNames.indexOf(option.name) > -1) {
                this.priorityOptions.push(option);
            } else {
                option.categories.forEach(category => {

                    if (this.categories[category] == null) {
                        this.categories[category] = [];
                        this.categoryNames.push(category);
                    }

                    if (this.categories[category].length === 0
                        || option.title >= this.categories[category][this.categories[category].length - 1].title) {
                        this.categories[category].push(option);
                    } else {
                        for (let i = 0; i < this.categories[category].length; i++) {
                            if (option.title < this.categories[category][i].title) {
                                this.categories[category].splice(i, 0, option);
                                break;
                            }
                        }
                    }
                });
            }
        });
    }

    get selectedOptionNames(): Array<string> {
        const selectedOptionNames = [];
        this.options.forEach(option => {
            if (option.isSelected) {
                selectedOptionNames.push(option.name);
            }
        });
        return selectedOptionNames;
    }

    setSelectedOptions(optionNames: Array<string> = [], numPriorityOptions: number = 3): void {
        optionNames.forEach(name => {
            for (let i = 0; i < this.options.length; i++) {
                if (this.options[i].name === name) {
                    this.options[i].isSelected = true;
                    break;
                }
            }
        });

        let countSelected = 0;
        this.priorityOptions = this.priorityOptions.sort((a, b) => {

            if (a.isSelected && b.isSelected) {
                countSelected = countSelected + 2;
                return 0;
            }

            if (a.isSelected) {
                countSelected++;
                return -1;
            }

            if (b.isSelected) {
                countSelected++;
                return 1;
            }
        });

        if (countSelected < numPriorityOptions && numPriorityOptions > this.priorityOptions.length) {
            for (let i = countSelected; i < numPriorityOptions; i++) {
                this.priorityOptions[i].isSelected = true;
            }
        }
    }
}
