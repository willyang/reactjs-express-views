var React = require('react');

module.exports = React.createClass({
  render: function() {
    React.createElement("div", null, "Hello ", this.props.name);
  }
});