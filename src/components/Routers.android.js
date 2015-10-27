'use strict';

var React = require('react-native');
var { AppRegistry, View, BackAndroid, Navigator, Text } = React;
var ProjectList = require('./project/projectList/ProjectList.android');
var ProjectProfile = require('./project/projectProfile/ProjectProfile.android');
var IssuesList = require('./issues/issuesList/IssuesList.android');
var IssuesProfile = require('./issues/issuesProfile/IssuesProfile.android');
var Todo = require('./common/todo/Todo.android');

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var Routers = React.createClass({
  renderScene: function(route, navigator) {

    console.info("当前路由：", navigator.getCurrentRoutes());
    _navigator = navigator;
    if (route.id === 'ProjectList') {
      return (
        <View style={{flex: 1}}>
          <ProjectList nav={navigator} />
        </View>
      );
    }
    
    if (route.id === 'ProjectProfile') {
      return (
        <View style={{flex: 1}}>
          <ProjectProfile nav={navigator} project={route.project} />
        </View>
      )
    }

    if (route.id === 'IssuesList') {
      return (
        <View style={{flex: 1}}>
          <IssuesList nav={navigator} />
        </View>
      );
    }

    if (route.id === 'IssuesProfile') {
      return (
        <View style={{flex: 1}}>
          <IssuesProfile nav={navigator} />
        </View>
      )
    }

    if (route.id === 'Login') {
      return (
        <View style={{flex: 1}}>
          <Todo nav={navigator}>
            <Text> 登录尚未实现 </Text>
          </Todo>
        </View>
      )
    }

    if (route.id === 'Blog') {
      return (
        <View style={{flex: 1}}>
          <Todo nav={navigator}>
            <Text> 博客尚未做 </Text>
          </Todo>
        </View>
      )
    }

    if (route.id === 'Setting') {
      return (
        <View style={{flex: 1}}>
          <Todo nav={navigator}>
            <Text> 没有什么需要设置的。。。issues </Text>
          </Todo>
        </View>
      )
    }

  },
  render: function() {
    return (
      <Navigator
        initialRoute = {{id: 'ProjectList'}}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.renderScene}
      />
    );
  },
});

module.exports = Routers;