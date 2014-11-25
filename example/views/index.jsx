var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div>This is a {this.props.message}</div>
    // Also can be written as: 
    // return React.createElement("div", null, "This is a ", this.props.message);
  }
});