'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var CONST = {
  ID: '_id',
  NAME: '_name',
  DESCRIPTION: '_desctiption',
  VERSION: '_version',
  AUTHOR: '_author',
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
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
