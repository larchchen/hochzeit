var React = require('react');
var ReactDOM = require('react-dom');
var DefaultLayout = require('./defaultLayout');

class WrapperLayout extends DefaultLayout {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="body-wrapper">
          {this.props.children}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = WrapperLayout;

