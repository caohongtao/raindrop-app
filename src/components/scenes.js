'use strict';

var React = require('react-native');
var { AppRegistry, View, BackAndroid, Navigator, } = React;
var ProjectList = require('./project/projectList/ProjectList');
var ProjectProfile = require('./project/projectProfile/ProjectProfile');
// var IssuesList = require('./issues/issuesList/IssuesList');


var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var Scenes = React.createClass({
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

module.exports = Scenes;