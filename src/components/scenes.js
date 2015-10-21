'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  ToolbarAndroid,
  Navigator,
} = React;

var ProjectList = require('./project/projectList/ProjectList');
var IssuesList = require('./issues/issuesList/IssuesList');
var _navigator;

var NavToolbar = React.createClass({

  componentWillMount: function() {
    var navigator = this.props.navigator;
  },

  render: function () {
    var title = this.props.title;
    var navIcon = this.props.enableBack ? {uri: "ic_arrow_back_white_24dp", isStatic: true} : null;

    return (
      <ToolbarAndroid
        style={styles.toolbar}
        navIcon={navIcon}
        onIconClicked={this.props.navigator.pop}
        titleColor="#ffffff"
        title={title} />
    )
  }
})

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var Scenes = React.createClass({

  renderScene: function(route, navigator) {
    _navigator = navigator;
    if (route.id === 'Project') {
      return (
        <View style={{flex: 1}}>
          <NavToolbar title={route.id} navigator={navigator}/>
          <ProjectList nav = {navigator} name = { route.name }/>
        </View>
      );
    }
    
    if (route.id === 'Issues') {
      return (
        <View style={{flex: 1}}>
          <NavToolbar title={route.id} enableBack={true} navigator={navigator}/>
          <IssuesList nav={navigator} project={route.project} />
        </View>
      )
    }
  },
  render: function() {
    return (
      <Navigator
        initialRoute = {{id: 'Project'}}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.renderScene}
      />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
  toolbar: {
    backgroundColor: '#4E8EF7',
    height: 56,
  }
});

AppRegistry.registerComponent('Scenes', () => Scenes);

module.exports = Scenes;