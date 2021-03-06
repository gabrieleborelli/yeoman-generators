'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = class extends Generator {

  start(){
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('Contactlab APPLICATION') + ' generator!'
    ));
  }

  prompts(){
    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What would you like this application to be called?',
      default: 'clab-application'
    },{
      type: 'input',
      name: 'sarayRoot',
      message: 'Insert Saray root path',
      default: '/'
    },{
      type: 'input',
      name: 'bugsnag',
      message: 'Insert Bugsnag API KEY',
      default: ''
    },{
      type: 'input',
      name: 'oneskyApiKey',
      message: 'Insert OneSkyApp API KEY',
      default: ''
    },{
      type: 'input',
      name: 'oneskySecret',
      message: 'Insert OneSkyApp SECRET',
      default: ''
    },{
      type: 'input',
      name: 'oneskyProjectId',
      message: 'Insert OneSkyApp PROJECT ID',
      default: ''
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
      // const temp = this.props.elementName.replace(/-([a-z])/g, (g) => {
      //   return g[1].toUpperCase();
      // });
      // this.props.elementNameCamel = capitalizeFirstLetter(temp);
    });
  }

  create(){
    const appName = this.props.appName;

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(appName),
      this.props,
      {},
      {globOptions: {dot: true}}
    );
  }

  install() {
    const appDir = `${process.cwd()}/${this.props.appName}`;
    process.chdir(appDir);

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }

};