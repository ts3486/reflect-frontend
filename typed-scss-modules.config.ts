export const config = {
  exportType: 'default',
  nameFormat: 'none',
  implementation: 'sass',
  additionalData: `@use "src/app/styles/variables.module.scss" as *;`,
  ignore: ['**/variables.module.scss'],
};
