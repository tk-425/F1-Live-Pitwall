import packageJson from '../package.json';

export const currentYear = new Date().getFullYear();

export const currentVersion = packageJson.version;
