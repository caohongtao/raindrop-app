'use strict';

var React = require('react-native');
var { Text, View, ListView,} = React;
var DataService = require('../../../network/DataService');
var ProjectCell = require('../projectCell/ProjectCell');
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
      this.renderProjectList()
    );
  },

  renderProjectList: function(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProject}
        style={styles.projectListView}/>
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
      id: 'Issues',
      project: project,
    });
  },
});
module.exports = ProjectList;
