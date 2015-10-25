'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ToolbarAndroid,
} = React;

var NavToolbar = React.createClass({

  render: function () {
    var title = this.props.title;
    var navIcon = {uri: this.props.icon, isStatic: true}

    return (
      <ToolbarAndroid
        style={styles.toolbar}
        navIcon={navIcon}
        onIconClicked={this.props.onClicked}
        titleColor="#ffffff"
        title={title} />
    )
  }
})

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4E8EF7',
    height: 56,
  }
});

module.exports = NavToolbar;