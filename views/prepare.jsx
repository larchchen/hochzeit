var React = require('react');
var ReactDOM = require('react-dom');
var DefaultLayout = require('./layouts/DefaultLayout');
var Seperator = require('./seperator');

class Prepare extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="prepare-photo-wrapper"></div>
        <div id="body-wrapper">
          <div className="container prepare-container">
            <div className="row align-center">
              <h1>Are you prepared?</h1>
            </div>
            <Seperator />
            <div className="row">
              <div className="one-half column">
                <div className="align-center">
                  <h4>Enjoy Alps and snow</h4>
                </div>
                <div className="align-center">
                  <ul>
                    <li>
                      Keep warm. Temprature ranges from +5&#8451; to -15&#8451;.
                    </li>
                    <li>
                      Definitely you need proper winter jackets.
                    </li>
                    <li>
                      A pair of water-proof snow boots are highly recommended.
                    </li>
                    <li>
                      Gloves, Beanie, Scarf. Become a bear.
                    </li>
                    <li>
                      Bring your ski equipments.
                    </li>
                    <li>
                      Plan your pre/post-wedding trips.
                    </li>
                    <li>
                      Don't forget you camera.
                    </li>
                    <li>
                      If you need any recommendations, ask us.
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="u-full-width mobile-only" />
              <div className="one-half column">
                <div className="align-center">
                  <h4>Be a wedding pro</h4>
                </div>
                <div className="align-center">
                  <ul>
                    <li>
                      Rest well. Our wedding lasts from 2pm until midnight.
                    </li>
                    <li>
                      Gentlemen, please dress up in black-tie suit.
                    </li>
                    <li>
                      Ladies, please put on your favourite cocktail dress.
                    </li>
                    <li>
                      Be ready to swing.
                    </li>
                    <li>
                      Triumph our party games and make some new friends.
                    </li>
                    <li>
                      Tell us any allergies and enjoy our Michelin-stared restaurant.
                    </li>
                    <li>
                      Don't bring along any gifts.
                    </li>
                    <li>
                      <a href="/beOurGuest/en">Most importantly, tell us you are coming.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Prepare;
