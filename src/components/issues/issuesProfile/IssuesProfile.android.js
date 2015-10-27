'use strict';

var React = require('react-native');
var { Text, View, ListView, TouchableHighlight, Image, } = React;
var Todo = require('../../common/todo/Todo.android');

var IssuesProfile = React.createClass({
  render: function () {
    return (
      <Todo nav={this.props.nav}>
        <Text> 议题详情尚未做 </Text>
      </Todo>
    );
  },
});

module.exports = IssuesProfile;