'use strict';

var React = require('react-native');
// var WebIntent = require('react-native-webintent');
var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;
var DataService = require('../../../network/DataService');
var styles = require('./style');

var IssuesList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },
  componentDidMount: function() {
    DataService.getIssuesList(this.props.project.id)
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
        renderRow={this.renderCommentCell}
        renderHeader={this.renderCommentsHeader}
        style={styles.commentListView}/>
    );
  },
  renderCommentsHeader: function(){
    if(!this.state.loaded){
      return(<View/>
      );
    }

    var project = this.props.project;
    return(
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>
            {project.title}
          </Text>
          <Text style={styles.text}>
            {project.slogan}
          </Text>
          <Text style={styles.postDetailsLine}>
            Created by {project.owner.username} | {project.stars} 关注
          </Text>
          <View style={styles.separator}/>
          <Text style={styles.commentTitle}>{project.issues} 议题:</Text>
        </View>
      </View>
    );
  },
  renderCommentCell: function(issues){
    return(
      <View></View>
        // <CommentCell issues={issues} />
    );
  },
});

module.exports = IssuesList;