var React = require('react');
var DefaultLayout = require('./layouts/defaultLayout');

class ErrorMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Error</div>
      </DefaultLayout>
    );
  }
}

module.exports = ErrorMessage;
