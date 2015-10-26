'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
  loadingText:{
    color: '#FF6600',
    marginTop: 5,
    fontSize: 15,
  },
  issuesCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    margin: 10,
    marginVertical: 5,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
  },
  issuesCreatorAvatar: {
    height: 40,
    width: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius:50
  },
  issuesTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginRight: 10,
    color: '#FF6600'
  },
  issuesDetail: {
    fontSize: 12,
    marginTop: 4,
    color: 'gray',
  },
});