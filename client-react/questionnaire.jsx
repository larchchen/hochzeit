var React = require('react');

class Questionaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      mainGuestName: 'mainGuest',
      otherGuests: ['guest1', 'guest2']
    };
    this.handleMainGuestNameChange = this.handleMainGuestNameChange.bind(this);
    this.handleOtherGuestNameChange = this.handleOtherGuestNameChange.bind(this);
  }

  handleMainGuestNameChange(event) {
    this.setState({mainGuestName: event.target.value});
  }
  
  handleOtherGuestNameChange(index, event) {
    let otherGuests = [...this.state.otherGuests];
    otherGuests.splice(
      index, 1, event.target.value
    );
    this.setState({otherGuests: otherGuests});
  }

  render() {
    let guestNameRow = (
      <div className="row">
        <div className="three columns">&nbsp;</div>
        <div className="six columns">
          <div>
            <label htmlFor="mainGuestName">Your name</label>
            <input
              className="u-full-width"
              type="text"
              id="mainGuestName"
              value={this.state.mainGuestName}
              onChange={this.handleMainGuestNameChange}
            />
          </div>
          <div>
            {this.state.otherGuests.length > 0 &&
              <label>Coming with you</label>
            }
            {this.state.otherGuests.map(
              (guest, i) =>
                <input
                  className="u-full-width"
                  type="text"
                  key={i}
                  value={guest}
                  onChange={(e) => this.handleOtherGuestNameChange(i, e)}
                />
              )
            }
          </div>
        </div>
        <div className="three columns">&nbsp;</div>
      </div>
    );

    
    return (
      <div className="container">
        <div className="row">
          <h1>Be our guests</h1>
        </div>
        <div className="row">
          <hr className="u-full-width" />
        </div>
        {guestNameRow}
      </div>
    );
  }
}

module.exports = Questionaire;
