import * as fs from 'fs';
import { Configuration, Linter } from 'tslint';

const fileName = 'Specify input file name';
const configurationFilename = 'Specify configuration file name';
const options = {
    fix: false,
    formatter: 'json',
    formattersDirectory: 'customFormatters/',
    rulesDirectory: 'customRules/'
};

const fileContents = fs.readFileSync(fileName, 'utf8');
const linter = new Linter(options);
const configuration = Configuration.findConfiguration(configurationFilename, fileName).results;
linter.lint(fileName, fileContents, configuration);
const result = linter.getResult();
