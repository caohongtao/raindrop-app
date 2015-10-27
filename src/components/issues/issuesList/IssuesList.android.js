'use strict';

var React = require('react-native');
// var WebIntent = require('react-native-webintent');
var { Text, View, ListView, TouchableHighlight, Image, } = React;
var DataService = require('../../../network/DataService');
var NavTab = require('../../navigation/navTab/NavTab.android');
var NavToolbar = require('../../navigation/navToolBar/NavToolBar.android');
var styles = require('./style');

var IssuesList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },

  componentDidMount: function() {
    DataService.getIssuesList()
      .then( responseData => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true
        });
      })
      .done();
  },

  onToolbarClicked:  function (){
    // important：需要调用子控件中导出的方法，可以通过ref，去调用。
    this.refs['navTab'].openNavDrawer();
  },

  render: function() {
    var content = (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderIssuesCell}
        style={styles.projectListView} />
    );
    if(!this.state.loaded){
      content = (
        <View style={styles.loading}>
          <Text >
            载入议题中...
          </Text>
        </View>
      );
    }
    return (
      <NavTab ref='navTab' nav={this.props.nav}>
        <NavToolbar icon={"ic_menu_white"} title={'议题'} onClicked={this.onToolbarClicked} />
        {content}
      </NavTab>
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
          <Image
            source={{uri: issues.creator.avatar}}
            style={styles.issuesCreatorAvatar}
          />
          <View style={{flex:1}}>
            <Text style={styles.issuesTitle}>
              {issues.title}
            </Text>
            <Text style={styles.issuesDetail}>
              <Text style={{color: '#4E8EF7'}}> {issues.creator.username} </Text> 创建于{issues.create_date}
            </Text>
            <Text style={styles.issuesDetail}>
              所属项目<Text style={{color: '#4E8EF7'}}> {issues.belongsTo.name} </Text> | {issues.views} 浏览 | {issues.points} 讨论
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

});

module.exports = IssuesList;