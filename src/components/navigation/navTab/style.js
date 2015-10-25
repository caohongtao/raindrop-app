'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  userInfo: {
    flex:1,
    flexDirection:'row',
    height:120,
    marginBottom:10,
    backgroundColor:'#4E8EF7',
  },
  sideNavItem:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:20,
  }
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  },
});