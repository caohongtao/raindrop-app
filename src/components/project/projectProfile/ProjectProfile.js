'use strict';

var React = require('react-native');
var { View, Text, } = React;
var NavToolbar = require('../../navigation/navToolBar/NavToolBar')
var BaseInfo = require('./baseInfo/BaseInfo');
var Issues = require('./issues/Issues');
var styles = require('./style');

var ProjectProfile = React.createClass({

  render: function() {
  	var project = this.props.project;
    return (
      <View style={{flex:1}}>
        <NavToolbar icon={"ic_arrow_back_white_24dp"} title={project.name} onClicked={() => {this.props.nav.pop();}} />

        <BaseInfo project={project} />


        <View style={styles.sectionTitle} >
			<Text style={{color:'#FFF'}}>议题:</Text> 
       	</View>
        <Issues project={project} />
      </View>
    );
  },
});

module.exports = ProjectProfile;