'use strict';

var React = require('react-native');
var { Text, View, ListView, } = React;
var DataService = require('../../../network/DataService');
var NavTab = require('../../navigation/navTab/NavTab')
var NavToolbar = require('../../navigation/navToolBar/NavToolBar');
var ProjectCell = require('./projectCell/ProjectCell');
var styles = require("./style");

var ProjectList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },

  componentDidMount: function() {
    DataService.getProjectList()
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
    if(!this.state.loaded){
      return (
        <View style={styles.container}>
          <Text style={styles.loadingText}>
            Fetching Posts...
          </Text>
      </View>
      );
    }
    return (
      // important：NavTab外面不能包其他标签，因为其用了DrawerLayoutAndroid, DrawerLayoutAndroid外有别的标签会不显示，且没有任何提示。
      // important：ListView不能滚动。如果ListView包在一个View中，那么外面这个View需要设置style={flex: 1}。
      <NavTab ref='navTab'>
        <NavToolbar icon={"ic_menu_white"} title={'项目'} onClicked={this.onToolbarClicked} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderProject}
          style={styles.projectListView} />
      </NavTab>
    );
  },

  renderProject: function(project){
    return(
      <ProjectCell
        onSelect={() => this.selectProject(project)}
        project={project}/>
    );
  },

  selectProject: function(project) {
    this.props.nav.push({
      id: 'ProjectProfile',
      project: project,
    });
  },
});

module.exports = ProjectList;
