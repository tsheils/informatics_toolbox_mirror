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
        priorityOptions: {
            [option: string]: {
                count: number,
                selectedLast: boolean
            }
        } = {
                'qhts': {
                    count: 3,
                    selectedLast: true
                }, 'smiles': {
                    count: 2,
                    selectedLast: true
                }, 'lychi': {
                    count: 1,
                    selectedLast: true
                }

            },
        maxPriorityOptions: number = 10
    ) {
        this.options = options;
        this.init(priorityOptions, maxPriorityOptions);
    }

    init(
        priorityOptions: {
            [option: string]: {
                count: number,
                selectedLast: boolean
            }
        },
        maxPriorityOptions: number
    ): void {
        this.options.forEach(option => {
            if ( priorityOptions[option.name] != null) {
                if (priorityOptions[option.name].selectedLast) {

                    option.isSelected = true;
                    this.priorityOptions.unshift(option);
                } else {
                    this.priorityOptions.push(option);
                }
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

            this.priorityOptions.sort((optionA, optionB) => {
                if (optionA.isSelected && !optionB.isSelected) {
                    return -1;
                } else if (!optionA.isSelected && optionB.isSelected) {
                    return 1;
                } else {
                    return priorityOptions[optionA.name].count - priorityOptions[optionB.name].count;
                }
            });
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
        }, 500);
    }

    sortOptions(options: Array<Option> = []): Array<Option> {
        const sortedOptions = options.sort((a, b) => {
            if (a.isSelected === b.isSelected) {
                if (a.title.toLowerCase() <= b.title.toLocaleLowerCase()) {
                    return -1;
                }
                if (b.title.toLocaleLowerCase() < a.title.toLowerCase()) {
                    return 1;
                }
            } else if (a.isSelected) {
                return -1;
            } else {
                return 1;
            }
        });
        return sortedOptions;
    }

    reorganizeOptions(): void {
        Object.keys(this.categories).forEach(category => {
            if (category !== 'Active Options') {
                let i = this.categories[category].length - 1;
                for (i; i > -1; i--) {
                    if (this.categories[category][i].isSelected) {
                        const selectedOption = this.categories[category].splice(i, 1);
                        this.priorityOptions.push(selectedOption[0]);
                    }
                }
            }
        });
        this.priorityOptions = this.sortOptions(this.priorityOptions);
    }
}
