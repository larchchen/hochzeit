var React = require('react');
var DefaultLayout = require('./layouts/defaultLayout');

class CoverPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="cover-photo-wrapper"></div>
      </DefaultLayout>
    );
  }
}

module.exports = CoverPage;
