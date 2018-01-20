var React = require('react');
var ReactDOM = require('react-dom');
var GuestFormLayout = require('./layouts/guestFormLayout');
var Seperator = require('./seperator');

class GuestForm extends React.Component {
  render() {
    return (
      <GuestFormLayout title={this.props.title}>
        <div className="container">
          <div className="row align-center">
            <h1>Yes, we're married</h1>
          </div>
          <Seperator />
          <div className="row intro reverse-in-mobile">
            <div className="one-half column">
              Yes, we're already legally registered one year ago, secretly.<br />
              Yes, this wedding is for the closest families and friends only.<br />
              Yes, your beloved one(s) are welcomed as well.<br />
              Yes, there will be a lot of fun and even more if you arrive earlier.<br /> 
              Yes, formal attire is expected.<br />
              <a target="_blank" href="/prepare">
                Yes, please read this to prepare your trip.
              </a>
            </div>
            <div className="one-half column image">
              <img src="/static/images/hand-in-hand.jpg" />
            </div>
          </div>
          <Seperator />
          <div className="row intro">
            <div className="one-half column image">
              <img src="/static/images/hug.jpg" />
            </div>
            <div className="one-half column">
              No, we will not host more weddings in any other places.<br />
              No, neither the bride nor the groom will run away from the wedding.<br />
              No, we will not accept any gifts in any form, although we would appreciate if you could pay for your accommondation.<br />
              No, there is no direct access to the premise.<br /> 
              <a target="_blank" href="/schloss">
                No, you need to read this to get there.
              </a>
              <br />
            </div>
          </div>
          <Seperator />
          <div className="row intro reverse-in-mobile">
            <div className="one-half column">
              Yes, we need your confirmation as early as possible.<br />
              Yes, the deadline is July 1, 2018.<br />
              Yes, you are still welcomed if you miss the dealine, but we won't be able to guarantee your accommondation any more.<br />
              Yes, please inform us immediately if anything changes.<br />
              <a target="_blank" href="/beOurGuest">
                Yes, please fill this questionnaire to help with our arrangement.
              </a>
            </div>
            <div className="one-half column image">
              <img src="/static/images/wall.jpg" />
            </div>
          </div>
          <Seperator />
        </div>
      </GuestFormLayout>
    );
  }
}

module.exports = GuestForm;
