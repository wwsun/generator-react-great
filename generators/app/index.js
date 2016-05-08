'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kryptonian ' + chalk.red('generator-react-great') + ' generator!'
    ));

    var prompts = [ {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    } ];

    this.prompt(prompts, function (answers) {
      this.props = answers;

      this.log(answers.name);
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: {
    // Copy the configuration files
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );

      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
    },

    // Copy application files
    app: function () {
      this.fs.copy(
        this.templatePath('_index.jsx'),
        this.destinationPath('index.jsx')
      );

      this.fs.copy(
        this.templatePath('_src/_index.jsx'),
        this.destinationPath('src/index.jsx')
      );

      this.fs.copy(
        this.templatePath('_src/_components/_Comp.jsx'),
        this.destinationPath('src/components/Comp.jsx')
      );

      this.fs.copyTpl(
        this.templatePath('_demo/_index.html'),
        this.destinationPath('demo/index.html'), {
          name: this.props.name
        }
      );

      this.fs.copy(
        this.templatePath('_demo/_index.jsx'),
        this.destinationPath('demo/index.jsx')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
