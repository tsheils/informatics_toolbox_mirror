import { Option } from './option';

export class OptionsManager {
    private options: Array<Option>;
    categories: { [category: string]: Array<Option> } = {
        'Active Options': []
    };
    private priorityOptions = this.categories['Active Options'];
    searchResults: Array<Option> = [];
    categoryNames: Array<string> = ['Active Options'];
    searchTimer: any;

    constructor(
        options: Array<Option> = [],
        priorityOptionNames: Array<string> = ['qhts', 'smiles', 'lychi'],
        selectedOptionNames?: Array<string>) {
        this.options = options;
        this.init(priorityOptionNames, selectedOptionNames);
    }

    init(priorityOptionNames: Array<string>, selectedOptionNames?: Array<string>): void {
        this.options.forEach(option => {

            if (priorityOptionNames.indexOf(option.name) > -1) {
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

        if (countSelected < numPriorityOptions && numPriorityOptions <= this.priorityOptions.length) {
            for (let i = countSelected; i < numPriorityOptions; i++) {
                this.priorityOptions[i].isSelected = true;
            }
        }
    }

    getLabel(field: string): string {
        let ret: string;
        const option: Option[] = this.options.filter(opt => opt.name === field);
        if (option.length > 0) {
            ret = option[0].title;
        } else {
            ret = field;
        }
        return ret;
    }

    searchOptions(searchInput: string): void {
        if (this.searchTimer != null) {
            clearTimeout(this.searchTimer);
        }

        this.searchTimer = setTimeout(() => {

            if (this.searchResults.length) {
                this.searchResults.forEach(option => {
                    if (option.isSelected) {
                        option.categories.forEach(category => {
                            for (let i = 0; i < this.categories[category].length; i++) {
                                if (this.categories[category][i].name === option.name) {
                                    const splicedOption = this.categories[category].splice(i, 1);
                                    this.priorityOptions.push(splicedOption[0]);
                                }
                            }
                        });
                    }
                });

                this.priorityOptions = this.sortOptions(this.priorityOptions);
            }

            this.searchResults = [];

                if (searchInput) {
                this.options.forEach(option => {
                    const keys = Object.keys(option);
                    let contains = false;
                    for (let i = 0; i < keys.length; i++) {
                        if (searchInput && option[keys[i]].toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
                            contains = true;
                            break;
                        }
                    }
                    if (contains) {
                        this.searchResults.push(option);
                    }
                });
            }
            clearTimeout(this.searchTimer);
            this.searchTimer = null;
            console.log(this.searchResults);
        }, 500);
    }

    sortOptions(options: Array<Option> = []): Array<Option> {
        const sortedOptions = this.options.sort((a, b) => {

            if (a.isSelected && b.isSelected) {
                return 0;
            }

            if (a.isSelected) {
                return -1;
            }

            if (b.isSelected) {
                return 1;
            }

            if (a.title.toLowerCase() <= b.title.toLocaleLowerCase()) {
                return -1;
            }

            if (b.title.toLocaleLowerCase() < a.title.toLowerCase()) {
                return 1;
            }
        });

        return sortedOptions;
    }
}
