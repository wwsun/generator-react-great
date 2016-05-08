'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kryptonian ' + chalk.red('generator-react-great') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: true
    }];

    this.prompt(prompts, function (answers) {
      this.props = answers;

      this.log(answers.name);
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    // package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name
      }
    );

    // webpack
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    // git
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    // eslint
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    );

    // license
    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE')
    );

    // readme


    // App
    this.fs.copy(
      this.templatePath('_index.jsx'),
      this.destinationPath('index.jsx')
    );

    this.fs.copy(
      this.templatePath('_src/_index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copy(
      this.templatePath('_src/_components/_Comp.jsx'),
      this.destinationPath('src/components/Comp.jsx')
    );

    // Demo
    this.fs.copyTpl(
      this.templatePath('_demo/_index.html'),
      this.destinationPath('demo/index.html')
    );

    this.fs.copy(
      this.templatePath('_demo/_index.jsx'),
      this.destinationPath('demo/index.jsx')
    )

  },

  install: function () {
    this.installDependencies();
  }
});
