// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    public: false,
    BASE_URL: '/toolbox',
    TOOL_URL: 'assets/tool-list-private.csv',
    MOL_CONVERT_URL: 'https://apis.ncats.nih.gov:9595/ms/route/structure/transform/smiles/sdf'
};

