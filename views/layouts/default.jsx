var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/static/stylesheets/style.css' />
          <link rel='stylesheet' href='/static/stylesheets/normalize.css' />
          <link rel='stylesheet' href='/static/stylesheets/skeleton.css' />
          <script type="text/javascript" src="/static/javascripts/bundle.js" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
