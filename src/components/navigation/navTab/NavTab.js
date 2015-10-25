'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroid,
  Dimensions,
  ListView,
  TouchableNativeFeedback,
} = React;
var { Icon, } = require('react-native-icons');
var styles = require("./style");

const DRAWER_WIDTH_LEFT = 60;

var NavTab = React.createClass({
  getInitialState: function() {
    var navItems=[
      {title:"项目", icon:'fontawesome|book', onSelect:()=>{}},
      {title:"议题", icon:'fontawesome|bookmark', onSelect:()=>{}},
      {title:"博客", icon:'fontawesome|rss', onSelect:()=>{}},
      {title:"设置", icon:'fontawesome|cog', onSelect:()=>{}},
    ];
    var dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1.title !== row2.title});
    return {
      dataSource: dataSource.cloneWithRows(navItems),
    };
  },

  renderSideNavHeader: function() {
    return (
      <View style={styles.userInfo}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the</Text>
      </View>
    );
  },

  renderSideNavItem: function(item) {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={item.onSelect}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{styles.sideNavItem}}>
            <Icon
              name={item.icon}
              size={30}
              color='#3b5998'
              style={{width: 30, height: 30,
              }}
            />
            <Text style={{fontSize: 20, marginLeft: 20,}}>
              {item.title}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  },

  renderSideNav: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSideNavItem}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
        renderHeader={this.renderSideNavHeader}
        style={{flex:1, backgroundColor: 'white'}}
      />
    )
  },

  openNavDrawer: function () {
    this.refs['drawer'].openDrawer();
  },

  render: function () {
    return (
      <DrawerLayoutAndroid
        ref={'drawer'}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderSideNav}>
        <View style={{flex: 1}}>
          {this.props.children}
        </View>
      </DrawerLayoutAndroid>
    );
  }
});


module.exports = NavTab;