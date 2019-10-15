# NCATS Toolbox
This app contains:
1. NCATS header
2. NCATS footer
3. sticky footer
4. Angular Material design module
5. Federal government operating status check
6. IE browser warning
7. NCATS scss color scheme
8. NCATS favicon



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

Run `npm install` to get all dependencies

##Updating a tool
1. cd into 'src/app/pages/'
2. Run `ng g c {toolName}` to generate a new component NewComponent
3. In the private and public tools lists, add NewComponent into the last column, labeled component
4. in services/component-name.service.ts, add NewComponent to the toolname map `this.COMPONENTS.set('NewComponent', NewComponent);`
5. Make sure to add NewComponent to `entryComponents` array in `app.module.ts`
5. (optional, but not really) Add images in /src/assets/NewComponent
6. image named `primary.png` is used ad a banner and thumbnail image
7. once `primary.png` is added, change the value of the `image` column in `tool-list-public.csv` and `tool-list-public.csv` to `yes`  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
To deploy: `ng build --bh /toolbox/ --prod`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

