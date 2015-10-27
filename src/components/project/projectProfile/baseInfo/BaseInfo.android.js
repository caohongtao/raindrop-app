'use strict';

var React = require('react-native');
var { Text, View, } = React;
var styles = require('./style');

var BaseInfo = React.createClass({
  render: function() {
    var project = this.props.project;
    return(
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.projectSlogan}>
            {project.slogan}
          </Text>
          <Text style={styles.projectDetail}>
            Created by {project.owner.username} | {project.stars} 关注
          </Text>
        </View>
      </View>
    );
  },
});

module.exports = BaseInfo;