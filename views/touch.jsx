var React = require('react');
var DefaultLayout = require('./layouts/defaultLayout');
var Seperator = require('./seperator');

class CoverPage extends React.Component {
  componentWillMount() {
    let validated = this.validate();
    if (validated) {
      let output = JSON.stringify(this.props.data, null, 2);
      console.log(output);
    }
    this.setState({validated: validated});
  }

  validate() {
    let data = this.props.data;
    if (!!!data.mainGuestName) {
      return false;
    }
    let arrivalTime = parseInt(data.arrivalTime);
    if (!Number.isInteger(arrivalTime) || isNaN(arrivalTime)) {
      return false;
    }
    if (arrivalTime < 1 || arrivalTime > 3) {
      console.log('arrival time');
      return false;
    }
    if (data.accommondation !== 'true' && data.accommondation !== 'false') {
      return false;
    }
    return true;
  }

  renderData () {
    if (!this.state.validated) {
      return (
        <div className="container">
          <div className="row"><h1>Naughty you.</h1></div>
        </div>
      );
    }
    let data = this.props.data;
    let accommondation = (
      <div className="row">
        You would like us to arrange accommondation.
      </div>
    );
    if (!data.accommondation) {
      accommondation = (
        <div className="row">
          You will book your stay by yourself.
        </div>
      );
    }
    let arrivalTime = null;
    switch (data.arrivalTime) {
      case 1:
        arrivalTime = (
          <div className="row">
            You will arrive in the morning of Feb 10th.
          </div>
        );
        break;
      case 2:
        arrivalTime = (
          <div className="row">
            You will arrive in the afternoon of Feb 9th.
          </div>
        );
        break;
      case 3:
        arrivalTime = (
          <div className="row">
            You will arrive in the morning of Feb 9th.
          </div>
        );
        break;
    }
    let casualDinner = null;
    if (data.casualDinner) {
      casualDinner = (
        <div className="row">
          You would like to have a dinner with us in the evening of Feb 9th.
        </div>
      );
    }
    let activity_dict = {
      'tour': 'Salzburg & Salt mine',
      'ski': 'Ski/Snowboarding',
      'glacier': 'Glacier hiking',
      'igloo': 'Igloo building',
    };
    let activities = null;
    if (data.guestInterests) {
      let guestInterests = data.guestInterests.split(',');
      let fullInterests = guestInterests.map(function(i) {
        if(activity_dict[i]) {
          return activity_dict[i];
        }
      }).join(',');
      activities = (
        <div className="row">
          You are interested in: {fullInterests}.
        </div>
      );
    }

    let special = null;
    if (data.specialNeed) {
      special = (
        <div className="row">
          {data.specialNeed}
        </div>
      );
    }

    let guest = (
      <div className="row">You will not bring other guests.</div>
    );
    if (data.otherGuestNames) {
      let guests = data.otherGuestNames.split().join(' ');
      guest = (
        <div className="row">You will come with {guests}.</div>
      );
    }

    return (
      <div className="container">
        <div className="row"><h1>Keep in touch</h1></div>
        <Seperator />
        <div className="row">
          We are so glad that you can come to our wedding.
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          You told us that:
        </div>
        {guest}
        {arrivalTime}
        {accommondation}
        {casualDinner}
        {activities}
        {special}
        <div className="row">&nbsp;</div>
        <div className="row">Please inform us if anything changes.</div>
      </div>
    );
  }

  render() {
    let data = this.renderData();
    return (
      <DefaultLayout title={this.props.title}>
        <div id="touch-photo-wrapper"></div>
        <div className="touch-container">
          {data}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = CoverPage;
