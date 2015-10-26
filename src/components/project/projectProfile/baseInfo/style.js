'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  head: {
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    marginBottom:5,
  },
  projectSlogan:{
    color: '#000',
    fontSize: 20,
    marginVertical: 10,
  },
  projectDetail: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
  },
});