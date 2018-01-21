var React = require('react');
var DefaultLayout = require('./layouts/defaultLayout');

class CoverPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="cover-photo-wrapper"></div>
        <div className="cover-container">
          <div className="name-cn cn-font">陈&nbsp;&nbsp;&nbsp;&nbsp;霖</div>
          <div className="name-cn cn-font">符从容</div>
          <div className="name-en en-font"><i>Lin &amp; Congrong</i></div>
          <div className="location en-font"><i>
            Schloss Prielau,<br />Austria
          </i></div>
          <div className="time en-font"><i>
            10 Feb, 2019
          </i></div>
          <div className="next-button next-cn cn-font">敬请惠临</div>
          <a href="/intro">
            <div className="next-button next-en en-font">
              <i>Register</i>
            </div>
          </a>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = CoverPage;
