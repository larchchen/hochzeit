var React = require('react');
var ReactDOM = require('react-dom');
var GuestFormLayout = require('./layouts/guestFormLayout');

class GuestForm extends React.Component {
  render() {
    return (
      <GuestFormLayout title={this.props.title}>
        <div id="questionnaire"></div>
      </GuestFormLayout>
    );
  }
}

module.exports = GuestForm;
