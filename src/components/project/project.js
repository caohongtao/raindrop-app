'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
} = React;


var ProjectView = React.createClass({

  render: function() {
    return(
      <View>
        <Text>
          Fetching Posts...
        </Text>
      </View>
    );
  },

});
module.exports = ProjectView;
