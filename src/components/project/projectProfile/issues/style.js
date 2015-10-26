'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  issuesListView:{
    color: '#000000',
    margin: 0,
    padding: 0,
    backgroundColor: '#FFF',
  },
  issuesCell: {
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    padding:10,
  },
  issuesTitle: {
    fontSize: 13,
    marginBottom: 3,
    textAlign: 'left',
    color: '#FF6600'
  },

});