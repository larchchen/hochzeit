var React = require('react');
var ReactDOM = require('react-dom');
var WrapperLayout = require('./layouts/wrapperLayout');

class GuestForm extends React.Component {
  render() {
    return (
      <WrapperLayout title={this.props.title}>
        <div id="questionnaire"></div>
      </WrapperLayout>
    );
  }
}

module.exports = GuestForm;
