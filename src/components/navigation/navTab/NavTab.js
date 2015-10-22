'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroid,
  Dimensions,
} = React;

const DRAWER_WIDTH_LEFT = 60;

var NavTab = React.createClass({
  renderNavigationView: function() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>

        <Image style={{width: 100, height: 100}} source={require('image!ic_drawer_backgroud_green')} />
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    )
  },

  render: function () {
    return (
      <DrawerLayoutAndroid
        ref={'navTab'}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderNavigationView}>
        <View>
          {this.props.children}
        </View>
      </DrawerLayoutAndroid>
    );
  }
});


module.exports = NavTab;