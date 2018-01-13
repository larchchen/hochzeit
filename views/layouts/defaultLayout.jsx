var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/static/material-icons/material-icons.css' />
          <link rel='stylesheet' href='/static/stylesheets/normalize.css' />
          <link rel='stylesheet' href='/static/stylesheets/skeleton.css' />
          <script type="text/javascript" src="/static/javascripts/bundle.js" />
          <link rel='stylesheet' href='/static/stylesheets/style.css' />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
