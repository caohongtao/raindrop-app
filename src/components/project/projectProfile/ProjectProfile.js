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
        <NavToolbar icon={"ic_arrow_back_white_24dp"} title={project.name} onClicked={() => {this.props.nav.pop();}} />
        <Issues project={project} />
      </View>
    );
  },
});

module.exports = ProjectProfile;