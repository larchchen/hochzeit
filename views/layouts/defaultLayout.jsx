var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
          <link rel='stylesheet' href='/static/material-icons/material-icons.css' />
          <link rel='stylesheet' href='/static/stylesheets/normalize.css' />
          <link rel='stylesheet' href='/static/stylesheets/skeleton.css' />
          <script type="text/javascript" src="/static/javascripts/bundle.js" />
          <link rel='stylesheet' href='/static/stylesheets/style.css' />
        </head>
        <body>
          {this.props.children}
          <footer>
            <div className='container'>
              <div className='row reverse-in-mobile'>
                <div className='six columns copyright'>
                  &copy; 2018-present Lin Chen All Rights Reserved.
                </div>
                <div className='six columns presents'>
                  Lin Chen &amp; Congrong Fu proudly present.
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
