'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var styles = require("./style");

var ProjectCell = React.createClass({
  render: function() {
    var project = this.props.project;
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image
            source={{uri: project.img}}
            style={styles.projectImage}
          />
          <View style={styles.projectDetailsContainer}>
            <Text style={styles.projectName}>
              {project.name}
            </Text>
            <Text style={styles.projectDetail}>
              Posted by <Text style={{color: '#4E8EF7'}}> {project.owner.username} </Text> | {project.members} 成员 | {project.stars} 关注 | {project.issues} 议题
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = ProjectCell;