'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ToolbarAndroid,
} = React;

var NavToolbar = React.createClass({

  render: function () {
    var title = this.props.title;
    var navIcon = {uri: this.props.icon, isStatic: true}
    // this.props.enableBack ? {uri: "ic_arrow_back_white_24dp", isStatic: true} : {uri: "ic_menu_white", isStatic: true};

    function onIconClicked(){
      if (this.props.enableBack){
        this.props.nav.pop();
      } else{
        this.props.drawer.openDrawer();
      }
    }

    return (
      <ToolbarAndroid
        style={styles.toolbar}
        navIcon={navIcon}
        onIconClicked={this.props.onClicked}
        titleColor="#ffffff"
        title={title} />
    )
  }
})

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4E8EF7',
    height: 56,
  }
});

module.exports = NavToolbar;