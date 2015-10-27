'use strict';

var React = require('react-native');
var { StyleSheet, View, Text, } = React;
var NavToolbar = require('../../navigation/navToolBar/NavToolBar.android')
var styles = require("./style");

var Todo = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <NavToolbar icon={"ic_arrow_back_white_24dp"} title={'TODO'} onClicked={() => {this.props.nav.pop();}} />

        <View style={styles.todo} >
          {this.props.children}
        </View>
      </View>
    );
  },
})

module.exports = Todo;