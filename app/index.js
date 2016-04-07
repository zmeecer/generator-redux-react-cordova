'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var CONST = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  VERSION: 'version',
  AUTHOR: 'author',
}
module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the React + Redux + Cordova ' + chalk.red('') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: CONST.ID,
        message: 'Enter Cordova bundle ID of the project',
        default: 'org.default.project'
      },
      {
        type: 'input',
        name: CONST.NAME,
        message: 'Enter name of the projece (by npm rules)',
        default: 'ProjectY'
      },
      {
        type: 'input',
        name: CONST.VERSION,
        message: 'Enter version (SemVer notation)',
        default: '0.1.0'
      },
      {
        type: 'input',
        name: CONST.AUTHOR,
        message: 'Enter author name (personal or corporative)',
        default: 'Author'
      },
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var files = require('./files.json');
    var self = this;
    console.log(JSON.stringify(this.props));

    files.static.forEach(function(file) {
      self.fs.copy(self.templatePath(file), self.destinationPath(file));
    });

    files.template.forEach(function(file) {
      if (file === '_.gitignore') {
        self.fs.copyTpl(self.templatePath(file), self.destinationPath('.gitignore'), { props: self.props });
      } else {
        self.fs.copyTpl(self.templatePath(file), self.destinationPath(file), { props: self.props });
      }
    });
  },

  install: function () {
    this.installDependencies();
  }
});
