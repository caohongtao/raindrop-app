'use strict';

var React = require('react-native');
// var WebIntent = require('react-native-webintent');
var { Text, View, ListView, TouchableHighlight, } = React;
var DataService = require('../../../../network/DataService');
var styles = require('./style');

var Issues = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },
  componentDidMount: function() {
    DataService.getProjectIssuesList(this.props.project.id)
      .then((data) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          loaded: true
        });
      })
      .done();
  },
  render: function() {
    if(!this.state.loaded){
      return(<View/>
      );
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderIssuesCell}
        style={styles.issuesListView}/>
    );
  },

  selectIssues: function(issues) {
    this.props.nav.push({
      id: 'IssuesProfile',
      issues: issues,
    });
  },

  renderIssuesCell: function(issues){
    return(
      <TouchableHighlight onPress={() => this.selectIssues(issues)}>
        <View style={styles.issuesCell}>
          <Text style={styles.issuesTitle}>
            {issues.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  },
});

module.exports = Issues;