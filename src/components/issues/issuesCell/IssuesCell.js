'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight
} = React;

var styles = require("./style");

var IssuesCell = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.issuesTitle}>
            {this.props.issues.title}
          </Text>
      </View>
    );
  }
});

module.exports = IssuesCell;