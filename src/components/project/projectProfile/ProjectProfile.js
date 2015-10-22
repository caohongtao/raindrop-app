'use strict';

var React = require('react-native');
var { View, ListView, TouchableHighlight, } = React;
var NavToolbar = require('../../navigation/navToolBar/NavToolBar')
var Issues = require('./issues/Issues');
// var styles = require('./style');

var ProjectProfile = React.createClass({
  render: function() {
  	var project = this.props.project;
    return (
      <View>
        <NavToolbar enableBack={true} title={project.name} navigator={this.props.navigator} />
        <Issues project={project} />
      </View>
    );
  },
});

module.exports = ProjectProfile;